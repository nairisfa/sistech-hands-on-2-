// app/components/Card.tsx
import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="carousel-item">
      <img
        src={image}
        alt={title}
        className="carousel-item-image"
      />
      <h3 className="carousel-item-title">{title}</h3>
      <p className="carousel-item-description">{description}</p>
    </div>
  );
};

export default Card;
