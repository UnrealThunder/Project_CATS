/*
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import CatCard from './components/CatCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import react from 'react';
import Contor from './components/Body';
import SearchBox from './components/Body';

const API_KEY = 'AivVGCaas5g6IBKbwg00dhTQQUB7tswZJ61x31sR';

function App() {
  return (
    <div className="app">
      <Header 
        title="Cat Explorer" 
        subtitle="Descopera pisici" 
        logoUrl="https://imgur.com/Gt1JHqj.jpg" />
      <Body />
      <Contor />
      <SearchBox />
      <Footer />
    </div>
  );
}
export default App; */  

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import CatCard from './components/CatCard';

function App() {
  return (
    <div className="app">
      <Header 
        title="Cat Explorer" 
        subtitle="Descopera pisici" 
        logoUrl="https://imgur.com/Gt1JHqj.jpg" 
      />
      
      {/* This single component now holds the cat data, the search box, AND the counter! */}
      <Body /> 
      <Footer />
    </div>
  );
}

export default App;