import './Body.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CatCard from './CatCard'; 
import Background from './Background';

const API_KEY = process.env.react_app_MY_SECRET_API_KEY;

function Body() {
  const [searchTerm, setSearchTerm] = useState("");
  const [catData, setCatData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const handleSearch = (e) => {
    if (e) e.preventDefault(); 
    if (searchTerm.trim() === "") return;
    setLoading(true);
    
    axios.get('https://api.api-ninjas.com/v1/cats?name=' + searchTerm, {
      headers: { 'X-Api-Key': API_KEY }
    })
    .then(response => {
      setTimeout(() => {
        if (response.data.length > 0) {
          setCatData(response.data[0]);
        } else {
          alert("Nu am gasit rasa: " + searchTerm);
        }
        setLoading(false);
      }, 1000);
    })
    .catch(err => { 
      console.log(err); 
      setLoading(false); 
    });
  };

  const handleRandom = () => {
    const rase = ["persian", "siamese", "bengal", "ragdoll", "abyssinian", "maine coon", "british shorthair", "russian blue"];
    const rasaRandom = rase[Math.floor(Math.random() * rase.length)];
    setSearchTerm(rasaRandom);
    setLoading(true);
    
    axios.get('https://api.api-ninjas.com/v1/cats?name=' + rasaRandom, {
      headers: { 'X-Api-Key': API_KEY }
    })
    .then(response => {
      setTimeout(() => {
        if (response.data.length > 0) setCatData(response.data[0]);
        setLoading(false);
      }, 1000);
    })
  };

  const handleThemeToggle = () => {
    setIsDark(!isDark);
    setBgColor("");
  };

  const finalBgColor = bgColor ? bgColor : (isDark ? "#1e1e1e" : "#ffffff");
  
  return (
    <main 
      className="body" 
      style={{
        backgroundColor: finalBgColor,
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        margin: 0,
        boxSizing: 'border-box',
        transition: 'background-color 0.3s ease',
        width: '100%'
      }}
    >
      <Background 
        isDark={isDark} 
        onThemeToggle={handleThemeToggle}
        onBgChange={(color) => setBgColor(color)}
      />  
      <form 
        onSubmit={handleSearch} 
        style={{ marginTop: '20px', marginBottom: '20px' }}
      >
        <input 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Cauta o rasa (ex: persian, siamese)" 
          style={{
            padding: '8px',
            backgroundColor: isDark ? '#333' : '#fff',
            color: isDark ? '#fff' : '#000',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
        />
        <button type="submit" style={{ marginLeft: '10px', padding: '8px 12px' }}>
          Cauta
        </button>
        <button type="button" onClick={handleRandom} style={{ marginLeft: '10px', padding: '8px 12px' }}>
          Rasa aleatoare
        </button>
      </form>
      
      {loading && (
        <div className='cat-loading-container'>
          <img
            src="https://media1.tenor.com/m/XoRLL0SkhggAAAAd/livasmol-loading-cat.gif"
            alt="Loading Kitty"
            className='cat-loading-gif'
          />  
        </div>
      )}
      {catData && !loading && <CatCard cat={catData} darkMode={isDark} />}
      
    </main>
  );
}
export default Body;