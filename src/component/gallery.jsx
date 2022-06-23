import React from 'react'
import image1 from '../assets/1.jpg'
import Member from './helper/member'
import { Link } from 'react-router-dom'

function Gallery() {
  return (
    <div>
        <section id="inner-banner">
<div className="overlay">
<div className="container">
<div className="row"> 
<div className="col-sm-6"><h1>GALLERY</h1></div>
<div className="col-sm-6">
  <h6 className="breadcrumb"><Link to="/">Home</Link> / Gallery</h6></div>
</div>
</div>
</div>
</section>

<section id="gallery-sec">
<div className="container">
<div className="row text-center">
<ul className="clearfix">
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div></Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div></Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
<li>
<Link to="#" className="swipebox" title="My Caption">
<div className="image"><img src={image1} alt=""/>
<div className="overlay"><i className="fa fa-search-plus"></i></div>
</div>
</Link>
</li>
</ul>
</div>
</div>
</section>
<Member/>

    </div>
  )
}

export default Gallery