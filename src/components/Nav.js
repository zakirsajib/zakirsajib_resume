import React from 'react'
import { Link } from 'gatsby'

import zs42 from '../images/uploads/avatar/zs-42x42.jpg'

const Nav =() => {
	return (
		<ul className="clear-list">
	        <li>
	            <Link to="#about" data-tooltip="Home"><img className="avatar avatar-42" src={zs42} srcSet={zs42} alt=""/></Link>
	        </li>
	        <li>
	            <Link to="#experience" data-tooltip="Experience"><span className="crt-icon crt-icon-experience"></span></Link>
	        </li>
	        <li>
	            <Link to="#code" data-tooltip="Portfolio"><span className="crt-icon crt-icon-github"></span></Link>
	        </li>
	        <li>
	            <Link to="#references" data-tooltip="References"><span className="crt-icon crt-icon-references"></span></Link>
	        </li>
	        <li>
	            <Link to="#contact" data-tooltip="Contact"><span className="crt-icon crt-icon-contact"></span></Link>
	        </li>
	        <li>
	            <Link to="#blog" data-tooltip="Blog"><span className="crt-icon crt-icon-blog"></span></Link>
	        </li>
	    </ul>
	)
}

export default Nav