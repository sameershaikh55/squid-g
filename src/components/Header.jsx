import React, { useEffect } from "react";

// IMPORT ICONS
import { FaTwitter, FaDiscord, FaTimes } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// IMPORT IMAGES
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

// IMPORT REACT SCROLL
import { NavLink, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ isOpen, ClickEvent }) => {
	let location = useLocation();

	useEffect(() => {
		if (location.hash) {
			let elem = document.getElementById(location.hash.slice(1));
			if (elem) {
				elem.scrollIntoView({ behavior: "smooth" });
			}
		} else {
			window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
		}
	}, [location]);

	useEffect(() => {
		// FOR NAVBAR SCROLLING EFFECT START
		window.addEventListener("scroll", function () {
			var header = document.querySelector(".header_container");
			if (header !== null) {
				header.classList.toggle("sticky", window.scrollY > 0);
			}
		});
	}, []);
	return (
		<>
			<div className="header_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="d-flex w-100 justify-content-between align-items-center">
									<div className="logo_cont">
										<NavLink to="/">
											<img
												className="w-100"
												src={logo}
												alt="Logo"
												width="120"
												height="76"
											/>
										</NavLink>
									</div>
									<div className="d-block d-md-none">
										{(!isOpen && (
											<img src={hamburger} alt="Menu" onClick={ClickEvent} />
										)) || (
											<FaTimes
												color="#fff"
												fontSize="2rem"
												className="pointer"
												onClick={ClickEvent}
											/>
										)}
									</div>
									<ul className="list-unstyled d-none d-md-flex mb-0">
										<li>
											<Link
												className="f18 text-decoration-none pointer"
												to="/#about"
											>
												About
											</Link>
										</li>
										<li className="ms-4 ps-2">
											<Link
												className="f18 text-decoration-none pointer"
												to="/#roadmap"
											>
												Roadmap
											</Link>
										</li>
										<li className="ms-4 ps-2">
											<Link
												className="f18 text-decoration-none pointer"
												to="/#team"
											>
												Our Team
											</Link>
										</li>
										<li className="ms-4 ps-2">
											<NavLink
												activeClassName="active_class"
												className="f18 text-decoration-none pointer"
												to="/winner"
											>
												Winners
											</NavLink>
										</li>
										<li className="ms-4 ps-2">
											<a target="blank" href="https://discord.gg/qfTc96uk">
												<FaDiscord fontSize="1.8rem" />
											</a>
										</li>
										<li className="ms-4 ps-2">
											<a
												target="blank"
												href="https://www.instagram.com/csg_nft/"
											>
												<BsInstagram fontSize="1.6rem" />
											</a>
										</li>
										<li className="ms-4 ps-2">
											<a target="blank" href="https://twitter.com/CSG_NFT">
												<FaTwitter fontSize="1.6rem" />
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
