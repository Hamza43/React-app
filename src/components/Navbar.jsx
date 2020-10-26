import React, { Component } from 'react';

class Navbar extends Component{
 render(){
  return(
 // <nav className="navbar">TaSkill
  <div>
    <nav>
      
  <ul>
  <li><a style={{color:'chocolate'}}>TaSkill</a></li>
  <li style={{float:"right"}}><a href="home">Home</a></li>
  <li style={{float:"right"}}><a href="news">News</a></li>
  <li style={{float:"right"}}><a href="contact">Contact</a></li>
  <li style={{float:"right"}}><a href="about">About</a></li>
  </ul>
  </nav>
  </div>
  
 // </nav>
//    <nav className="navbar navbar-light bg-light">
//    <a className="navbar-brand" href="Navbar">TaSkill</a>
//    
//    <div className="Navbar-div">
//        <a className="Navbar-a" href="">About</a>
//        <a className="Navbar-a" href="">Notifications</a>
//        <a className="Navbar-a" href="">Profile</a>
//    </div>
//    
//  </nav>
  );
 }   
}
export default Navbar;