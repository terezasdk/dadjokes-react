import React, { useState } from 'react';
import './style.css';

//pět props: userAvatar, userName, text, likes, dislikes
const Joke = (props) => {
  const [scoreLike, setScoreLike] = useState(props.likes);
  const [scoreDislike, setScoreDislike] = useState(props.dislikes);

  const handleClickLike = () => {
    setScoreLike(scoreLike + 1);
  };

  const handleClickDislike = () => {
    setScoreDislike(scoreDislike + 1);
  };

  return (
    <>
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={props.userAvatar} />
            <p className="user-name">{props.userName}</p>
          </div>

          <p className="joke__text">{props.text}</p>
        </div>
        <div className="joke__likes">
          <button
            onClick={handleClickLike}
            id="btn-up"
            className="btn-like btn-like--up"
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {scoreLike}
          </span>
          <button
            onClick={handleClickDislike}
            id="btn-down"
            className="btn-like btn-like--down"
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {scoreDislike}
          </span>
        </div>
      </div>
    </>
  );
};

export default Joke;
