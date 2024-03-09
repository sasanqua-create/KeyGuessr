import React, { useState } from 'react';
import "./hint.css";

interface CardProps {
  text: string;
}

const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className="Card3">{text}</div>
  );
};

export default Card;