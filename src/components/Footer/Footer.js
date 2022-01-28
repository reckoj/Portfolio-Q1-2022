import React from 'react'
import footercss from './Footer.module.css'
import { RiCloseLine } from 'react-icons/ri'
import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

import { TiArrowUpOutline } from 'react-icons/ti'
import { Link, animateScroll as scroll } from 'react-scroll'

const Footer = () => {
	const scrollToTop = () => {
		scroll.scrollToTop()
	}
	return (
		<section className={footercss.mainContainer}>
			<div className={footercss.socialsContainer}>
				<div className={footercss.link}>
					<a
						href='https://www.linkedin.com/in/recko-jean-5369b09a/'
						target='_blank'
					>
						<AiOutlineLinkedin className={footercss.socials} />
					</a>
				</div>
				<div className={footercss.link}>
					<a href='https://github.com/reckoj' target='_blank'>
						<AiOutlineGithub className={footercss.socials} />
					</a>
				</div>
				<div className={footercss.glowContainer}>
					<Link
						className={footercss.glow}
						target='_blank'
						onClick={scrollToTop}
					>
						<TiArrowUpOutline width={30} height={30} />
					</Link>
					<h5 className={footercss.hfive} style={{ color: 'white' }}>
						Back to top
					</h5>
				</div>
			</div>
		</section>
	)
}

export default Footer
