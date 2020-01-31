import React from 'react'
import { Link } from 'gatsby'
import Social from '../components/Social'

const MobileMenu = () => {
	return(
		
			<div id="crt-sidebar-inner">
			    <nav id="crt-main-nav-sm" className="visible-xs text-center">
				    <ul className="clear-list">
				        <li><Link to="/">home</Link></li>
				        <li><Link to="#code">code</Link></li>
				        <li><Link to="#contact">contact</Link></li>
				    </ul>        
				</nav>
        
				<div className="crt-card bg-primary text-center">
				    <div className="crt-card-avatar">
				        <img className="avatar avatar-195" src="images/uploads/avatar/avatar-195x195.png"
				             srcSet="images/uploads/avatar/avatar-390x390-2x.png 2x" width="195" height="195" alt=""/>
				    </div>
				    <div className="crt-card-info">
				        <h2 className="text-upper">Ola Lowe</h2>
				
				        <p className="text-muted">Florist | Decorator</p>
				        <Social />
				    </div>
				</div>
		        <aside className="widget-area">
		            <section className="widget widget_posts_entries">
		                <h2 className="widget-title">popular posts</h2>
		                <ul>
		                    <li>
		                        <a className="post-image" href="">
		                            <img src="images/uploads/blog/img-70x70-01.png" alt=""/>
		                        </a>
		                        <div className="post-content">
		                            <h3>
		                                <a href="">contextual advertising</a>
		                            </h3>
		                        </div>
		                        <div className="post-category-comment">
		                            <a href="" className="post-category">Work</a>
		                            <a href="" className="post-comments">256 comments</a>
		                        </div>
		                    </li>
		
		                    <li>
		                        <a className="post-image" href="">
		                            <img src="images/uploads/blog/img-70x70-02.jpg" alt=""/>
		                        </a>
		                        <div className="post-content">
		                            <h3>
		                                <a href="">grilling tips for the dog days of summer</a>
		                            </h3>
		                        </div>
		                        <div className="post-category-comment">
		                            <a href="" className="post-category">Work</a>
		                            <a href="" className="post-comments">256 comments</a>
		                        </div>
		                    </li>
		
		                    <li>
		                        <a className="post-image" href="">
		                            <img src="images/uploads/blog/img-70x70-03.png" alt=""/>
		                        </a>
		                        <div className="post-content">
		                            <h3><a href=""></a>branding do you know who are</h3>
		                        </div>
		                        <div className="post-category-comment">
		                            <a href="" className="post-category">Work</a>
		                            <a href="" className="post-comments">256 comments</a>
		                        </div>
		                    </li>
		                </ul>
		            </section>
		            <section id="recent-posts-3" className="widget widget_recent_entries">
		                <h4 className="widget-title">Recent Posts</h4>
		                <ul>
		                    <li>
		                        <a href="">Global Travel And Vacations  Luxury Travel On A Tight  Budget</a>
		                        <div className="post-category-comment">
		                            <a href="" className="post-category">Photography</a>
		                            <a href="" className="post-comments">256 comments</a>
		                        </div>
		                    </li>
		                    <li>
		                        <a href="">cooking for one</a>
		                        <div className="post-category-comment">
		                            <a href="" className="post-category">Work</a>
		                            <a href="" className="post-comments">256 comments</a>
		                        </div>
		                    </li>
		                    <li>
		                        <a href="">An Ugly Myspace Profile Will  Sure Ruin Your Reputation</a>
		                        <div className="post-category-comment">
		                            <a href="" className="post-category">Photography</a>
		                            <a href="" className="post-comments">256 comments</a>
		                        </div>
		                    </li>
		                </ul>
		            </section>
		
		            <section className="widget widget_categories">
		                <h4 className="widget-title">post categories</h4>
		                <ul>
		                    <li className="cat-item"><a href="">Audios</a>5</li>
		                    <li className="cat-item"><a href="">Daili Inspiration</a>2</li>
		                    <li className="cat-item"><a href="">Freelance</a>27</li>
		                    <li className="cat-item"><a href="">Links</a>5</li>
		                    <li className="cat-item"><a href="">Mobile</a>2</li>
		                    <li className="cat-item"><a href="">Phography</a>27</li>
		                </ul>
		            </section>
		        </aside>
		    </div>
		
	)
}

export default MobileMenu