import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        
        <Route path="/" component={HomePage }/>
        <Route path="/coins/:id" component={CoinPage}/>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
