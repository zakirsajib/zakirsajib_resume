import React from 'react'
import PropTypes from 'prop-types'
import userConfig from '../../config'

{/* Social*/}
const Social = (props) =>{
	return (
		<ul className={"crt-social clear-list" + " " + props.extraClassName}>
	        <li><a href={userConfig.social.linkedin} target="_blank" rel="noopener noreferrer"><span className="crt-icon crt-icon-linkedin"></span></a></li>
			<li><a href={userConfig.social.website} target="_blank" rel="noopener noreferrer"><span className="crt-icon crt-icon-blog"></span></a></li>
			<li><a href={userConfig.social.github} target="_blank" rel="noopener noreferrer"><span className="crt-icon crt-icon-github"></span></a></li>
			<li><a href={"mailto:" + userConfig.social.email}><span className="crt-icon crt-icon-envelope"></span></a></li>
	    </ul>
	)
}

// Define default Props

Social.defaultProps ={
	extraClassName: ''
}

// Use PropTypes to define the props you expect

Social.propTypes ={
	extraClassName: PropTypes.string.isRequired
}

export default Social