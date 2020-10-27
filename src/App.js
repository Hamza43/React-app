import React, {Fragment } from 'react'
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
//import './assests/css/Navbar.css';
import Navbar from './components/Navbar';
function App() {
  return (
    <Fragment>
          <Navbar/>
            <main className="container">
               <Hero/>
            </main>
          <Footer/>
    </Fragment>
  );
}
export default App;
