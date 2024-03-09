from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import GameSerializer
import google.generativeai as genai
import json

API_KEY = "YOUR_API_KEY"

class Game(APIView):
    def get(self, request, *args, **kwargs):
        ans = "海賊狩りのゾロ"
        related_words = self.get_related_words(ans)
        return Response(related_words)

    def get_related_words(self, ans):
        genai.configure(api_key=API_KEY)
        gemini_pro = genai.GenerativeModel("gemini-pro")
        prompt = f'''
        {ans}から連想する単語をJson形式で20個羅列して。それぞれの単語には{ans}との関連度(1.00~0.00の間)を判断して数値を付けること。回答には余計な文字を一切入れないこと。
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
        related_words = json.loads(response.text)
        print(response)
        return related_words
