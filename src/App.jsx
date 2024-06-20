import React from 'react';
import Header from './component/Header';
import CardList from './component/CardList';
import './App.css';

const App = () => {
  const exercises = [
    { title: 'Puxada frontal', sets: '3 séries x 12 repetições', imgSrc: 'path_to_image1' },
    { title: 'Remada curvada', sets: '3 séries x 12 repetições', imgSrc: 'path_to_image2' },
    { title: 'Remada unilateral', sets: '3 séries x 12 repetições', imgSrc: 'path_to_image3' },
    { title: 'Levantamento terra', sets: '3 séries x 12 repetições', imgSrc: 'path_to_image4' },
  ];

  return (
    <div className="app">
      <Header />
      <CardList exercises={exercises} />
    </div>
  );
};

export default App;
