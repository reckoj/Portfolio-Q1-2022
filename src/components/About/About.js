import React from 'react'
import aboutcss from './About.module.css'
import devimg from '../../images/dev.svg'
import learnImg from '../../images/learn.svg'
import repeatImg from '../../images/repeat.svg'
import projectscss from './testing2.module.css'

const About = () => {
	return (
		<>
			<section className={projectscss.mainContainer} id='about'>
				<div className={aboutcss.detailsTextContainer}>
					<h1 className={aboutcss.detailsH1}> About Me</h1>
					<p className={aboutcss.detailsPara1}>
						H1 there! I'm Recko, a Full stack web developer that loves bringing
						ideas to life through code. I first started of teaching myself how
						to code, mainly by watching tutorials. In 2019, I took a leap, I
						enrolled in the Computer Information Systems course at Holland
						College. I quickly absorbed new concepts, while bringing ambitious
						ideas and a positive attitude to every challenge. As a practical
						continuous learner, I love applying what I learn.
					</p>
				</div>

				<div className={projectscss.wrapper}>
					<div className={projectscss.container}>
						<div className={projectscss.bannerimg}>
							<img
								className={projectscss.img1}
								src={learnImg}
								alt='developer learning'
							/>
							<h4 className={projectscss.name}>Learn</h4>
							<p className={projectscss.description}>
								Learning is a journey we must never stop. "Learning and
								innovation go hand in hand. The arrogance of success is to think
								that what you did yesterday will be sufficient for tomorrow".{' '}
								<br />
								-William Pollard-
							</p>
						</div>
					</div>
					{/* <hr className={projectscss.hr} /> */}
					<div className={projectscss.container}>
						<div className={projectscss.bannerimg2}>
							<img
								className={projectscss.img1}
								src={devimg}
								alt='developer learning'
							/>
							<h4 className={projectscss.name}>Build</h4>
							<p className={projectscss.description}>
								Practicing what you just learned by building is an essential
								ingredient to cement the concepts of programming .
								<br /> "Building is about getting around the obstacles that are
								presented to you"
							</p>
						</div>
					</div>
					{/* <hr className={projectscss.hr} /> */}
					<div className={projectscss.container}>
						<div className={projectscss.bannerimg3}>
							<img
								className={projectscss.img1}
								src={repeatImg}
								alt='developer learning'
							/>
							<h4 className={projectscss.name}>Repeat</h4>
							<p className={projectscss.description}>
								Iterating over these steps is what makes everthing and flow like
								water. “The thing is, continuity of strategic direction and
								continuous improvement in how you do things are absolutely
								consistent with each other. In fact, they’re mutually
								reinforcing.”
								<span>~Michael Porter</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default About
