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
                    <div className="footer-logo">Bevoice LOGO</div>
                    <div className="footer-link">
                        <div className="addresses">
                            <ul>
                                <li>Address 1</li>
                                <li>Address 2</li>
                                <li>Address 3</li>
                                <li>Address 4</li>
                            </ul>
                        </div>
                        <div className="connectUs">
                            <h6>Social Media</h6>
                            <ul className='social'>
                                <li>Twitter</li>
                                <li>FaceBook</li>
                                <li>Linkden</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-social-icons">
                    
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer