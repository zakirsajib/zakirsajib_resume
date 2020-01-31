// Dependencies
import React, { Component } from 'react'

class Form extends Component {

  render() {
    return (
        <div className="padd-box-sm">
            <form 
            	name="contact" 
				method="POST" 
				data-netlify-honeypot="bot-field" 
				data-netlify="true"
				className="contact-form">
				
				{/* Netlify hidden field */}
				<input name="form-name" type="hidden" value="contact"/>
			<p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p> 
				{/* Name field */}
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <div className="form-item-wrap">
                        <input id="author" className="form-item" type="text"/>
                    </div>
                </div>
				{/* Email field */}
                <div className="form-group">
                    <label className="form-label" >E-mail</label>
                    <div className="form-item-wrap">
                        <input id="email" className="form-item" type="email" required="required"/>
                    </div>
                </div>
				{/* Subject field */}
                <div className="form-group">
                    <label className="form-label">Subject</label>
                    <div className="form-item-wrap">
                        <input id="url" className="form-item" type="url"/>
                    </div>
                </div>
				{/* Comment field */}
                <div className="form-group">
                    <label className="form-label">Comment</label>
                    <div className="form-item-wrap">
                        <textarea id="comment" className="form-item"></textarea>
                    </div>
                </div>
				{/* Submit button */}
                <div className="form-submit form-item-wrap">
                    <input className="btn btn-primary btn-lg" type="submit" value="Post Your Comment"/>
                </div>
            </form>
        </div>
    );
  }
}

export default Form;
