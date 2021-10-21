import React from "react";

// IMPORT ICONS
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

// IMPORTING SCROLL
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, ClickEvent }) => {
	return (
		<div
			onClick={ClickEvent}
			style={{
				opacity: `${isOpen ? "1" : "0"}`,
				top: `${isOpen ? "0%" : "-100%"}`,
			}}
			className="SideBarContainer inconsolata"
		>
			<ul className="list-unstyled mb-0">
				<li className="mb-0">
					<Link to="/#about">About</Link>
				</li>
				<li className="mb-0">
					<Link to="/#roadmap">Roadmap</Link>
				</li>
				<li className="mb-0">
					<Link to="/#team">Our Team</Link>
				</li>
				<li className="mb-0">
					<Link to="/winner">Winners</Link>
				</li>
				<li>
					<a target="blank" href="https://discord.gg/qfTc96uk">
						<FaDiscord fontSize="1.8rem" />
					</a>
					<a
						target="blank"
						className="px-3"
						href="https://www.instagram.com/csg_nft/"
					>
						<BsInstagram fontSize="1.6rem" />
					</a>
					<a target="blank" href="https://twitter.com/CSG_NFT">
						<FaTwitter fontSize="1.6rem" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
