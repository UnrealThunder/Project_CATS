import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import CatCard from './components/CatCard';

function App() {
  return (
    <div className="App">
      <Header 
        title="Cat Explorer" 
        subtitle="Descopera pisici" 
        logoUrl="https://imgur.com/Gt1JHqj.jpg" 
      />
      <Body /> 
      <Footer />
    </div>
  );
}

export default App;