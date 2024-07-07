
import './App.css';
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
//import { Route, Router, Routes } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress) => {
    this.setState({progress: progress});
  }
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
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        //onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route  path="/" element={<News setProgress={this.setProgress} key="General" pagesize={8} country="in" category="General" />} />
          <Route  path="/business" element={<News setProgress={this.setProgress} key="Business" pagesize={8} country="in" category="Business" />} />
          <Route  path="/entertainment" element={<News setProgress={this.setProgress} key="Entertain" pagesize={8} country="in" category="Entertainment" />} />
          <Route  path="/technology" element={<News setProgress={this.setProgress} key="Tech" pagesize={8} country="in" category="Technology" />} />
          <Route  path="/health" element={<News setProgress={this.setProgress} key="Health" pagesize={8} country="in" category="Health" />} />
          <Route  path="/science" element={<News setProgress={this.setProgress} key="Science" pagesize={8} country="in" category="Science" />} />
          <Route path="/sports" element={<News setProgress={this.setProgress} key="Sports" pagesize={8} country="in" category="Sports" />} />
        </Routes>
        </Router>
      </div>
    )
  }
}


//export default App;
