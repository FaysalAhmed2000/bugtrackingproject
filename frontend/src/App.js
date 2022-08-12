import React from 'react';
import { useSelector } from 'react-redux';
import Login from './Views/Pages/Login/login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar';
import Viewbugspage from './Views/Pages/viewBugs';
import CreateBug from './Views/Components/Bug Create/edit/bugForm';
import Dashboard from './Views/Pages/Dashboard/dashboard';

function App() {

  const { auth } = useSelector(state => state);

  return (
  <Router>
      {!auth.LoggedIn ? <Login /> : 
      <>
        <Sidebar />
        <Routes>
        <Route path="/" exact element={<Dashboard />} />
          <Route path="/viewbugs" element={<Viewbugspage />} />
          <Route path="/create" element={<div className='page-container'> <CreateBug title="Create bug" /> </div>}  />
        </Routes>
        
      
      </>
      }
  </Router>
);
    
}

export default App;
