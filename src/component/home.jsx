import React from 'react'
import Member from './helper/member'
import { Link } from 'react-router-dom'
import image1 from '../assets/what we do.jpg'
import image3 from '../assets/1.jpg'
// import Comunication from './helper/comunication'

function Landing() {
  return (
    <div>
        {/* <Comunication/> */}
        <div id="first-slider">
            <div id="carousel-example-generic" className="carousel slide carousel-fade">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                </ol>
                {/* Wrapper for slides  */}
                <div className="carousel-inner" role="listbox">
                    {/* Item 1  */}
                    <div className="item active slide1">
                                <h2 data-animation="animated bounceInDown"><span>Be The Voice</span></h2>
                                <h3 data-animation="animated bounceInDown">initiative to advocate for these vulnerable children by reaching out to the
communities that can support them and pay their school fees and other school Materials as well.
Advocacy is sometimes interpreted as being confrontational between the school and family
members.</h3>
                                <h4 data-animation="animated bounceInUp"><Link to="/about">READ MORE</Link></h4>             
                    </div> 
                    {/* Item 2  */}
                    <div className="item slide2">
                                <h2 data-animation="animated bounceInDown"><span>Be The Voice</span></h2>
                                <h3 data-animation="animated bounceInDown">give them its commitments through protecting the value of
Humanity and advocating for their rights to health treatment and family.</h3>
                                <h4 data-animation="animated bounceInUp"><Link to="/about">READ MORE</Link></h4>             
                    </div>
                    {/* Item 3  */}
                    <div className="item slide3">
                                <h2 data-animation="animated bounceInDown"><span>Be The Voice</span></h2>
                                <h3 data-animation="animated bounceInDown">We believe that empowering women by enhancing their capacity to manage
economic and social risks</h3>
                                <h4 data-animation="animated bounceInUp"><Link to="/about">READ MORE</Link></h4>             
                    </div>
                    {/* < Item 4  */}
                    <div className="item slide4">
                                <h2 data-animation="animated bounceInDown"><span>Be The Voice</span></h2>
                                <h3 data-animation="animated bounceInDown">we want to
live and experience the significance of humanity, we are hoping to give 
our commitments through protecting the value of Humanity and advocating
for their rights to education, health and family.</h3>
                                <h4 data-animation="animated bounceInUp"><Link to="/about">READ MORE</Link></h4>             
                    </div>
                    {/* <!-- End Item 4 --> */}
            
                </div>
                {/* <!-- End Wrapper for slides--> */}
                <Link className="left carousel-control" to="#" role="button" data-slide="prev">
                    <i className="fa fa-angle-left"></i><span className="sr-only">Previous</span>
                </Link>
                <Link className="right carousel-control" to="#" role="button" data-slide="next">
                    <i className="fa fa-angle-right"></i><span className="sr-only">Next</span>
                </Link>
            </div>
        </div>
         <section id="about-sec">
                <div className="container">
                <div className="row text-center">
                <h1>ABOUT Bevoice</h1>
                <hr/>
                <h5>Bevoice is non-Government non-profit organization founded by A Humanitarianactivist in 2019 to support the community experiencing extremely poverty,</h5>
                <p>Bevoice is non-Government non-profit organization founded by A Humanitarianactivist in 2019 to support the community experiencing extremely poverty,</p>
                <p>limited access to education and health</p>
                </div>
                </div>
            </section>
            <section id="activities-sec">
                <div className="container">
                <div className="row text-center">
                <h1>WHAT WE DO?</h1>
                <hr/>
                <h5>Bevoice works in Three pillars of social development which are
Education, Women Empowerment and Health.</h5>
                <div className="text-left"> 
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-heart"></i></div>
                <div className="grid-content-wrapper"><h4>Charity for Education</h4><p>We, youths of bevoice believing that Education is the children rights and can improve
the well-being of every child in society to reach their full potential so that they can
journey toward their dreams with confidence and dignity.</p>
                <Link to="/" title="" >Read More</Link>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-home"></i></div>
                <div className="grid-content-wrapper"><h4>CAPACITY BUILIDING</h4><p>Raising the status of women through education, awareness, literacy, and training is
the Women&#39;s empowerment that equips and allows women to make life-determining decisions
through the different problems in society.</p>
                <Link to="/" title="" >Read More</Link>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-tint"></i></div>
                <div className="grid-content-wrapper"><h4>Health</h4><p>Families are extremely poor, which sometimes become so
difficult to afford Health insurances so we are gathering youths to see if we can
together help those families to have the insurances.</p>
                <Link to="/" title="" >Read More</Link>
                </div>
                </div>
                
                </div>
                </div>
                </div>
            </section>
            <section id="video-sec">
                <div className="container">
                <div className="row text-center">
                <h1>How can you help?</h1>
                <hr/>
                <h5>They are more than hundreds in the same sector and much more in our country who
are struggling the consequences of what their parents did like of abandoning them
and the extremely poverty they never chose to get birth in</h5>
                <div className="text-left"> 
                <div className="col-md-6 clearfix top-off">
                <video width="400" controls>
                <source src="../assets/aaaaa.mp4" type="video/mp4"/>
                </video>
                </div>
                <div className="col-md-6 clearfix top-off">
                <div className="media">
                <div className="media-image">
                <img src="images/g2.png" className="attachment-full size-full" alt="g1"/>																							</div>
                <div className="media-text">
                <h5>BECOME A MEMBER</h5>
                <p>Bevoice don’t wish to see the children suffer and limited to their dreams for they
weren’t chosen that. to be apart of us think that again</p>
                </div>
                </div>
                <div className="media">
                <div className="media-image">
                <img src="images/g1.png" className="attachment-full size-full" alt="g1"/>																							</div>
                <div className="media-text">
                <h5>MAKE A GIFT</h5>
                <p>we have tried to put 20% of them back to school,fell free to contribute to </p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
            <section id="projects-sec">
                <div className="container">
                <div className="row text-center">
                <h1>OUR PROJECTS</h1>
                <hr/>
                <h5>Bevoice works in Three pillars of social development which are
Education, Women Empowerment and Health.</h5>
                <div className="text-center"> 
                <div className="col-md-4 clearfix top-off">
                <div className="grid-image"><img src={image1} alt=""/></div>
                <div className="post-content">
                <h3>Gahanga: Education for young Generation</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/projects" title="" >View Project</Link>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-image"><img src={image1} alt=""/></div>
                <div className="post-content">
                <h3>Kicukiro: unemployment through the tailoring trainings and internships</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/projects" title="" >View Project</Link>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-image"><img src={image1} alt=""/></div>
                <div className="post-content">
                <h3>Gahanga: Education for young Generation</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to="/projects" title="" >View Project</Link>
                </div>
                </div>
                </div>
                </div>
                </div>
            </section>
            <section id="gallery-sec">
                <div className="container">
                <div className="row text-center">
                <h1>OUR GALLERY</h1>
                <hr/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <ul className="clearfix">

                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>
                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>

                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>

                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>
                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>
                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>
                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>
                <li>
                <div className="image"><img src={image3} alt=""/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </li>
                </ul>
                <div className="text-center">
                <Link to="/gallery" className="btn1">View More</Link>
                </div>
                </div>
                </div>
            </section>
            <Member/>
    </div>
  )
}

export default Landing