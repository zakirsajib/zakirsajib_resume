import React from 'react'
import { Link } from 'gatsby'

const TopNavbar = (props) => {
	return (
		<nav id="crt-main-nav" className={props.displayStatus}>
		    <ul className="clear-list">
		        <li><Link to="/">home</Link></li>
		        <li><Link to="#experience">experience</Link></li>
		        <li><Link to="#code">code</Link></li>
		        <li><Link to="#references">testimonial</Link></li>
		        <li><Link to="#contact">contact</Link></li>
		    </ul>                                 
	    </nav>
	)
}

export default TopNavbar