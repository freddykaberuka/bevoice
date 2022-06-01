import './App.scss';
import React from 'react';
import Home from './component/landing/home';
import './App.scss'
import About from './component/about/about';
import Footer from './component/footer';
function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
