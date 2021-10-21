import React from "react";

// IMPORTING IMAGES
import Team1 from "../assets/nft/Team-1.png";
import Team2 from "../assets/nft/Team-2.png";
import Team3 from "../assets/nft/Team-3.png";

const Team = () => {
	// DATA
	const data = [
		{
			i: Team1,
			t: "Ken",
			p: "Technology Development",
			alt: "NFT image of square type soldier",
		},
		{
			i: Team2,
			t: "XelShield",
			p: "3D Designer",
			alt: "NFT image of triangle soldier",
		},
		{
			i: Team3,
			t: "Saym",
			p: "Web Development",
			alt: "NFT image of circle type soldier",
		},
	];

	return (
		<div className="team_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<h1 className="head text-center color1">Get to know our team</h1>
							<p className="para text-center text-white">
								Our team consists of professionals with more than 10 years of
								experience in the fields of cryptocurrencies, marketing and 3D
								design.
							</p>
							<p className="para text-center text-white">
								Lovers of blockchain technology and fully committed to this
								collection, we are proud to give you the opportunity to have
								your NFT character from the squid game!
							</p>

							<div className="inner_team my-5">
								<div className="row justify-content-center">
									{data.map((prev, i) => {
										return (
											<div key={i} className="col-11 col-sm-6 col-md-4 mx-auto">
												<div className="position-relative">
													<img
														className="w-100"
														src={prev.i}
														alt={prev.alt}
														width="235"
														height="235"
													/>
													<div class="overlay"></div>
												</div>
												<div className="text-center">
													<h4 className="color1 f28 fw700">{prev.t}</h4>
													<p className="text-white f14">{prev.p}</p>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
