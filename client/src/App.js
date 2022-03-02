import './App.css';


import Login from './components/Login/Login'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Stock from './components/Stock/Stocks';
import NotFound from './components/NotFound/NotFound';
import Portfolio from './components/Portfolio/Portfolio';

import { useSelector } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	const user = useSelector((state) => state?.auth?.authData)

  //const user = localStorage.getItem('profile')
	console.log(user)
  return (
    <div style={{paddingLeft: user ? '195px' : '0px'}}>
      <BrowserRouter>
				<Header />
        {user && <NavBar />}
        <div style={{padding: '50px 100px 50px 100px'}}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/dashboard" element={<Dashboard />}/>
            <Route path="/stocks" element={<Stock />} />
            <Route path="/portfolio" element={<Portfolio />} />
						<Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      <Footer />
      </BrowserRouter>
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
