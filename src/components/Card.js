import React from 'react'
import Sticky from 'react-sticky-el'

import CardSideBox from '../components/CardSideBox'

const Card =()=>{
	return(
		<div>
			<div id="crt-side-box-wrap" className="crt-sticky hidden-sm hidden-xs">
				<Sticky id="detailSticky" topOffset={20} stickyStyle={{ transform: 'translateY(50px)' }}>
					<CardSideBox />
				</Sticky>
			</div>

			<div id="crt-side-box-wrap" className="crt-sticky hidden-lg hidden-md">
				<CardSideBox />
			</div>
		</div>
	)
}

export default Card