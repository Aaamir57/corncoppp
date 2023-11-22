
import './App.css';

import Signupseller from './Signupseller';

import Login from './Login';
import Signup from './Signup';
import Signupone from './Signupone';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Landingpage from './Landingpage';
import Productpage from './Productpage';
import Productview from './Productview';
import Myproducts from './Myproducts';
import Dashboard from './Dashboard';
import Marketplace from './Marketplace';
import Mainproducts from './Mainproducts';

function App() {
  return (
    <div className="App">

      
      <Router>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/myproducts" exact element={<Myproducts />} />
          <Route path="/productview" exact element={<Productview />} />
          <Route path="/productpage" exact element={<Productpage />} />
          <Route path="/landingpage" exact element={<Landingpage />} />
          <Route path="/signupseller" exact element={<Signupseller />} />
          <Route path="/signupone" exact element={<Signupone />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/marketplace" exact element={<Marketplace />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/" exact element={<Mainproducts />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
