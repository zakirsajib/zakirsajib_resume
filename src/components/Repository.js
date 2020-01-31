import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'

const Repository = () => {
	
	
	let imgAray = ['prj-01', 'prj-02', 'prj-03', 'prj-04', 'prj-05'];
	
	let images = imgAray.map(image => {
           return <img key={image} src={require(`../images/uploads/portfolio/${image}.jpg`)} alt="" />
    });
	
	const data = useStaticQuery(graphql`
		query MyQuery {
			githubViewer {
			    pinnedItems {
			      totalCount
			      nodes {
			        description
			        homepageUrl
			        name
			        url
			        languages {
			          nodes {
			            name
			          }
			        }
			      }
			    }
			  }
			}
		`)
	
	
		
	return(
		<div className="crt-paper-cont paper-padd clear-mrg">
            <section className="section padd-box">
            	<h2 className="title-lg text-upper">repository</h2>
				<div className="pf-wrap">
                    <div className="pf-grid">
                    	<div className="pf-grid-sizer"></div>
                    	{data.githubViewer.pinnedItems.nodes.map((repository, i) => (
	                    	<div className="pf-grid-item" key={i}>
		                    	 
		                    	<a className="pf-project" href={repository.url} target="_blank" rel="noopener noreferrer">
		                            <figure className="pf-figure">
									{images[i]}
									</figure>
		                            <div className="pf-caption text-center">
		                                <div className="valign-table">
		                                    <div className="valign-cell">
		                                        <h2 className="pf-title text-upper">{repository.name}</h2>
		
		                                        <div className="pf-text clear-mrg">
		                                            <p>{repository.description}</p>
		                                        </div>
		
		                                        <a className="btn btn-primary" role="button" href={repository.url} target="_blank" rel="noopener noreferrer">View repository</a>
		                                    </div>
		                                </div>
		                            </div>
		                        </a>
							</div>
                    	))}
                    </div>
                </div>
            </section>
        </div>
	)
};

export default Repository

