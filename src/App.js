import React, { Component } from 'react';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/news';
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: 'light',
    };
  }

  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'

    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }

  render() {
    return (
      <div>
        <Router>
        <Navbar toggleMode={this.toggleMode} />
          <Routes>
          <Route exact path="/" element={<News key="technology"  pageSize={8} category="technology" country="us" mode={this.mode} />}></Route>
          <Route exact path="/business" element={<News key="business" pageSize={8} category="business" country="us" mode={this.mode} />}></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" pageSize={8} category="entertainment" country="us" mode={this.mode} />}></Route>
          <Route exact path="/health" element={<News key="health" pageSize={8} category="health" country="us" mode={this.mode} />}></Route>
          <Route exact path="/science" element={<News key="science" pageSize={8} category="science" country="us" mode={this.mode} />}></Route>
          <Route exact path="/sports" element={<News key="sports" pageSize={8} category="sports" country="us" mode={this.mode} />}></Route>
          <Route exact path="/general" element={<News key="general" pageSize={8} category="general" country="us" mode={this.mode} />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
