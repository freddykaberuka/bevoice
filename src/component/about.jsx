import React from 'react'
// import image1 from '../assets/1.jpg'
import History from './about/history'
// import arsen from '../assets/ars.jpg'
// import fred from '../assets/arsen.jpg'
import Member from './helper/member'
import { Link } from 'react-router-dom'
import Members from './member'

function AboutPage() {

  return (
    <div>
        <section id="inner-banner">
            <div className="overlay">
            <div className="container">
            <div className="row"> 
            <div className="col-sm-6"><h1>ABOUT US</h1></div>
            <div className="col-sm-6">
            <h6 className="breadcrumb"><Link to="/">Home</Link> / About us</h6></div>
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
                <source src="../assets/aaaaa.mp4" type="video/mp4"/>
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
            <p>Our mission is to support the individuals experiencing poverty for sustainable development and Educate the Values of Humanity.</p>
            </div>
            </div>
            <div className="col-md-6 clearfix top-off">
            <div className="help-text">
            <h4>Our Vision</h4>
            <div className="line line-50"></div>
            <p>We are Envisioned to not See the Value of the Individuals experiencing extremely poverty be Measured by their lower living standards.</p>
            </div>
            </div>
            <div className="col-md-6 clearfix top-off">
            <div className="help-text">
            <h4>Area of focus</h4>
            <div className="line line-50"></div>
            <p>BEVOICE is youth Humanitarians community based non- profit organization which works in the area of social development</p>
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
            {Members.map((el,index) => {
        return <div className="team-member col-xs-6 col-md-3">
            <div className="inner member">
            <div className="avatar-inner"><img src={el.image} alt=""/></div>
            <div className="info"><div className="name"><Link to="#"> {el.imageName}</Link></div><div className="regency"> {el.position}</div></div>
            </div>
            </div>

    })}
            

            </div>
            </div>
        </section>
        <Member/>
</div>
  )
}

export default AboutPage