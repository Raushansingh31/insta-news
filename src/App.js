
import './App.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
//import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  static defaultProps = {
    country : 'in',
    pagesize : 8,
    category : "general"
  }
  static propTypes = {
     country : PropTypes.string,
     pagesize : PropTypes.number,
     category : PropTypes.string 
  }
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route  path="/" element={<News key="general" pagesize={8} country="in" category="general" />} />
          <Route  path="/business" element={<News key="business" pagesize={8} country="in" category="business" />} />
          <Route  path="/entertainment" element={<News key="entertain" pagesize={8} country="in" category="entertainment" />} />
          <Route  path="/technology" element={<News key="tech" pagesize={8} country="in" category="technology" />} />
          <Route  path="/health" element={<News key="health" pagesize={8} country="in" category="health" />} />
          <Route  path="/science" element={<News key="science" pagesize={8} country="in" category="science" />} />
          <Route path="/sports" element={<News key="sports" pagesize={8} country="in" category="sports" />} />
        </Routes>
        </Router>
      </div>
    )
  }
}


//export default App;
