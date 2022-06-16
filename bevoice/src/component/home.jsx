import React from 'react'
import Member from './helper/member'

function Landing() {
  return (
    <div>
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
                                <h2 data-animation="animated bounceInDown"><span>Give a little change a lot</span></h2>
                                <h3 data-animation="animated bounceInDown">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.!</h3>
                                <h4 data-animation="animated bounceInUp"><a href="about-us.html">READ MORE</a></h4>             
                    </div> 
                    {/* Item 2  */}
                    <div className="item slide2">
                                <h2 data-animation="animated bounceInDown"><span>More charity More better life</span></h2>
                                <h3 data-animation="animated bounceInDown">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.!</h3>
                                <h4 data-animation="animated bounceInUp"><a href="about-us.html">READ MORE</a></h4>             
                    </div>
                    {/* Item 3  */}
                    <div className="item slide3">
                                <h2 data-animation="animated bounceInDown"><span>Raise fund Warm heart</span></h2>
                                <h3 data-animation="animated bounceInDown">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.!</h3>
                                <h4 data-animation="animated bounceInUp"><a href="about-us.html">READ MORE</a></h4>             
                    </div>
                    {/* < Item 4  */}
                    <div className="item slide4">
                                <h2 data-animation="animated bounceInDown"><span>Raise your funds for a cause</span></h2>
                                <h3 data-animation="animated bounceInDown">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.!</h3>
                                <h4 data-animation="animated bounceInUp"><a href="about-us.html">READ MORE</a></h4>             
                    </div>
                    {/* <!-- End Item 4 --> */}
            
                </div>
                {/* <!-- End Wrapper for slides--> */}
                <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <i className="fa fa-angle-left"></i><span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <i className="fa fa-angle-right"></i><span className="sr-only">Next</span>
                </a>
            </div>
        </div>
         <section id="about-sec">
                <div classNameName="container">
                <div classNameName="row text-center">
                <h1>ABOUT Bevoice</h1>
                <hr/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <p>Bevoice is non-Government non-profit organization founded by A Humanitarianactivist in 2019 to support the community experiencing extremely poverty,</p>
                <p>limited access to education and health</p>
                <div classNameName="text-center">
                <a href="donate.html" classNameName="btn1">donate now</a>
                <a href="about-us.html" classNameName="btn2">Read More</a>
                </div>
                </div>
                </div>
            </section>
            <section id="activities-sec">
                <div className="container">
                <div className="row text-center">
                <h1>WHAT WE DO?</h1>
                <hr/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <div className="text-left"> 
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-heart"></i></div>
                <div className="grid-content-wrapper"><h4>Charity for Education</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur eget justo quis dignissim.</p>
                <a href="activities.html" title="" >Read More</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-cutlery"></i></div>
                <div className="grid-content-wrapper"><h4>Feed for Hungry Child</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur eget justo quis dignissim.</p>
                <a href="activities.html" title="" >Read More</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-home"></i></div>
                <div className="grid-content-wrapper"><h4>Home for Homeless</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur eget justo quis dignissim.</p>
                <a href="activities.html" title="" >Read More</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-tint"></i></div>
                <div className="grid-content-wrapper"><h4>Bringing Clean Water</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur eget justo quis dignissim.</p>
                <a href="activities.html" title="" >Read More</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-thumbs-up"></i></div>
                <div className="grid-content-wrapper"><h4>Help Little Hands</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur eget justo quis dignissim.</p>
                <a href="activities.html" title="" >Read More</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-content-left"><i className="fa fa-money"></i></div>
                <div className="grid-content-wrapper"><h4>Donate for Children</h4><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut efficitur eget justo quis dignissim.</p>
                <a href="activities.html" title="" >Read More</a>
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
            <section id="projects-sec">
                <div className="container">
                <div className="row text-center">
                <h1>OUR PROJECTS</h1>
                <hr/>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h5>
                <div className="text-center"> 
                <div className="col-md-4 clearfix top-off">
                <div className="grid-image"><img src="images/test1.jpg"/></div>
                <div className="post-content">
                <h3>Nepal Earthquake: Clean Water Initiative</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="projects.html" title="" >View Project</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-image"><img src="images/test2.jpg"/></div>
                <div className="post-content">
                <h3>Nepal Earthquake: Clean Water Initiative</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="projects.html" title="" >View Project</a>
                </div>
                </div>
                <div className="col-md-4 clearfix top-off">
                <div className="grid-image"><img src="images/test3.jpg"/></div>
                <div className="post-content">
                <h3>Nepal Earthquake: Clean Water Initiative</h3>
                <hr/>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <a href="projects.html" title="" >View Project</a>
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
                <a href="images/gallery1.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery1.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div></a>
                </li>
                <li>
                <a href="images/gallery2.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery2.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>

                <li>
                <a href="images/gallery3.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery3.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>

                <li>
                <a href="images/gallery4.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery4.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>
                <li>
                <a href="images/gallery5.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery5.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>
                <li>
                <a href="images/gallery6.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery6.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>
                <li>
                <a href="images/gallery7.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery7.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>
                <li>
                <a href="images/gallery8.jpg" className="swipebox" title="My Caption">
                <div className="image"><img src="images/gallery8.jpg"/>
                <div className="overlay"><i className="fa fa-search-plus"></i></div>
                </div>
                </a>
                </li>
                </ul>
                <div className="text-center">
                <a href="gallery.html" className="btn1">View More</a>
                </div>
                </div>
                </div>
            </section>
            <Member/>
    </div>
  )
}

export default Landing