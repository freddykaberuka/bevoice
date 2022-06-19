import React from 'react'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.JPG'
import image3 from '../assets/3.JPG'
import image4 from '../assets/4.JPG'
import { Link } from 'react-router-dom'
import Member from './helper/member'

function Activities() {
  return (
    <div>
        <section id="about-sec">
<div className="container">
<div className="row text-left">

<div className="act-box clearfix">
<div className="col-md-6">
<div className="image"><img src={image1} alt=""/></div>
</div>
<div className="col-md-6">
<div className="act-pad">
<h4>Sponsor a child today</h4>
<p>Lorem ipsum dolor sit amet, consectet ur adipisicing. Odit qui minima praese ntium obcaecati minima praesent  Odit qui minima praese ntium obcaecati minima Odit qui minima praese ntium obcaecati minima</p>
<div className="price">Raised: $1890 <span className="goal">Goal: $2500</span></div>
<Link to="/activity" className="btn1">donate now</Link>
<div className="clearfix"></div>
</div>
</div>
</div>

<div className="act-box clearfix">
<div className="col-md-6 col-md-push-6">
<div className="image"><img src={image2} alt=""/></div>
</div>
<div className="col-md-6 col-md-pull-6">
<div className="act-pad">
<h4>Sponsor a child today</h4>
<p>Lorem ipsum dolor sit amet, consectet ur adipisicing. Odit qui minima praese ntium obcaecati minima praesent  Odit qui minima praese ntium obcaecati minima Odit qui minima praese ntium obcaecati minima</p>
<div className="price">Raised: $1890 <span className="goal">Goal: $2500</span></div>
<Link to="/activity" className="btn1">donate now</Link>
<div className="clearfix"></div>
</div>
</div>
</div>

<div className="act-box clearfix">
<div className="col-md-6">
<div className="image"><img src={image3} alt=""/></div>
</div>
<div className="col-md-6">
<div className="act-pad">
<h4>Sponsor a child today</h4>
<p>Lorem ipsum dolor sit amet, consectet ur adipisicing. Odit qui minima praese ntium obcaecati minima praesent  Odit qui minima praese ntium obcaecati minima Odit qui minima praese ntium obcaecati minima</p>
<div className="price">Raised: $1890 <span className="goal">Goal: $2500</span></div>
<Link to="/activity" className="btn1">donate now</Link>
<div className="clearfix"></div>
</div>
</div>
</div>

<div className="act-box clearfix">
<div className="col-md-6 col-md-push-6">
<div className="image"><img src={image4} alt=""/></div>
</div>
<div className="col-md-6 col-md-pull-6">
<div className="act-pad">
<h4>Sponsor a child today</h4>
<p>Lorem ipsum dolor sit amet, consectet ur adipisicing. Odit qui minima praese ntium obcaecati minima praesent  Odit qui minima praese ntium obcaecati minima Odit qui minima praese ntium obcaecati minima</p>
<div className="price">Raised: $1890 <span className="goal">Goal: $2500</span></div>
<Link to="/activity" className="btn1">donate now</Link>
<div className="clearfix"></div>
</div>
</div>
</div>

</div>
</div>
</section>
<Member/>
    </div>
  )
}

export default Activities