import React from 'react'
import navbarcss from './NavBar.module.css'
import NavLinks from './NavLinks'

const Navigation = () => {
	return (
		<nav className={navbarcss.navigation}>
			<NavLinks />
		</nav>
	)
}

export default Navigation
