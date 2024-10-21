import './App.css';
import React from 'react';


function FootBall() {

  const shoot = (a,b) => {
    alert("great shot "+ a+" "+b.type);
  };

  return(
    <button onClick={(event)=>shoot('goal',event)}>click me</button>
  );
}

export default FootBall;
