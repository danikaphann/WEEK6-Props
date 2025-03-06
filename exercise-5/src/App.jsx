import React from 'react';
import {AVAILABLE_ITEMS} from './data.js';
import "./index.css";


function Item( item ) {
  return (
    <div className="card">
      <h4>{item.name}</h4>
      <small>{item.occupation}</small>
      <p>{item.description}</p>
      <img src={item.image.src} alt={item.image.alt} />
    </div>
  );
}


function App() {
  return <>
  {/* Your code  here */}
    <header>
      <h1> My Items </h1>
    </header>

    <main>
      <div className="card-view">
        <div className="cards-grid">
        {AVAILABLE_ITEMS.map((item) => (
              <Item key={item.id} {...item} />
        ))}
        </div>
      </div>
    </main>
  </>;
}

export default App;
