from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import CharactorSerializer
import google.generativeai as genai
import json
from .models import Charactor
from random import choice
from dotenv import load_dotenv
import os

load_dotenv()
API_KEY = os.getenv("GOOGLE_API_KEY")

class Game(APIView):
    def get(self, request, *args, **kwargs):
        level = request.query_params.get("level", None)
        genre = request.query_params.get("genre", None)
        
        if level is None or genre is None:
            return Response({"error": "Both 'level' and 'genre' parameters are required."}, status=status.HTTP_400_BAD_REQUEST)

        charactor = Charactor.objects.filter(
            level=level,
            genre=genre
        )
        
        if not charactor.exists():
            return Response({"error": "No characters found with the given level and genre."}, status=status.HTTP_404_NOT_FOUND)
        
        chosen_charactor = choice(charactor)
        ans = chosen_charactor.name
        related_words = self.get_related_words(ans)
        return Response(related_words)

    def get_related_words(self, ans):
        genai.configure(api_key=API_KEY)
        gemini_pro = genai.GenerativeModel("gemini-pro")
        prompt = f'''
        答えとなる単語"{ans}"から連想する単語をJson形式で30個羅列してください。以下の条件を満たすこと。
        1 それぞれの単語には答えとなる単語"{ans}"との関連度(1.00~0.00の間)を判断して数値を付けること。
        2 回答には余計な文字を一切入れず以下の指定する形式でjsonとして出力すること。
        3 関連度が高い順に上から並べる。
        4 {ans}に直接的に結びつく言葉は禁止。
        禁止例)
        答えとなる単語→連想単語としたとき、
        マリオ→スーパーマリオNG（略称・愛称）
        ジョンレノン→ジョン・レノンNG（表記の違い）
        安倍晋三→安倍総理NG（言い方の違い）
        ソニック→ソニック・ザ・ムービーNG（連想単語の中に答えが含まれてしまっている）
        
        例）ピカチュウの場合
        {{
        "words": [
        {{
        "word": "ポケモン",
        "relevance": 0.95
        }},
        {{
        "word": "黄色",
        "relevance": 0.70
        }},
        {{
        "word": "電気",
        "relevance": 0.90
        }},
        ...
        ]
        }}
        '''
        response = gemini_pro.generate_content(prompt)
        print(response.text)
        related_words = json.loads(response.text.replace('```json','').replace('```',''))
        related_words["ans"] = ans
        related_words["words"] = related_words["words"][:6]
        return related_words
