import React from 'react'
import { Link } from 'react-router-dom'
function Member() {
  return (
    <div>
        <div className="callout">
<div className="container">
		<div className="row">
			<div className="col-md-6">
				<h2>Change Their World. Change Yours. This changes everything.</h2>
			</div>
			
			<div className="col-md-6">
				<div className="callout-actions">
					<Link to="/contact" className="button">Become a Member</Link>

					<span className="callout-separator">
						<span>Or</span>
					</span>

					<a href="donate.html" className="button">Donate For Cause</a>
				</div>
			</div>
		</div>
</div>
</div>
    </div>
  )
}

export default Member