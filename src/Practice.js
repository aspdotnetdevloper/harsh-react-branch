import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function PracticeComponent(){

  const b = useRef();

  useEffect(()=>{
      // Effect logic
      console.log(b.current.offsetHeight);
      return ()=>{
        // effect cleaning logic.
      }
  },[])

  return <> 
    <div ref={b}>
      <p>this is paragraph 1.</p>
      <p>this is paragraph 2.</p>
      <p>this is paragraph 3.</p>
      <p>this is paragraph 1.</p>
      <p>this is paragraph 2.</p>
      <p>this is paragraph 3.</p>
    </div>
  </>;
}

export default PracticeComponent;