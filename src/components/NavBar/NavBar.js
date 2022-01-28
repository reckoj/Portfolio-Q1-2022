import React from 'react'
import navbarcss from './NavBar.module.css'
import MobileNav from './MobileNav'
import Navigation from './Navigation'

const NavBar = () => {
	return (
		<>
			<div className={navbarcss.navBar}>
				<Navigation />
				<MobileNav />
			</div>
		</>
	)
}

export default NavBar
