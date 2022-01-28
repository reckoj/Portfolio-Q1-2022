import React from 'react'
import projectscss from './Projects.module.css'
import spaceImg from '../../images/space.png'
import restImg from '../../images/rest-api.png'
import placeImg from '../../images/places.png'

const Projects = () => {
	return (
		<>
			<section className={projectscss.mainContainer} id='projects'>
				<div className={projectscss.wrapper}>
					<div className={projectscss.container}>
						<div className={projectscss.bannerimg}>
							<h1 className={projectscss.name}>Space Tourism</h1>
							<p className={projectscss.description}>
								Intermediate front end mentor challenge built using react.
							</p>
						</div>

						<a
							href='https://tourism-in-space-frontendmentor.netlify.app/'
							target='_blank'
						>
							<button className={projectscss.btn}>View website</button>
						</a>
					</div>

					<div className={projectscss.container}>
						<div className={projectscss.bannerimg2}>
							<p className={projectscss.name}>Countries Rest API</p>
							<p className={projectscss.description}>
								Advanced front end mentor challenge using axios for data
								fetching and react on the frontend
							</p>
						</div>

						<a href='https://rest-counties-app.netlify.app/' target='_blank'>
							<button className={projectscss.btn}>View website</button>
						</a>
					</div>

					<div className={projectscss.container}>
						<div className={projectscss.bannerimg3}>
							<p className={projectscss.name}>Just Ry</p>
							<p className={projectscss.description}>
								Project built using axios for data fetching and react on the
								frontend
							</p>
						</div>

						<a>
							<button className={projectscss.btn}>View website</button>
						</a>
					</div>
				</div>
			</section>
		</>
	)
}

export default Projects
