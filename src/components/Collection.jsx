import React from "react";

// IMPORTING IMAGES
import soldiers from "../assets/nft/soldiers.png";
import players from "../assets/nft/players.png";
import front from "../assets/nft/front-man.png";
import vips from "../assets/nft/vips.png";
import boss from "../assets/nft/boss.png";

const Collection = () => {
	// DATA
	const data = [
		{
			i: soldiers,
			t: "Soldiers",
			a: "536 NFT",
			p: "They are the ones in charge of enforcing the rules of the game.",
			alt: "NFT image of soldier",
		},
		{
			i: players,
			t: "Players",
			a: "456 NFT",
			p: "These are the participants in the game.",
			alt: "NFT image of players",
		},
		{
			i: front,
			t: "Front man",
			a: "1 NFT",
			p: "The one who controls the game.",
			alt: "NFT image of front man",
		},
		{
			i: vips,
			t: "Vips",
			a: "6 NFT",
			p: "Guests with many Solanas who enjoy watching the game",
			alt: "Text aqui",
		},
		{
			i: boss,
			t: "Boss",
			a: "1 NFT",
			p: "The boss, creator and participant in the game.",
			alt: "NFT image of vip",
		},
	];

	return (
		<>
			<div className="collection_container position-relative">
				<div id="about" className="position-absolute"></div>
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<h1 className="head text-center color1">
									About Squid Game Collection
								</h1>
								<p className="para text-center text-white">
									The Squid Game Collection consists of collecting NFT of
									different types of characters, with which you can receive SOL
									which is the cryptocurrency of the next generation blockchain
									network Solana, as well as you can collect, sell and exchange
									your NFT to receive new NFT.
								</p>
								<br />
								<h5 className="para color1 fw600 text-center mb-2 mb-md-0">
									Types of NFT
								</h5>
								<br />

								<div className="nft_container">
									{data.map((prev, ind) => {
										const { i, p, t, a } = prev;
										return (
											<div key={ind} className="nft_card mt-4 mt-sm-0">
												<div className="img_cont">
													<img className="w-100" src={i} alt={prev.alt} />
													<div class="overlay"></div>
													<h4 className="text-white f28 fw700">{t}</h4>
												</div>
												<div className="text-center">
													<p className="mt-2 mb-1 f18 color1">{a}</p>
													<p className="text-white f14">{p}</p>
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
		</>
	);
};

export default Collection;
