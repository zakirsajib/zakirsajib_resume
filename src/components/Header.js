import React from 'react'
import { Link } from 'gatsby'

import logoLight from '../images/uploads/brand/logo.svg'
import logoDark from '../images/uploads/brand/logoDark.png'
import zs42 from '../images/uploads/avatar/zs-42x42.jpg'

import TopNav from '../components/TopNav'
import Nav from '../components/Nav'

const Header =(props)=>{
	return(
		<header id="crt-header">
     	<div className="crt-head-inner crt-container hidden-md hidden-xs">
        <div className="crt-container-sm">
	        <div className="crt-head-row">
	          <div id="crt-head-col1" className="crt-head-col text-left">
	            <Link id="crt-logo" className="crt-logo light" to="/">
	              <img
									src={logoLight}
									alt="Zakir resume"
								/><span>.ZS</span>
	            </Link>
							<Link id="crt-logo" className="crt-logo dark" to="/">
	              <img
									src={logoDark}
									alt="Zakir resume"
								/><span>.ZS</span>
	            </Link>
	          </div>

				    <div id="crt-head-col2" className="crt-head-col text-right">
				        <div className="crt-nav-container crt-container hidden-sm hidden-xs">
						    	<TopNav displayStatus = {props.displayStatus}/>
				        </div>
				    </div>

				    <div id="crt-head-col3" className="crt-head-col text-right">
				        {/*<button id="crt-sidebar-btn" className="btn btn-icon btn-shade" onClick={this.toggleSidenav.bind(this)}>
				            <span className="crt-icon crt-icon-side-bar-icon"></span>
				        </button>*/}
				    </div>
					</div>
				</div>
			</div>

	    <nav id="crt-nav-sm" className="crt-nav hidden-lg hidden-md">
				<Nav />
			</nav>
    </header>
	)
}

export default Header
