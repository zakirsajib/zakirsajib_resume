import React from 'react'

import Social from '../components/Social'
import zs195 from '../images/uploads/avatar/zs-195x195.jpg'

import cv from '../cv/Latest-CV.pdf'

const CardSideBox = () => {
	return (
		<div id="crt-side-box">
	    	<div className="crt-side-box-item">
				<div className="crt-card bg-primary text-center">
				    <div className="crt-card-avatar">
				        <img className="avatar avatar-195" src={zs195}
				             width="195" height="195" alt="Zakir Sajib - WordPress Developer with WooCommerce Experience"/>
				    </div>
				    <div className="crt-card-info">
				        <h2 className="text-upper">Zakir Sajib</h2>
				        <p className="text-muted">WordPress Developer with WooCommerce Experience</p>
				        <Social />
				    </div>
				</div>
		        <div className="crt-side-box-btn">
		            <a className="btn btn-default btn-lg btn-block btn-thin btn-upper" href={cv} target="_blank" rel="noopener noreferrer">Download Resume</a>
		        </div>
			</div>
		</div>
	)
}

export default CardSideBox