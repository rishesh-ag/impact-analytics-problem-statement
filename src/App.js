import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import React, { useEffect } from "react";
import Profile from './screens/profile/Profile';
import Shorlist from './screens/shortlist/Shortlist';
import Home from './screens/home/Home';
import { useDispatch } from 'react-redux';
import { setList } from './reducers/candidate';
import { getCandidateList } from './api/api';

function App() {
  const dispatch = useDispatch();

  useEffect(()  => {
    getCandidateList().then(res => dispatch(setList(res)));
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Profile/>} />                
        <Route path="/:id/:type" element={<Shorlist/>} />                
        <Route exact path="/" element={<Home/>} />          
      </Routes>
    </Router>
  );
}

export default App;
