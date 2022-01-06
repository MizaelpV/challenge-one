import { useState } from 'react';
import './App.css';
import CardComment from './components/CardComment';
import NewComment from './components/NewComment';

function App() {
  return (
    <>
      <CardComment
        name={'mizaelparedesv'}
        date={'1 month ago'}
        message={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
        }
      />
      <NewComment />
    </>
  );
}

export default App;
