import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke';
import { jokes } from './jokes.js';

const App = (props) => {
  return (
    <>
      <div className="container">
        <Joke seznamVtipu={jokes} />;
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
