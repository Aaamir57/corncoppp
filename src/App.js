
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

function App() {
  return (
    <div className="App">

      {/* <Header />
      <Signupseller />
      {/* <Login/>
        <Signup/>
        <Signupone/> */}
      {/* <Footer />  */}
      <Router>
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/myproducts" exact element={<Myproducts />} />
          <Route path="/productview" exact element={<Productview />} />
          <Route path="/productpage" exact element={<Productpage />} />
          <Route path="/landingpage" exact element={<Landingpage />} />
          <Route path="/" exact element={<Signupseller />} />
          <Route path="/signupone" exact element={<Signupone />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
