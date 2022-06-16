import React from 'react'
import image1 from '../assets/1.jpg'
import History from './about/history'
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
                <h1>How can you help?</h1>
                <hr/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <div className="text-left"> 
                <div className="col-md-6 clearfix top-off">
                <video width="400" controls>
                <source src="images/mov_bbb.mp4" type="video/mp4"/>
                </video>
                </div>
                <div className="col-md-6 clearfix top-off">
                <div className="media">
                <div className="media-image">
                <img src="images/g1.png" className="attachment-full size-full" alt="g1"/>																							</div>
                <div className="media-text">
                <h5>BECOME A VOLUNTEER</h5>
                <p>Give us a brief description of the service that you are promoting.</p>
                </div>
                </div>
                <div className="media">
                <div className="media-image">
                <img src="images/g2.png" className="attachment-full size-full" alt="g1"/>																							</div>
                <div className="media-text">
                <h5>MAKE A GIFT</h5>
                <p>Give us a brief description of the service that you are promoting.</p>
                </div>
                </div>
                <div className="media">
                <div className="media-image">
                <img src="images/g1.png" className="attachment-full size-full" alt="g1"/>																							</div>
                <div className="media-text">
                <h5>GIVE A SCHOLASHIP</h5>
                <p>Give us a brief description of the service that you are promoting.</p>
                </div>
                </div>
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
            <div class="icon_circle"><i class="fa fa-heartbeat">&nbsp;</i></div>
            <div class="help-text">
            <h4>Donate</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="col-md-6 clearfix top-off">
            <div class="icon_circle"><i class="fa fa-user-plus">&nbsp;</i></div>
            <div class="help-text">
            <h4>Participate</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="col-md-6 clearfix top-off">
            <div class="icon_circle"><i class="fa fa-usd">&nbsp;</i></div>
            <div class="help-text">
            <h4>Fundraise</h4>
            <div class="line line-50"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
            <div class="col-md-6 clearfix top-off">
            <div class="icon_circle"><i class="fa fa-credit-card">&nbsp;</i></div>
            <div class="help-text">
            <h4>Contribute</h4>
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
            <div class="avatar-inner"><img src="images/team1.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Michel Black </a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team2.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Juliana Moor </a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team3.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Andre Russel</a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team4.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Amily James</a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team1.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Michel Black </a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team2.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Juliana Moor </a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team3.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Andre Russel</a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            <div class="member col-xs-6 col-md-3">
            <div class="inner">
            <div class="avatar-inner"><img src="images/team4.jpg"/></div>
            <div class="info"><div class="name"><a href="#"> Amily James</a></div><div class="regency">Volunteer</div></div>
            </div>
            </div>

            </div>
            </div>
        </section>
        <div class="callout">
            <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>Change Their World. Change Yours. This changes everything.</h2>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="callout-actions">
                                <a href="contact.html" class="button">Become Volunteer</a>

                                <span class="callout-separator">
                                    <span>Or</span>
                                </span>

                                <a href="donate.html" class="button">Donate For Cause</a>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
</div>
  )
}

export default AboutPage