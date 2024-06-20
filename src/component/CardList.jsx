import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ exercises }) => {
  return (
    <div className="card-list">
      {exercises.map((exercise, index) => (
        <Card key={index} title={exercise.title} sets={exercise.sets} imgSrc={exercise.imgSrc} />
      ))}
    </div>
  );
};

export default CardList;
