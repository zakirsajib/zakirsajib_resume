import React from 'react'
import Layout from '../components/Layout'

import Header from '../components/Header'

let display = 'hidden'

const NotFoundPage = () => (
  <Layout>
    <div>
	    <div className="crt-wrapper">
	    	<Header displayStatus={display}/>
	    	<div id="crt-container" className="crt-container">
		        <div className="crt-container-sm">	
		        	<div className="crt-paper-layers">
					    <div className="crt-paper clearfix">
					        <div className="crt-paper-cont paper-padd clear-mrg">
					                <div className="padd-box-sm">
					                    <div className="text-center">
					                        <strong className="title-404 text-upper" style={{display: `block`,lineHeight: `1.1`, fontSize: `10.063em`, marginBottom: `40px`}}>404</strong>
					                        <span className="info-404" style={{display: `block`, fontSize: `1.5em`, fontWeight: `700`, textTransform: `uppercase`, marginBottom: `70px`}}>the page you were looking for<br /> does not exist</span>
					                        <a className="btn btn-primary" href="/">Go Back</a>
					                    </div>
					                </div>
					
					        </div>
					    </div>
					</div>
				</div>
			</div>
		</div>
    </div>
  </Layout>
)

export default NotFoundPage
