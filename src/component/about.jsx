import React from 'react'
// import image1 from '../assets/1.jpg'
import History from './about/history'
// import arsen from '../assets/ars.jpg'
import fred from '../assets/arsen.jpg'
import Member from './helper/member'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <div>
        <section id="inner-banner">
            <div className="overlay">
            <div className="container">
            <div className="row"> 
            <div className="col-sm-6"><h1>ABOUT US</h1></div>
            <div className="col-sm-6">
            <h6 className="breadcrumb"><a href="index.html">Home</a> / About us</h6></div>
            </div>
            </div>
            </div>
        </section>
        <section id="video-sec">
                <div className="container">
                <div className="row text-center">
                <History/>
                </div>
                </div>
            </section>
        <section id="video-sec">
                <div className="container">
                <div className="row text-center">
                <h1>AT OUR OFFICE</h1>
                <hr/>
                <div className="text-left"> 
                <div className="col-md-12 clearfix top-off">
                <video width="400" controls>
                <source src="images/mov_bbb.mp4" type="video/mp4"/>
                </video>
                </div>
                </div>
                </div>
                </div>
            </section>
        <section id="help">
            <div className="container">
            <div className="row text-center">
            <h1>OUR APPROACH</h1>
            <hr/>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <div className="text-left"> 
            <div className="col-md-6 clearfix top-off">
            <div className="help-text">
            <h4>Our Mission</h4>
            <div className="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className="col-md-6 clearfix top-off">
            <div className="help-text">
            <h4>Our Vision</h4>
            <div className="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className="col-md-6 clearfix top-off">
            <div className="help-text">
            <h4>Area of focus</h4>
            <div className="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div className="col-md-6 clearfix top-off">
            <div className="help-text">
            <h4>Our Current Projects</h4>
            <div className="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
        <section id="team">
            <div className="container">
            <div className="row text-center">
            <h1>MEET OUR TEAM</h1>
            <hr/>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div className="member col-xs-6 col-md-3">
            <div className="inner">
            <div className="avatar-inner"><img src={fred} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> Ishimwe Arsene</Link></div><div className="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            </div>
            </div>
        </section>
        <Member/>
</div>
  )
}

export default AboutPage