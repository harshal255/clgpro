import React from 'react'
import { NavLink } from 'react-router-dom'



const Header = () => {
	return (
		<header className="header" id="navbar">
			<div className="header__bottom">
				<div className="container">
					<nav className="navbar navbar-expand-lg">
						<a className="navbar-brand" href="index.html">

							<img src="assets/images/logo/logo.png" alt="logo" />
						</a>
						<button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler--icon"></span>
						</button>
						<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
							<div className="navbar-nav mainmenu">
								<ul>
									<li className="">
										<NavLink to='/' >
											Home
										</NavLink>

									</li>
									<li>
										<NavLink to='/allmembers' >
											All Members
										</NavLink>

									</li>

									<li>
										<NavLink to='/blogs' >
											Blogs
										</NavLink>

									</li>
									<li><a href="contact.html">contact</a></li>
								</ul>
							</div>
							<div className="header__more">
								<button className="default-btn dropdown-toggle" type="button" id="moreoption" data-bs-toggle="dropdown" aria-expanded="false">My Account</button>
								<ul className="dropdown-menu" aria-labelledby="moreoption">
									<li><a className="dropdown-item" href="login.html">Log In</a></li>
									<li><a className="dropdown-item" href="register.html">Sign Up</a></li>
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header