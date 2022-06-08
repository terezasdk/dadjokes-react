import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke';
import { jokes } from './jokes';

// prvni foto z 15. kvetna
const App = () => {
  return (
    <>
      <div className="container">
        {jokes.map((joke) => {
          return (
            <Joke
              key={joke.id}
              userAvatar={joke.avatar}
              userName={joke.name}
              text={joke.text}
              likes={joke.likes}
              dislikes={joke.dislikes}
            ></Joke>
          );
        })}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
