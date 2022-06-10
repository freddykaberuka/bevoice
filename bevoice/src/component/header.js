import React from 'react'

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
            <a className="facebook" href="#" title="facebook" target="_blank" rel="nofollow"><i className="fa fa-facebook"></i>  </a>
            <a className="twitter" href="#" title="twitter" target="_blank" rel="nofollow"><i className="fa fa-twitter"></i>  </a>
            <a className="linkedin" href="#" title="linkedin" target="_blank" rel="nofollow"><i className="fa fa-linkedin"></i>  </a>
            <a className="google" href="#" title="google-plus" target="_blank" rel="nofollow"><i className="fa fa-google-plus"></i>  </a>
            <a className="youtube" href="#" title="youtube-play" target="_blank" rel="nofollow"><i className="fa fa-youtube-play"></i>  </a>
            </div>
            </div>
            </div>
        </div>
        <nav className="navbar navbar-default navbar-sticky bootsnav">
            <div className="container">
            <div className="row"> 
            <div className="attr-nav">
            <a className="sponsor-button" href="sponsor-a-child.html">sponsor a child</a>
            <a className="donation" href="donate.html">donate now</a>
            </div>           
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
            <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand logo" href="index.html"><img src="images/assets/logo.png" className="img-responsive" /></a>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
            <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="activities.html">Activities</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact Us</a></li>
            </ul>
            </div>
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Header