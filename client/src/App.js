import './App.css';


import Login from './components/Login/Login'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Stock from './components/Stock/Stocks';
import Portfolio from './components/Portfolio/Portfolio';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  const user = localStorage.getItem('profile')
	console.log(user)
  return (
    <div>
      <Header />
      <BrowserRouter>
        {user && <NavBar />}
        <div style={{padding: '50px 100px 50px 100px'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/stocks" element={<Stock />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
      /*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  */
  );
}

export default App;
