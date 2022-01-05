import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './pages/CoinPage';
import HomePage from './pages/HomePage';

function App() {
  // using 
  const useStyles = makeStyles(() => ({
    App: {
      backgrounColor: ""
    }
  }));

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/coins/:id"  element={<CoinPage />} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
