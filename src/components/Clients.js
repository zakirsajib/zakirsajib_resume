import React from 'react'

//import avatar5401 from '../images/uploads/avatar/avatar-54x54-01.png'
//import avatar5402 from '../images/uploads/avatar/avatar-54x54-02.png'
//import avatar58 from '../images/uploads/avatar/avatar-58x58-default.png.jpeg'
//import bencoleman from '../images/uploads/avatar/ben-coleman.jpeg'

const Clients = () => {
	return(
		<section className="section clear-mrg padd-box">
            <h2 className="title-lg text-upper">Clients</h2>
            <div className="padd-box-sm">
                <ul className="clients">
                    <li><a href=""><img src="/src/images/uploads/clients/logo-wordpress.png" srcSet="images/uploads/clients/logo-wordpress-2x.png 2x" alt="WordPress"/></a></li><li>
                        <a href=""><img src="images/uploads/clients/logo-compass.png" srcSet="images/uploads/clients/logo-compass-2x.png 2x" alt="Compass"/></a></li><li>
                        <a href=""><img src="images/uploads/clients/logo-jquery.png" srcSet="images/uploads/clients/logo-jquery-2x.png 2x" alt="jQuery"/></a></li><li>
                        <a href=""><img src="images/uploads/clients/logo-teaspoon.png" srcSet="images/uploads/clients/logo-teaspoon-2x.png 2x" alt="teaspoon"/></a></li><li>
                        <a href=""><img src="images/uploads/clients/logo-evernote.png" srcSet="images/uploads/clients/logo-evernote-2x.png 2x" alt="evernote"/></a></li><li>
                        <a href=""><img src="images/uploads/clients/logo-bootstrap.png" srcSet="images/uploads/clients/logo-bootstrap-2x.png 2x" alt="Bootstrap"/></a></li>
                </ul>
            </div>
        </section>
	)
}

export default Clients