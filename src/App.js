import React from 'react';
import './App.css';

function App() {
  const data=["Samsung","HTC","Micromax","Apple"];
  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <ul>
        <li>Android</li>
        <li>BlackBerry</li>
        <li>iPhone</li>
        <li>Windows Phone</li>
      </ul>
      <h1>Mobile Manifactures</h1>
      <div className='box'>
        <ul>
          {data.map((e)=> (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
