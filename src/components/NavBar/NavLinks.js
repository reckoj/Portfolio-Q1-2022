import React from 'react'
import navbarcss from './NavBar.module.css'
import { motion } from 'framer-motion'
import { Link, animateScroll as scroll } from 'react-scroll'

const NavLinks = props => {
	const animateFrom = { opacity: 0, y: -40 }
	const animateTo = { opacity: 1, y: 0 }
	const scrollToTop = () => {
		scroll.scrollToTop()
	}
	return (
		<>
			<ul className={navbarcss.uls}>
				<motion.li
					transition={{ ease: 'easeOut', duration: 0.2 }}
					initial={animateFrom}
					animate={animateTo}
					onClick={() => props.isMobile && props.closeMenu()}
				>
					<Link
						to='navbar'
						activeClass='active'
						spy={true}
						smooth={true}
						duration={700}
						onClick={scrollToTop}
					>
						Home
					</Link>
				</motion.li>
				<motion.li
					transition={{ ease: 'easeOut', duration: 0.4 }}
					initial={animateFrom}
					animate={animateTo}
					onClick={() => props.isMobile && props.closeMenu()}
				>
					<Link
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						duration={700}
					>
						About me
					</Link>
				</motion.li>
				<motion.li
					transition={{ ease: 'easeOut', duration: 0.6 }}
					initial={animateFrom}
					animate={animateTo}
					onClick={() => props.isMobile && props.closeMenu()}
				>
					<Link
						activeClass='active'
						to='projects'
						spy={true}
						smooth={true}
						duration={700}
					>
						Projects
					</Link>
				</motion.li>
				<motion.li
					transition={{ ease: 'easeOut', duration: 0.8 }}
					initial={animateFrom}
					animate={animateTo}
					onClick={() => props.isMobile && props.closeMenu()}
				>
					<Link
						activeClass='active'
						to='contact'
						spy={true}
						smooth={true}
						spy={true}
						duration={700}
					>
						Contact
					</Link>
				</motion.li>
			</ul>
		</>
	)
}

export default NavLinks
