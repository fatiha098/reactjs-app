import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import image from './images/owl.png';
import image2 from './images/owl-sans-bg.png';


function App() {

  const [result, setResult] = useState('');

  const onClickBtn = (e) => {

    e.preventDefault();

    const input = document.getElementById('name')
    const span =  document.querySelector('.warning');

    const name = input.value;

    if(name === ''){

      input.style.border = '2px solid red';
      span.style.visibility = "visible";
      span.textContent = 'Please enter a name';
      return 
    }

    getData(name);
  }

  const getData = async (name) => {

    const input = document.getElementById('name')
    const span =  document.querySelector('.warning');

    const url = `https://api.agify.io/?name=${name}`;

    const resp = await axios.get(url);

    if(resp.data.age === null ){

      input.style.border = '2px solid red';
      span.style.visibility = "visible";
      span.textContent = 'Name is not valid';

    }else {

      setResult(`${name}'s age is ${resp.data.age} years old`);
      document.querySelector('.result').style.animation = "zoom 0.4s"
    }
  }

  const handleClick = () => {

    const switchBtn = document.querySelector('.switchBtn');
    const switchParent = document.querySelector('.switch');
    const body = document.querySelector('.body');
    const input = document.querySelector('.input');
    const owl = document.querySelector('.owl');
    const result = document.querySelector('.result');

    switchBtn.classList.toggle('light');
    body.classList.toggle('dark');
    switchParent.classList.toggle('switch-btn-dark');
    switchBtn.classList.toggle('transition');
    input.classList.toggle('input-border')
    result.classList.toggle('white-color');
    owl.classList.toggle('hide-image');

  }

  return (
  <div className='body'>
    <div className="switch"><div className="switchBtn" onClick={handleClick}></div></div>
    <div className="content">
    <img src={image} alt="not found" className='owl' ></img>
    <img src={image2} alt="not found" className='owl'></img>
    
    <form action="">
      <input type="text" name="name" placeholder="Enter a name" id="name" className="input" ></input>
        <br></br>
      <div className="btn">
        <div>
          <input type="submit" value="Click Me" id="click" onClick={onClickBtn}></input>
          <span className="warning">message</span>
          </div>
      </div>
    </form>
    <div className="result">{result}</div>
    </div>
  </div>
  );
}

export default App;
