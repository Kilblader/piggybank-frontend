import './App.css';
import logo from './logo.svg'
import Overview from './overview/Overview';
import Transactions from './transactions/Transactions';
import { Route, Routes, NavLink } from "react-router-dom";
import Transfer from './transfer/Transfer';


function App() {
  return (
    <div className="app">
      <div className="sidenav">
        <header>
          <div className="logo-container">
            <img className="logo" alt="PiggyBank logo" src={logo} />
            <span>PiggyBank</span>
          </div>
        </header>
        <nav>
          <ul>
            <li><NavLink to="/">Overzicht</NavLink></li>
            <li><NavLink to="/transactions">Transacties</NavLink></li>
            <li><NavLink to="/transfer">Overboeken</NavLink></li>
            <li><NavLink to="/settings">Instellingen</NavLink></li>
          </ul>
        </nav>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Overview />}></Route>
          <Route path="/transactions" element={<Transactions />}></Route>
          <Route path="/transfer" element={<Transfer />}></Route>
          <Route path="*" element={<div className=""><h1>Pagina niet gevonden.</h1><img src="/images/not-found.gif" alt="not-found" /></div>}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;