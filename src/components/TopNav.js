import React from 'react'

import { Link, animateScroll as scroll } from "react-scroll"

const TopNavbar = (props) => {
	return (
		<nav id="crt-main-nav" className={props.displayStatus}>
		    <ul className="clear-list">
		        <li>
		        	<Link 
		        		to="/"
		        		spy={true}
						smooth={true}
						duration={500}
		        	>
		        	home
		        	</Link>
		        </li>
		        <li>
		        	<Link 
		        		to="experience"
		        		spy={true}
						smooth={true}
						duration={500}
		        	>
		        	experience
		        	</Link>
		        </li>
		        <li>
		        	<Link 
		        		to="code"
		        		spy={true}
						smooth={true}
						duration={500}
		        	>
		        	code
		        	</Link>
		        </li>
		        <li>
		        	<Link 
		        		to="references"
		        		spy={true}
						smooth={true}
						duration={500}
		        	>
		        	testimonial
		        	</Link>
		        </li>
		        <li>
		        	<Link 
		        		to="contact"
		        		spy={true}
						smooth={true}
						duration={500}
					>
					contact
					</Link>
				</li>
		    </ul>                                 
	    </nav>
	)
}

export default TopNavbar