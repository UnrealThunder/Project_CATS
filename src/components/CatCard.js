import './CatCard.css';
import React from 'react';

function Stars({ count }) {

  const validCount = count ? Math.max(0, Math.min(5, count)) : 0;
  
  return <span>{"⭐".repeat(validCount)}</span>;
}

function CatCard({ cat }) {
  if (!cat) return null;

  return (
    <div style={{
      border: '2px solid #333',
      borderRadius: '8px',
      padding: '20px',
      maxWidth: '300px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      marginTop: '20px'
    }} className="cat-card">
      <img src={cat.image_link} alt={cat.name} className="cat-image" />
      <h2>{cat.name}</h2>
      <p><strong>Origine:</strong> {cat.origin}</p>
      <p><strong>Speranță de viață:</strong> {cat.min_life_expectancy} - {cat.max_life_expectancy} ani</p>
      <p><strong>Temperament:</strong> Jucăușă ({cat.playfulness}/5), Prietenoasă ({cat.family_friendly}/5)</p>
      <p>Family friendly: <Stars count={cat.family_friendly} /></p>
    </div>
  );
}  

export default CatCard;