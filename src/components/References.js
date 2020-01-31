import React from 'react'

import andrewfarnell from '../images/uploads/avatar/andrew-farnell.jpg'
import angelabyers from '../images/uploads/avatar/angela-byers.jpg'
import cherylphillips from '../images/uploads/avatar/cheryl-phillips.jpg'
import rolandmortimer from '../images/uploads/avatar/rolandmortimer.jpg'
import bencoleman from '../images/uploads/avatar/ben-coleman.jpeg'

const References = () => {
	return(
		<section className="section padd-box">
	        <h2 className="title-lg text-upper">References</h2>
	
	        <div className="padd-box-sm clear-mrg">
	            <div className="ref-box brd-btm hreview">
	                <div className="ref-avatar">
	                    <img alt="Andrew Farnell" src={andrewfarnell} srcSet={andrewfarnell} className="avatar avatar-54 photo" height="54" width="54" />
	                </div>
	
	                <div className="ref-info">
	                    <div className="ref-author">
	                        <strong>Andrew Farnell</strong>
	                        <span>Karisma Graphics, LLC.</span>
	                    </div>
	
	                    <blockquote className="ref-cont clear-mrg">I highly recommend Zakir!! He is top notch with his work, communication, and skill. He is always my first choice when I need something done. Thank you once again!!   
	                    </blockquote>
	                </div>
	            </div>
	
	            <div className="ref-box brd-btm hreview">
	                <div className="ref-avatar">
	                    <img alt="Angela Byers" src={angelabyers} srcSet={angelabyers} className="avatar avatar-54 photo" height="54" width="54"/>
	                </div>
	
	                <div className="ref-info">
	                    <div className="ref-author">
	                        <strong>Angela Byers</strong>
	                        <span>Byers Creative</span>
	                    </div>
	
	                    <blockquote className="ref-cont clear-mrg">
	                        Zakir is fast, accurate and can do about any type of WordPress site you need.</blockquote>
	                </div>
	            </div>
	
	            <div className="ref-box brd-btm hreview">
	                <div className="ref-avatar">
	                    <img alt="Cheryl Phillips" src={cherylphillips} srcSet={cherylphillips} className="avatar avatar-54 photo" height="54" width="54"/>
	                </div>
	
	                <div className="ref-info">
	                    <div className="ref-author">
	                        <strong>Cheryl Phillips</strong>
	                        <span>Cheryl Phillips Design</span>
	                    </div>
	
	                    <blockquote className="ref-cont clear-mrg">
	                        I've worked with Zakir for over a year on various projects. He has been a great resource for support of my website design business. As a coder, I think he is the best I've worked with. He excels at complex coding.
	                    </blockquote>
	                </div>
	            </div>
	            <div className="ref-box brd-btm hreview">
	                <div className="ref-avatar">
	                    <img alt="Roland Mortimer" src={rolandmortimer} srcSet={rolandmortimer} className="avatar avatar-54 photo" height="54" width="54"/>
	                </div>
	
	                <div className="ref-info">
	                    <div className="ref-author">
	                        <strong>Roland Mortimer</strong>
	                        <span>StartUp Britain</span>
	                    </div>
	
	                    <blockquote className="ref-cont clear-mrg">
	                        This is the second time round I have worked with Zakir and yet again I am absolutely delighted his quality of work, communication and ability to execute ideas and suggestions. I very much look forward to working with Zakir again on future projects.
	                    </blockquote>
	                </div>
	            </div>
	            
	            <div className="ref-box hreview">
	                <div className="ref-avatar">
	                    <img alt="Ben Coleman" src={bencoleman} srcSet={bencoleman} className="avatar avatar-54 photo" height="54" width="54"/>
	                </div>
	
	                <div className="ref-info">
	                    <div className="ref-author">
	                        <strong>Ben Coleman</strong>
	                    </div>
	
	                    <blockquote className="ref-cont clear-mrg">
	                        Worked well under a tight deadline - competent understanding of our usual development methodology, which has been difficult to find amongst other freelancers. Hope to be working with Zakir again on a project soon.
	                    </blockquote>
	                </div>
	            </div>
	            
	            
	        </div>
	</section>
	)
}

export default References