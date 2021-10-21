import React, { useEffect, useState } from "react";

// IMPORTING FIREBASE
import { db } from "../firebase/firebase";

// IMPORTING IMAGE
import Boss from "../assets/nft/boss.png";

// IMPORTING COMP
import Loader from "./Loader";

const BossNft = () => {
	const [boss, setBoss] = useState();

	// FOR PERCENTAGE
	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db.collection("boss-nft").onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				getPostsFromFirebase.push({
					...doc.data(), //spread operator
					key: doc.id, // `id` given to us by Firebase
				});
			});
			setBoss(getPostsFromFirebase[0].bossNft);
		});

		// return cleanup function
		return () => subscriber();
	}, [boss]); // empty dependencies array => useEffect only called once

	return (
		<div className="boss_container">
			<div className="page_container">
				<div className="container-fluid">
					<div className="row">
						<div className="col-11 col-md-12 mx-auto">
							<div className="text-center">
								<h1 className="f28 color1">BOSS NFT WINNER</h1>
								<p className="text-white">The person who won the draw for</p>
							</div>

							<div className="inner_nft_winner mt-5">
								<div className="position-relative">
									<img
										className="w-100"
										src={Boss}
										alt="NFT Boss"
										width="450"
										height="450"
									/>
									<div class="overlay"></div>
								</div>
								<div className="text-center">
									<h1 className="color3 fw600">BOSS NFT</h1>
									<p className="text-white f28">
										{(boss && boss) || (
											<div className="w-50 mx-auto">
												<Loader />
											</div>
										)}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BossNft;
