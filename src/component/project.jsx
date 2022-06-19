import React from 'react'
import image from '../assets/12.jpg'
import Member from './helper/member'
import { Link } from 'react-router-dom'

function Project() {
  return (
    <div>
        <section id="inner-banner">
<div className="overlay">
<div className="container">
<div className="row"> 
<div className="col-sm-6"><h1>PROJECTS</h1></div>
<div className="col-sm-6">
  <h6 className="breadcrumb"><Link to="/">Home</Link> / Projects</h6></div>
</div>
</div>
</div>
</section>

<section id="pro-sec">
<div className="container">
<div className="row text-center pro-sec-wrap">

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>

</div>
<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="donate.html" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

<div className="col-sm-6 col-md-4 clearfix top-off">
<div className="grid-image"><img src={image} alt=""/></div>
<div className="post-content">
<h3>Gahanga Project: Clean Water Initiative</h3>
<hr/>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<Link to="/" title="" >Join Us</Link>
</div>
</div>

</div>
</div>
</section>
<Member/>
    </div>
  )
}

export default Project