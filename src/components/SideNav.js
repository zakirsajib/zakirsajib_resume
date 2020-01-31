import React from 'react'
import Sticky from 'react-sticky-el'
import Nav from '../components/Nav'

const SideNav = ()=>{
	return (
		<div id="crt-nav-wrap" className="hidden-sm hidden-xs">
	        <Sticky id="detailSticky" topOffset={10} stickyStyle={{ transform: 'translateY(50px)' }}>
		        <div id="crt-nav-inner">
		            <div className="crt-nav-cont">
		                <div id="crt-nav-scroll">
		                    <nav id="crt-nav" className="crt-nav">
		                        <Nav />    
		                    </nav>
		                </div>
		
	                    <div id="crt-nav-tools" className="hidden">
	                        <span className="crt-icon crt-icon-dots-three-horizontal"></span>
	
	                        <button id="crt-nav-arrow" className="clear-btn">
	                            <span className="crt-icon crt-icon-chevron-thin-down"></span>
	                        </button>
	                    </div>
		            </div>
		            <div className="crt-nav-btm"></div>
	            </div>
            </Sticky>
        </div>
	)
}

export default SideNav