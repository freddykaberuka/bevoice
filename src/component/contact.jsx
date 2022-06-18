import React from 'react'
import Member from './helper/member'

function Contact() {
  return (
    <div>
        <section id="inner-banner">
<div className="overlay">
<div className="container">
<div className="row"> 
<div className="col-sm-6"><h1>CONTACT US</h1></div>
<div className="col-sm-6">
  <h6 className="breadcrumb"><a href="index.html">Home</a> / Contact us</h6></div>
</div>
</div>
</div>
</section>
<section id="about-sec">
<div className="container">
<div className="row text-center about-sec-wrap">

<div className="clearfix"></div>
<h2>IF YOU GOT ANY QUESTIONS<br/>
PLEASE DO NOT HESITATE TO SEND US A MESSAGE.</h2>
<div className="con-form clearfix">
<div className="col-md-4">
<input type="text" name="name" className="input-cont" value="" size="40"  id="name" aria-required="true" aria-invalid="false" placeholder="Your Name*"/>
</div>
<div className="col-md-4">
<input type="email" name="email" className="input-cont" value="" size="40" aria-required="true" aria-invalid="false" placeholder="Your Email*"/>
</div>
<div className="col-md-4">
<input type="text" name="subject" className="input-cont" value="" size="40" id="subject" aria-invalid="false" placeholder="Subject"/>
</div>
<div className="col-md-12">
<textarea name="message" cols="40" rows="5" className="" id="message" aria-invalid="false" placeholder="Message"></textarea>
</div>
<div className="col-xs-12 submit-button">
<input type="submit" value="send message" className="btn2" id="sub"/>
</div>
</div>
<div className="clearfix"></div>
<div className="clearfix"></div>
<div className="col-md-4 about-sec-wrapper">
<div className="con-box">
<div className="fancy-box-icon">
<i className="fa fa-mobile-phone"></i>
</div>
<h3>PHONE</h3>
<div className="fancy-box-content">
<p>Phone 01: +250 781964133<br/>
Phone 02: +250 0781964133</p>
</div>
</div>
</div>
<div className="col-md-4 about-sec-wrapper">
<div className="con-box about-sec-wrapper2">
<div className="fancy-box-icon">
<i className="fa fa-map-marker"></i>
</div>
<h3>ADDRESS</h3>
<div className="fancy-box-content">
<p>512 Ziniya Kicukiro, Kigali,<br/>
 Rwanda</p>
</div>
</div>
</div>
<div className="col-md-4 about-sec-wrapper">
<div className="con-box">
<div className="fancy-box-icon">
<i className="fa fa-envelope-o"></i>
</div>
<h3>EMAIL</h3>
<div className="fancy-box-content">
<p>info@bevoice.com<br/>
help@bevoice.com</p>
</div>
</div>
</div>
</div>
</div>
</section>
<div className="google-maps">
<iframe title ="our location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4547717146916!2d30.097090815172862!3d-1.9722627985621608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca646447bce35%3A0xe9e7a4d79c0ec753!2sZiniya%20Market!5e0!3m2!1sen!2srw!4v1655425425774!5m2!1sen!2srw" width="600" height="450" frameborder="0" allowfullscreen classNameName="frame"></iframe>
</div>
<Member/>
    </div>
  )
}

export default Contact