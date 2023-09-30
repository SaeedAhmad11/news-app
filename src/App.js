import React, { useState } from 'react';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import News from './components/news';
import{BrowserRouter as Router,Routes,Route,}from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  const apiKey=process.env.REACT_APP_NEWS_API
  
  const [mode, setmode] = useState('light')
  const [progress, setprogress] = useState(0)

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white'

    } else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
    }
  }


  
    return (
      <div>
        <Router>
        <Navbar toggleMode={toggleMode} />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
          <Route exact path="/" element={<News setProgress={setprogress} apiKey={apiKey}  key="technology"  pageSize={8} category="technology" country="us" mode={mode} />}></Route>
          <Route exact path="/business" element={<News setProgress={setprogress} apiKey={apiKey} key="business" pageSize={8} category="business" country="us" mode={mode} />}></Route>
          <Route exact path="/entertainment" element={<News setProgress={setprogress} apiKey={apiKey} key="entertainment" pageSize={8} category="entertainment" country="us" mode={mode} />}></Route>
          <Route exact path="/health" element={<News setProgress={setprogress} apiKey={apiKey} key="health" pageSize={8} category="health" country="us" mode={mode} />}></Route>
          <Route exact path="/science" element={<News setProgress={setprogress} apiKey={apiKey} key="science" pageSize={8} category="science" country="us" mode={mode} />}></Route>
          <Route exact path="/sports" element={<News setProgress={setprogress} apiKey={apiKey} key="sports" pageSize={8} category="sports" country="us" mode={mode} />}></Route>
          <Route exact path="/general" element={<News setProgress={setprogress} apiKey={apiKey} key="general" pageSize={8} category="general" country="us" mode={mode} />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }

  export default App;

