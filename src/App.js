import logo from './logo.svg';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
      </Routes>

    </Router>
  );
}

export default App;
