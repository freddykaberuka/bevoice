import React from 'react'

function Footer() {
  return (
    <div>
        <footer>
            <div className="footer-update">
                <div className="footer-update-title">
                    <h3>Newsletter</h3>
                </div>
                <form className="footer-update-form">
                    <input type="text" placeholder="Enter your email"/>
                </form>
            </div>
            <div className="footer-social">
                <div className="footer-logo-social">
                    <div className="footer-logo"></div>
                    <div className="footer-link"></div>
                </div>
                <div className="footer-social-icons">
                    
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer