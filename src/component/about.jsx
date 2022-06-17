import React from 'react'
import image1 from '../assets/1.jpg'
import History from './about/history'
import arsen from '../assets/ars.jpg'
import fred from '../assets/arsen.jpg'
import Member from './helper/member'
function AboutPage() {
  return (
    <div>
        <section id="inner-banner">
            <div class="overlay">
            <div class="container">
            <div class="row"> 
            <div class="col-sm-6"><h1>ABOUT US</h1></div>
            <div class="col-sm-6">
            <h6 class="breadcrumb"><a href="index.html">Home</a> / About us</h6></div>
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
            <div class="container">
            <div class="row text-center">
            <h1>OUR APPROACH</h1>
            <hr/>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <div class="text-left"> 
            <div class="col-md-6 clearfix top-off">
            <div class="help-text">
            <h4>Our Mission</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="col-md-6 clearfix top-off">
            <div class="help-text">
            <h4>Our Vision</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="col-md-6 clearfix top-off">
            <div class="help-text">
            <h4>Area of focus</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="col-md-6 clearfix top-off">
            <div class="help-text">
            <h4>Our Current Projects</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        </section>
        <section id="team">
            <div class="container">
            <div class="row text-center">
            <h1>MEET OUR TEAM</h1>
            <hr/>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src={fred}/></div>
            <div class="info"><div class="name"><a href="#"> Ishimwe Arsene</a></div><div class="regency"> CEO&FOUNDER</div></div>
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