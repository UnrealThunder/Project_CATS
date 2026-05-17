/*
import './Body.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './CatCard';

const API_KEY = 'AivVGCaas5g6IBKbwg00dhTQQUB7tswZJ61x31sR';

function Body() {
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/cats?name=persian', {
      headers: { 'X-Api-Key': API_KEY }
    })
    .then(response => {
      setCatData(response.data[0]);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!catData) return <p>No data available.</p>;


function Contor() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Contor: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Cauta o rasa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Ai scris: {searchTerm}</p>
    </div>
  );
}

return (
  <main className="body">
    <h2>{catData.name}</h2>
    <p>Origine: {catData.origin}</p>
    <p>Family friendly: {catData.family_friendly}/5</p>
    <img className="cat-image" src={catData.image_link} alt={catData.name} />
  </main>
)
}
export default Body;    */

import './Body.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './CatCard'; 

const API_KEY = 'AivVGCaas5g6IBKbwg00dhTQQUB7tswZJ61x31sR';

function Body() {
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/cats', {
      headers: { 'X-Api-Key': API_KEY }
    })
    .then(response => {
      setCatData(response.data[0]);
      setLoading(false);
    })
    .catch(error => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!catData) return <p>No data available.</p>;
}

// The Counter component (kept safe outside of Body)
function Contor() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h2>Contor: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

// The SearchBox component (kept safe outside of Body)
function SearchBox() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <input
        type="text"
        placeholder="Cauta o rasa..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>Ai scris: {searchTerm}</p>
    </div>
  );
}

export default Body;