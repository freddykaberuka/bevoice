import React from 'react'
// import loc from '../assets/pin.png'
// import mail from '../assets/mail.png'
function Footer() {
  return (
    <div>
        <footer className="footer">
		<div className="footer-body">
                <div className="container">
			<div className="row">
				<div className="col-md-3">
					<div className="footer-section">
						<h4 className="footer-section-title">About Bevoice</h4>
						
						<div className="footer-section-body">
							<p>Charity vitae diam pulvinar, tempus dia aliquam tellus. Quisque mattis odio eu placerat luctus. Vivamus magna elit, ultrices non lacinia vel, tempor vitae tell Fusce sit amet sem sit amet.</p>
						</div>
					</div>
				</div>
				
				<div className="col-md-3">
					<div className="footer-section">
						<h4 className="footer-section-title">Quick Links</h4>
						
						<div className="footer-section-body">
							<ul className="list-links">
								<li>
									<a href="index.html">Home</a>
								</li>
								
								<li>
									<a href="about-us.html">About Us</a>
								</li>
								
								<li>
									<a href="activities.html">Activities</a>
								</li>
                                <li>
									<a href="projects.html">Projects</a>
								</li>
								
								<li>
									<a href="gallery.html">Gallery</a>
								</li>
								
								<li>
									<a href="contact.html">Contact Us</a>
								</li>
								
							</ul>

						</div>
					</div>
				</div>
				
				<div className="col-md-3">
					<div className="footer-section">
						<h4 className="footer-section-title">Newsletter Signup</h4>
						
						<div className="footer-section-body">
							<p>Select your newsletters, enter your email address, and click "Subscribe"</p>

							<div className="subscribe">
								<form action="?" method="post">
									<input type="submit" value="Go" className="subscribe-btn"/>
									
									<div className="subscribe-inner">
										<input type="email" id="mail" name="mail" value="" placeholder="Email Address" className="subscribe-field"/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				
				<div className="col-md-3">
					<div className="footer-section">
						<h4 className="footer-section-title">Contact Us</h4>
						
						<div className="footer-section-body">
							<p><b>Address:</b> 3104 Doctors Drive, Los Angeles, California, United States</p>

							<div className="footer-contacts">
								<p>
									<b>
										<i className="fa fa-phone"></i> Phone:
									</b>

									+25 0781 964 133
								</p>
								
								<p>
									<b>
										<i className="fa fa-envelope-o"></i> Email:
									</b>

									info@bevoice.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>

		<div className="bwt-footer-copyright">
            <div className="container">
<div className="row">
<div className="col-md-6 copyright">
<div className="left-text">Copyright &copy; Bevoice. All Rights Reserved</div>
</div>
        </div>
            </div>
        </div>
	</footer>
    </div>
  )
}

export default Footer