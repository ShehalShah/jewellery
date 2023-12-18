import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {

  return (
      <Router>
        <Routes>
              <Route
                element={
                    <Home />
                }
                exact
                path="/"
              />
              <Route
                element={
                    <Login />
                }
                exact
                path="/login"
              />
         </Routes>
      </Router>
  )
}

export default App
