import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
        <div className="topbar">
            <div className="container">
            <div className="row"> 
            <div className="bar-phone">
            <i className="fa fa-phone"></i> <span>Call Us :</span> <strong>+25 0781 964 133</strong>
            </div>
            <div className="bar-mail">
            <i className="fa fa-envelope"></i> <span>Mail Us :</span> <strong>info@bevoice.com</strong>
            </div>
            <div className="header-social">
            <a className="facebook" href="https://www.facebook.com/BeVoice-111105420718322" title="facebook" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i>  </a>
            <a className="twitter" href="https://twitter.com/Bevoiceorg" title="twitter" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i>  </a>
            <Link className="linkedin" to="#" title="linkedin" target="_blank" rel="nofollow"><i className="fa fa-linkedin"></i>  </Link>
            <Link className="google" to="#" title="google-plus" target="_blank" rel="nofollow"><i className="fa fa-google-plus"></i>  </Link>
            <Link className="youtube" to="#" title="youtube-play" target="_blank" rel="nofollow"><i className="fa fa-youtube-play"></i>  </Link>
            </div>
            </div>
            </div>
        </div>
        <nav className="navbar navbar-default navbar-sticky bootsnav">
            <div className="container">
            <div className="row"> 
            <div className="attr-nav">
            <a className="sponsor-button" href="sponsor-a-child.html">sponsor a child</a>
            <a className="donation" href="#">donate now</a>
            </div>           
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars"></i>
            </button>
            <Link className="navbar-brand logo" to="/"><img src="images/assets/logo.png" className="img-responsive" alt=""/></Link>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activity">Activities</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/photo">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Header