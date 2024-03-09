import React from 'react';
import Card from "./card";
import "./hint.css";

interface Props {
  texts: string[];
}

const Hint: React.FC<Props> = ({ texts }) => {
  return (
    <div className="Hint">
      {texts.map((text, index) => (
        <div key={index} className='CardList'>
          <Card text={text} />
        </div>
      ))}
    </div>
  );
};

export default Hint;