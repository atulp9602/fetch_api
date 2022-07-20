import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import "./App.css";
import axios from "axios";

//import pages
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';

function App() {

  return (
    <div className="App">
        <Router>
                <Routes>
                  <Route exact path="/" element={<h1>Home Page</h1>} />
                  <Route exact path="page1" element={<Page1 />} />
                  <Route exact path="page2" element={<Page2 />} />
                  <Route exact path="page3" element={<Page3 />} />
                </Routes>

            <div className="list">
                <ol>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="page1">Page1</Link></li>
                    <li><Link to="page2">Page2</Link></li>
                    <li><Link to="page3">Page3</Link></li>
                </ol>
            </div>
        </Router>
    </div>
  );
 
}

export default App;
