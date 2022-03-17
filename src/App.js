import logo from './logo.svg';

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
        <Route exact path="/" element={<Dashboard/>}/>
      </Routes>

    </Router>
  );
}

export default App;
