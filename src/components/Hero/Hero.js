import React from 'react'
import herocss from './Hero.module.css'
import heroImg from '../../images/dev.svg'
import { Link, animateScroll as scroll } from 'react-scroll'

const Hero = () => {
	return (
		<>
			<div className={herocss.mainContainer}>
				<div className={herocss.heroContainer}>
					<h1 className={herocss.heroText}>H1, I'm Recko</h1>
					<p className={herocss.heroParagraph}>
						A full stack developer based in Canada
					</p>

					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						spy={true}
						duration={700}
					>
						<button className={herocss.heroBtn}>Get in touch!</button>
					</Link>
				</div>
			</div>
		</>
	)
}

export default Hero
