import React from 'react';

const lightColors = ["#FDE2E4", "#FDE8CD", "#FFF9B0", "#CFFFE5", "#D0F0FD", "#E5D0FD", "#FFD0F0", "#CDE6FD"];
const darkColors = ["#6b5b73", "#5a6c7d", "#5f7a6b", "#7a5f6b", "#4f5d75", "#6d6875", "#5a5a72"];

function Background({ isDark, onThemeToggle, onBgChange }) {
  const handleRandomBg = () => {
    const colors = isDark ? darkColors : lightColors;
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    onBgChange(randomColor);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <button 
        onClick={onThemeToggle}
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          border: '1px solid #ccc',
          cursor: 'pointer',
          backgroundColor: isDark ? '#333' : '#fff',
          backgroundImage: isDark 
            ? 'url("https://i.imgur.com/JPsmZE6.png")' 
            : 'url("https://i.imgur.com/mF8Awj8.png")', 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'all 0.3s ease'
        }}
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      />
      <button 
        onClick={handleRandomBg}
        style={{
          padding: '10px 15px',
          borderRadius: '5px',
          border: 'none',
          backgroundColor: isDark ? '#fff' : '#333',
          color: isDark ? '#333' : '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease'
        }}
      >
        Schimbă Culoare Fundal
      </button>

    </div>
  );
}

export default Background;