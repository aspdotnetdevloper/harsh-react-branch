import React from 'react';

function ButtonClick(){
  const v = 'ayush';
    const handleClick =(p)=>{
      alert("button is clicked"+ p);
    }
    return(
      <button onClick={()=>handleClick(v)}>click me</button>
    );
}

export default ButtonClick;
