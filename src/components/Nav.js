import React from 'react'
import { Link } from 'gatsby'
import ReactTooltip from 'react-tooltip'


import zs42 from '../images/uploads/avatar/zs-42x42.jpg'

const Nav =() => {
	return (
		<ul className="clear-list">
	        <li>
	            <Link to="#about" data-tip="About"><img className="avatar avatar-42" src={zs42} srcSet={zs42} alt=""/></Link>
	        </li>
	        <li>
	            <Link to="#experience" data-tip="Experience"><span className="crt-icon crt-icon-experience"></span></Link>
	        </li>
	        <li>
	            <Link to="#code" data-tip="Code"><span className="crt-icon crt-icon-github"></span></Link>
	        </li>
	        <li>
	            <Link to="#references" data-tip="References"><span className="crt-icon crt-icon-references"></span></Link>
	        </li>
	        <li>
	            <Link to="#contact" data-tip="Contact"><span className="crt-icon crt-icon-contact"></span></Link>
	        </li>
	        <ReactTooltip />
	    </ul>
	)
}

export default Nav