import React from 'react'
import ReactTooltip from 'react-tooltip'
import { Link, animateScroll as scroll } from "react-scroll";
import ThemeChanger from '../components/themeChanger'
import zs42 from '../images/uploads/avatar/zs-42x42.jpg'

const Nav =() => {
	return (
		<ul className="clear-list">
	        <li>
	            <Link
	            	to="about"
	            	data-tip="About"
	            	spy={true}
								smooth={true}
								duration={500}
	            >
							<img
								className="avatar avatar-42"
								src={zs42}
								srcSet={zs42}
								alt="Zakir Sajib avatar"
							/>
	            </Link>
	        </li>
	        <li>
	            <Link
	            	to="experience"
	            	data-tip="Experience"
	            	spy={true}
								smooth={true}
								duration={500}
	            >
	            <span className="crt-icon crt-icon-experience"></span>
	            </Link>
	        </li>
	        <li>
	            <Link
	            	to="code"
	            	data-tip="Code"
	            	spy={true}
								smooth={true}
								duration={500}
	            >
	            <span className="crt-icon crt-icon-github"></span>
	            </Link>
	        </li>
	        <li>
	            <Link
	            	to="references"
	            	data-tip="References"
	            	spy={true}
								smooth={true}
								duration={500}
	            >
	            	<span className="crt-icon crt-icon-references"></span>
	            </Link>
	        </li>
	        <li>
	            <Link
	            	to="contact"
	            	spy={true}
								smooth={true}
								duration={500}
	            	data-tip="Contact"
	            ><span className="crt-icon crt-icon-contact"></span>
	            </Link>
	        </li>
					<li>
						<ThemeChanger />
					</li>
	        <ReactTooltip />
	    </ul>
	)
}

export default Nav
