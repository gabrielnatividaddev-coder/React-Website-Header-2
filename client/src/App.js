import logo from './logo.svg';
import React from 'react';
import './App.css';
import '@mantine/core/styles.css';
import { Switch, Route, Navigate, Routes  } from 'react-router-dom';
import { Button } from '@mantine/core';
import Header from './Header/Header.js'
import Home from './Home/Home.js';
import Feature from './Features/Features.js';
import About from './About/About.js';
import Help from './Help/Help.js';
import Footer from './Footer/footer.component.jsx';
class App extends React.Component {
  render(){
    return <div className="App">
            <Header/>
            <Routes>
              <Route exact path='/' element={<Home/>} />
              <Route path='/features' element={<Feature/>} />
              <Route path='/about' element={<About/>} />
              <Route exact path='/links' element={<Help/>} />
            </Routes >
            <Footer/>
          </div>
  }
}

export default App;
