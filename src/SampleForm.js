import {useState} from 'react'
import ReactDOM from 'react-dom/client';

function SampleForm() {

const [name, setName] = useState("");

const handleSubmit = (event) => {
  console.log({name});
  event.preventDefault();
  alert(`your name is : ${name}`);
  
}

  return(
    <form onSubmit={handleSubmit}>
      <label>Enter your Name :
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
      </label>
    </form>
  );
}

export default SampleForm;
