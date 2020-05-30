import React from 'react'
import Helmet from 'react-helmet'

import Sticky from 'react-sticky-el'

import GlobalStyle from '../global-styles'
import userConfig from '../../config'

import Header from '../components/Header'
import Sidenav from '../components/SideNav'
import Card from '../components/Card'
import About from '../components/About'
import CMSDoughnut from '../components/Skills/CMSDoughnut'
import FrontendBar from '../components/Skills/FrontendBar'
import BackendBar from '../components/Skills/BackendBar'
import OtherSkillsBar from '../components/Skills/OtherSkillsBar'

import Work from '../components/Work'
import Education from '../components/Education'
import Repository from '../components/Repository'
import References from '../components/References'
//import Clients from '../components/Clients'
import Blog from '../components/Blog'
import Form from '../components/Contact'
import Social from '../components/Social'
//import MobileMenu from '../components/MobileMenu'
import FooterWrapper from '../components/Footer'
import SVG from '../components/SVG'



export default class TemplateWrapper extends React.Component{

	constructor(props) {
		super();
		this.state = {
			close: true
		}
	}
	toggleSidenav() {
		this.setState({close: !this.state.close})
	}

	render() {

		let sidebar_close = 'crt crt-side-box-on crt-nav-on crt-nav-type2 crt-main-nav-on crt-sidebar-on crt-layers-1';

		let sidebar_open = 'crt crt-side-box-on crt-nav-on crt-nav-type2 crt-main-nav-on crt-sidebar-on crt-layers-1 crt-sidebar-opened';

		let sidebar_status = this.state.close ? `${sidebar_close}` : `${sidebar_open}`;

		let social_sidebar ='text-primary';

		return(
			<div>
				<GlobalStyle />
				<Helmet title={`${userConfig.name} | ${userConfig.title}`}>
					<html lang="en" className={`${sidebar_status}`}/>
					<meta name="google-site-verification" content={`${userConfig.googleSiteVerification}`} />
					<meta name="author" content={`${userConfig.author}`} />
					<meta name="description" content={`${userConfig.description}`} />
				</Helmet>
				{sidebar_status == `${sidebar_open}` ? (
					<div id="crt-overlay" style={{opacity: `1`}} onClick={this.toggleSidenav.bind(this)}></div>
				): null }
			<div className="crt-wrapper">
				<Header />
				<div id="crt-container" className="crt-container">
					<Card />
					<Sidenav />
					<div className="crt-container-sm">
						<div id="about" className="crt-paper-layers crt-animate">
							<div className="crt-paper clearfix">
								<div className="crt-paper-cont paper-padd clear-mrg">
									<section className="section brd-btm padd-box">
										<CMSDoughnut />
										<FrontendBar />
										<BackendBar />
										<OtherSkillsBar />
									</section>
									<section className="section padd-box">
										<About />
									</section>
								</div>
							</div>
						</div>

						<div id="experience" className="crt-paper-layers crt-animate">
							<div className="crt-paper clearfix">
								<div className="crt-paper-cont paper-padd clear-mrg">
									<section className="section padd-box">
										<h2 className="title-lg text-upper">work experience</h2>
										<Work />
									</section>
									<section id="timeline" className="section padd-box">
										<h2 className="title-lg text-upper">Education</h2>
										<Education />
									</section>
								</div>
							</div>
						</div>

						<div id="code" className="crt-paper-layers crt-animate">
							<div className="crt-paper clearfix">
								<Repository />
							</div>
						</div>

						<div id="references" className="crt-paper-layers crt-animate">
							<div className="crt-paper clearfix">
								<div className="crt-paper-cont paper-padd clear-mrg">
									<References />
									{/*<Clients /> */}
								</div>
							</div>
						</div>

						<div id="blog" className="crt-paper-layers crt-animate">
							<div className="crt-paper clear-mrg clearfix">
								<div className="crt-paper-cont paper-padd clear-mrg">
									<Blog />
								</div>
							</div>
						</div>

						<div id="contact" className="crt-paper-layers crt-animate">
							<div className="crt-paper clearfix">
								<div className="crt-paper-cont paper-padd clear-mrg">
									<div className="padd-box">
										<h2 className="title-lg text-upper">contact me</h2>
											<div className="padd-box-xs">
												<header className="contact-head">
													<Social extraClassName={social_sidebar} />
													<h3 className="title text-upper">feel free to contact me</h3>
												</header>
											</div>
											<Form />
									</div>
								</div>
							</div>
						</div>
					</div>
			</div> {/* End crt-container */}
			<FooterWrapper />
			<SVG />
		</div> {/* End crt-wrapper */}
	</div>
			);
		}
	}
