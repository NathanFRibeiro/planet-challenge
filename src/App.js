import React from 'react';
import './styles/App.css';
import Planet from './components/Planet';

import stars from './assets/stars3.mp4';

function App() {
  return (
    <div className="App">
      <div>
        <video muted autoPlay loop>
          <source src={stars} type="video/mp4" />
        </video>
      </div>
      <div>
        <Planet />
      </div>
    </div>
  );
}

export default App;
