import React, { useState } from 'react'
import navbarcss from './NavBar.module.css'
import NavLinks from './NavLinks'
import { RiMenu3Line } from 'react-icons/ri'
import { RiCloseLine } from 'react-icons/ri'

const MobileNav = () => {
	const [open, setOpen] = useState(false)

	const openIcon = (
		<RiMenu3Line
			className={navbarcss.hamburgerOpen}
			size='40px'
			color='#bfbfbf'
			onClick={() => setOpen(!open)}
		/>
	)

	const closeIcon = (
		<RiCloseLine
			className={navbarcss.hamburgerOpen}
			size='40px'
			color='#bfbfbf'
			onClick={() => setOpen(!open)}
		/>
	)

	const closeMenu = () => setOpen(false)

	return (
		<nav className={navbarcss.mobileNavigation}>
			{open ? closeIcon : openIcon}
			{open && <NavLinks isMobile={true} closeMenu={closeMenu} />}
		</nav>
	)
}

export default MobileNav
