import React, { useEffect, useState } from "react";

// IMPORTING FIREBASE
import { db } from "../firebase/firebase";

const Roadmap = () => {
	const [percent, setPercent] = useState();

	// FOR PERCENTAGE
	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db.collection("roadmap").onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				getPostsFromFirebase.push({
					...doc.data(), //spread operator
					key: doc.id, // `id` given to us by Firebase
				});
			});
			setPercent(Number(getPostsFromFirebase[0].roadmap));
		});

		// return cleanup function
		return () => subscriber();
	}, [percent]); // empty dependencies array => useEffect only called once

	return (
		<>
			<div className="roadmap_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<h1 className="head text-center color1">
									Roadmap for participants
								</h1>
								<p className="para text-center text-white">
									This is our roadmap for the project. Depending on the type and
									amount of NFT you own, you will get different benefits
									throughout the project.
								</p>
							</div>
						</div>

						<div className="roadmap_inner_container">
							<section
								id={`${
									(percent === 10 && "cd-timeline1") ||
									(percent === 20 && "cd-timeline2") ||
									(percent === 30 && "cd-timeline3") ||
									(percent === 40 && "cd-timeline4") ||
									(percent === 50 && "cd-timeline5") ||
									(percent === 60 && "cd-timeline6") ||
									(percent === 70 && "cd-timeline7") ||
									(percent === 80 && "cd-timeline8") ||
									(percent === 90 && "cd-timeline9") ||
									(percent === 100 && "cd-timeline10")
								}`}
								className="cd-container"
							>
								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 10 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 10 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-picture"
									></div>

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-md-none fw600 ${
													(percent >= 10 && "color1") || "text-white"
												}`}
											>
												10%
											</h2>
											<div className="text-start text-lg-end ms-2">
												<h2 className="color1 fw600">PROJECT LAUNCH</h2>
												<p className="text-white">
													Launch of social networks and website.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 10 && "color1") || "text-white"
											}`}
										>
											10%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 20 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 20 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-movie"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start w-100">
											<h2
												className={`d-block d-md-none fw600 ${
													(percent >= 20 && "color1") || "text-white"
												}`}
											>
												20%
											</h2>
											<div className="ms-1">
												<h2 className="color1 fw600">
													RECRUITMENT OF SOLDIERS
												</h2>
												<p className="text-white">Launch of soldiers' NFTs</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 20 && "color1") || "text-white"
											}`}
										>
											20%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 30 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 30 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-picture"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 30 && "color1") || "text-white"
												}`}
											>
												30%
											</h2>
											<div className="text-start text-lg-end ms-1">
												<h2 className="color1 fw600">RECRUITMENT OF PLAYERS</h2>
												<p className="text-white">Launch of players' NFTs.</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 30 && "color1") || "text-white"
											}`}
										>
											30%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 40 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 40 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-location"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 40 && "color1") || "text-white"
												}`}
											>
												40%
											</h2>
											<div className="ms-1">
												<h2 className="color1 fw600">RECRUITMENT FRONT MAN</h2>
												<p className="text-white">Launch NFT of front man.</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 40 && "color1") || "text-white"
											}`}
										>
											40%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 50 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 50 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-location"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 50 && "color1") || "text-white"
												}`}
											>
												50%
											</h2>
											<div className="text-start text-lg-end ms-1">
												<h2 className="color1 fw600">GIFT 4 VIP NFT</h2>
												<p className="text-white">
													To the first 4 people who have 15 NFT of soldiers.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 50 && "color1") || "text-white"
											}`}
										>
											50%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 60 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 60 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-movie"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 60 && "color1") || "text-white"
												}`}
											>
												60%
											</h2>
											<div className="ms-1">
												<h2 className="color1 fw600">GIFT 1 NFT VIP</h2>
												<p className="text-white">
													To the first person with 10 NFT of players.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 60 && "color1") || "text-white"
											}`}
										>
											60%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 70 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 70 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-location"
									></div>

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 60 && "color1") || "text-white"
												}`}
											>
												60%
											</h2>
											<div className="text-start text-lg-end ms-1">
												<h2 className="color1 fw600">GIFT 1 NFT VIP</h2>
												<p className="text-white">
													The one with front man NFT.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 70 && "color1") || "text-white"
											}`}
										>
											70%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 80 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 80 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-movie"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 80 && "color1") || "text-white"
												}`}
											>
												80%
											</h2>
											<div className="ms-1">
												<h2 className="color1 fw600">
													FIRST PIGGY BANK DISTRIBUTION
												</h2>
												<p className="text-white">
													Drawing of 25 SOL among all persons owning a player
													NFT at the time of the draw.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 80 && "color1") || "text-white"
											}`}
										>
											80%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 90 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 90 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-location"
									></div>

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 90 && "color1") || "text-white"
												}`}
											>
												90%
											</h2>
											<div className="text-start text-lg-end ms-1">
												<h2 className="color1 fw600">
													SECOND PIGGY BANK DISTRIBUTION
												</h2>
												<p className="text-white">
													Drawing of 15 SOL among all persons owning a soldier
													NFT at the time of the drawing.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 90 && "color1") || "text-white"
											}`}
										>
											90%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}

								<div className="cd-timeline-block">
									<div
										style={{
											background: (percent >= 100 && "#eb4984") || "#fff",
											boxShadow:
												percent >= 100 &&
												"0 0 0 4px #eb4984, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)",
										}}
										className="cd-timeline-img cd-movie"
									></div>
									{/* <!-- cd-timeline-img --> */}

									<div className="cd-timeline-content">
										<div className="d-flex justify-content-start justify-content-lg-end w-100">
											<h2
												className={`d-block d-lg-none fw600 ${
													(percent >= 100 && "color1") || "text-white"
												}`}
											>
												100%
											</h2>
											<div className="ms-1">
												<h2 className="color1 fw600">
													THIRD PIGGY BANK DISTRIBUTION
												</h2>
												<p className="text-white">
													Drawing of 100 SOL among all persons owning a VIP NFT
													at the time of the draw.
												</p>
											</div>
										</div>
										<span
											className={`d-none d-lg-block cd-date fw600 ${
												(percent >= 100 && "color1") || "text-white"
											}`}
										>
											100%
										</span>
									</div>
									{/* <!-- cd-timeline-content --> */}
								</div>
								{/* <!-- cd-timeline-block --> */}
							</section>
							{/* <!-- cd-timeline --> */}
						</div>

						<div className="row">
							<div className="col-11 col-md-12 mx-auto">
								<div className="text-center mb-5 pb-1">
									<p className="f24 mb-2 text-white">
										Now what is going to happen in the Squid Game Collection ?
									</p>
									<h1 className="color1 f48 fw600">Crazy Surprises</h1>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Roadmap;
