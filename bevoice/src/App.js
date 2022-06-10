import './App.scss';
import React from 'react';
import Home from './component/landing/home';
import './App.scss'
import About from './component/about/about';
import Footer from './component/footer';
import Landing from './component/home';
import Header from './component/header';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Header/>
      {/* <About/> */}
      <Landing/>
      <Footer/>
    </div>
  );
}

export default App;
