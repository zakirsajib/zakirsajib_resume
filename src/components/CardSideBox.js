import React from 'react'

import Social from '../components/Social'
import zs195 from '../images/uploads/avatar/zsresume.jpg'

import cv from '../cv/Latest-CV.pdf'

const CardSideBox = () => {
	return (
		<div id="crt-side-box">
	    	<div className="crt-side-box-item">
				<div className="crt-card bg-secondary text-center">
				    <div className="crt-card-avatar">
				        <img
									className=""
									src={zs195}
				          			width="150"
									alt="Zakir Sajib - Full-Stack Web Developer - React.js | Node.js | Gatsby.js | WordPress"
								/>
				    </div>
				    <div className="crt-card-info">
				        <h2
									className="text-upper"
								>
								Zakir Sajib
							 </h2>
				        <p
									className="text-muted"
								>
								Full-Stack Web Developer<br /> <span style={{fontSize:`1em`}}>React.js | Node.js | Gatsby.js | WordPress</span>
								</p>
				        <Social />
				    </div>
				</div>
		        <div className="crt-side-box-btn" style={{display: `none`}}>
		            <a
									className="btn btn-default btn-lg btn-block btn-thin btn-upper"
									href="#"
									target="_blank"
									rel="noopener noreferrer"
								>Download Resume</a>
		        </div>
			</div>
		</div>
	)
}

export default CardSideBox
