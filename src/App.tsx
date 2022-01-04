import { useState } from 'react';
import './App.css';
import CardComment from './components/CardComment';

function App() {
  return (
    <>
      <CardComment
        name={'mizaelparedesv'}
        date={'1 month ago'}
        message={'Impressive'}
      />
    </>
  );
}

export default App;
