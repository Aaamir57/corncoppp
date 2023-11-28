

import Signupseller from './Pages/Signupseller';

import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Signupone from './Pages/Signupone';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import Productpage from './Pages/Productpage';
import Productview from './Pages/Productview';
import Myproducts from './Pages/Myproducts';
import Dashboard from './Pages/Dashboard';
import Marketplace from './Pages/Marketplace';
import Mainproducts from './Pages/Mainproducts';
import Productform from './Pages/Productform';
import Setting from './Pages/Setting';
import Inbox from './Pages/Inbox';

function App() {
  return (
    <div className="App">

      
      <Router>
        <Routes>
          <Route path="/inbox" exact element={<Inbox />} />
          <Route path="/setting" exact element={<Setting />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/productform" exact element={<Productform />} />
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
