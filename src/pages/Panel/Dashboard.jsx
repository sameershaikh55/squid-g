import React, { useEffect, useState } from "react";
import swal from "sweetalert";

// IMPORT FIREBASE
import { db } from "../../firebase/firebase";

// IMPORT COMPONENTS
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";

// IMPORT IMAGES
import logo from "../../assets/logo.svg";
import ring from "../../assets/ring.svg";

const Dashboard = ({ authState, setAuthState }) => {
	// NFT PIGGY
	const [percent, setPercent] = useState();

	// NFT PIGGY
	const [bossData, setBossData] = useState([]);

	// NFT PIGGY
	const [piggy, setPiggy] = useState([]);

	// NFT VIP
	const [post, setPost] = useState([]);

	// LOADER
	const [loader, setLoader] = useState();
	const [activeloader, setActiveLoader] = useState(false);

	// LOADER
	const [winnerData, setWinnerData] = useState([]);
	const [winner, setWinner] = useState();
	const [winnerSelect, setWinnerSelect] = useState();

	// VIP
	const [nftState, setNftState] = useState({
		vip1: "",
		vip2: "",
		vip3: "",
		vip4: "",
		vip5: "",
		vip6: "",
	});

	// PIGGY
	const [nftState2, setNftState2] = useState({
		solana1: "",
		solana2: "",
		solana3: "",
	});

	// 	BOSS NFT
	const [boss, setBoss] = useState();

	// 	ROADMAP
	const [roadmap, setRoadmap] = useState();

	// CHANGE VIP
	const handleChange1 = (e) => {
		const { name, value } = e.target;
		setNftState((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	// CHANGE VIP
	const winnerSelectFunc = () => {
		if (winnerSelect !== "") {
			db.collection("piggy-bank")
				.doc(winnerSelect)
				.set({
					solana: winner.trim(),
				})
				.then(() => {})
				.catch((error) => {
					alert(error.message);
				});
		} else {
			db.collection("boss-nft")
				.doc("boss-nft")
				.set({
					bossNft: winner.trim(),
				})
				.then(() => {
					setActiveLoader(false);
					setLoader("");
				})
				.catch((error) => {
					alert(error.message);
				});
		}
	};

	// CHANGE PIGGY
	const handleChange2 = (e) => {
		const { name, value } = e.target;
		setNftState2((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};

	// NFT WINNER
	const data = [
		{
			t: "VIP BEAR",
			n: "vip1",
		},
		{
			t: "VIP BUFFALO",
			n: "vip2",
		},
		{
			t: "VIP EAGLE",
			n: "vip3",
		},
		{
			t: "VIP LION",
			n: "vip4",
		},
		{
			t: "VIP TIGER",
			n: "vip5",
		},
		{
			t: "VIP DEEP",
			n: "vip6",
		},
	];

	// PIGGY BANK
	const data2 = [
		{
			t: "10 SOLANA",
			n: "solana1",
		},
		{
			t: "15 SOLANA",
			n: "solana2",
		},
		{
			t: "100 SOLANA",
			n: "solana3",
		},
	];

	// WINNER DATA
	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db
			.collection("generate-winner")
			.onSnapshot((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					getPostsFromFirebase.push({
						...doc.data(), //spread operator
						key: doc.id, // `id` given to us by Firebase
					});
				});
				setWinnerData(getPostsFromFirebase);
			});

		// return cleanup function
		return () => subscriber();
	}, [winnerData]); // empty dependencies array => useEffect only called once

	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db.collection("vipNft").onSnapshot((querySnapshot) => {
			querySnapshot.forEach((doc) => {
				getPostsFromFirebase.push({
					...doc.data(), //spread operator
					key: doc.id, // `id` given to us by Firebase
				});
			});
			setPost(getPostsFromFirebase);
		});

		// return cleanup function
		return () => subscriber();
	}, [post]); // empty dependencies array => useEffect only called once

	// RANDOM WINNER GENERATOR
	const generator = (data) => {
		var theRandomNumber;
		theRandomNumber = Math.floor(Math.random() * winnerData.length) + 0;
		setWinner(winnerData[theRandomNumber].w);
		setWinnerSelect();
	};
	// RANDOM WINNER GENERATOR

	// VIP NFT CLICK START
	const handleClick = (data) => {
		if (nftState[`${data}`] !== "") {
			setActiveLoader(true);

			db.collection("vipNft")
				.doc(data)
				.set({
					vip: nftState[`${data}`].trim(),
				})
				.then(() => {
					swal("", "Updated!", "success");
					setActiveLoader(false);
					setLoader("");
				})
				.catch((error) => {
					alert(error.message);
				});

			setNftState((prev) => {
				return {
					...prev,
					[data]: "",
				};
			});
		} else {
			swal("", "empty field!", "error");
		}
	};
	// VIP NFT CLICK END

	// PIGGY START
	const handleClick2 = (data) => {
		if (nftState2[`${data}`] !== "") {
			setActiveLoader(true);

			db.collection("piggy-bank")
				.doc(data)
				.set({
					solana: nftState2[`${data}`].trim(),
				})
				.then(() => {
					swal("", "Updated!", "success");
					setActiveLoader(false);
					setLoader("");
				})
				.catch((error) => {
					alert(error.message);
				});

			setNftState2((prev) => {
				return {
					...prev,
					[data]: "",
				};
			});
		} else {
			swal("", "empty field!", "error");
		}
	};
	// PIGGY END

	// FOR PERCENTAGE
	useEffect(() => {
		const getPostsFromFirebase = [];
		const subscriber = db
			.collection("piggy-bank")
			.onSnapshot((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					getPostsFromFirebase.push({
						...doc.data(), //spread operator
						key: doc.id, // `id` given to us by Firebase
					});
				});
				setPiggy(getPostsFromFirebase);
			});

		// return cleanup function
		return () => subscriber();
	}, [piggy]); // empty dependencies array => useEffect only called once

	// BOSS START
	const handleClick3 = () => {
		setLoader({
			t: "boss",
		});

		if (boss !== "") {
			setActiveLoader(true);

			db.collection("boss-nft")
				.doc("boss-nft")
				.set({
					bossNft: boss.trim(),
				})
				.then(() => {
					swal("", "Updated!", "success");
					setActiveLoader(false);
					setLoader("");
				})
				.catch((error) => {
					alert(error.message);
				});

			setBoss("");
		} else {
			swal("", "empty field!", "error");
		}
	};
	// BOSS END

	// ROADMAP START
	const handleClick4 = () => {
		setLoader({
			t: "roadmap",
		});

		if (roadmap !== "") {
			setActiveLoader(true);

			db.collection("roadmap")
				.doc("roadmap")
				.set({
					roadmap: roadmap.trim(),
				})
				.then(() => {
					swal("", "Updated!", "success");
					setActiveLoader(false);
					setLoader("");
				})
				.catch((error) => {
					alert(error.message);
				});

			setBoss("");
		} else {
			swal("", "empty field!", "error");
		}
	};
	// ROADMAP END

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
			setBossData(getPostsFromFirebase[0].bossNft);
		});

		// return cleanup function
		return () => subscriber();
	}, [boss]); // empty dependencies array => useEffect only called once

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
			{/* <!-- Modal --> */}
			<div
				className="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog">
					<div className="modal-content">
						<h5 className="text-center color1 my-3 w-100">Generate Winner</h5>
						<div className="modal-body">
							<div className="d-flex justify-content-center">
								<img src={ring} alt="" />
							</div>
							<h4 className="text-center mt-4 color1 fw600">Winner is:</h4>
							<p className="text-center text-white mb-4">{winner}</p>
							<button
								onClick={winnerSelectFunc}
								className="w-100 themeBtn"
								data-bs-dismiss="modal"
							>
								Select
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="panel_container">
				<div className="page_container">
					<div className="container-fluid">
						<div className="d-flex w-100 justify-content-between mt-5">
							<div>
								<img src={logo} alt="" />
							</div>
							<div>
								<button
									onClick={() => {
										localStorage.setItem("auth", 0);
										setAuthState(!authState);
									}}
									className="themeBtn px-5 f20"
								>
									log out
								</button>
							</div>
						</div>

						<h1 className="mt-5 text-center color1 fw600">NFT VIP Winners</h1>
						<div className="row gy-5 mt-1">
							{/* BODY START */}
							{data.map((prev, i) => {
								return (
									<div key={i} className="col-12 col-md-6 col-lg-4">
										<h4 className="text-center color3 f20">{prev.t}</h4>
										<input
											className="w-100 px-3 text-white overflow"
											type="text"
											name={prev.n}
											value={nftState[`${prev.n}`]}
											placeholder={
												(post.length === 1 && `loading`) ||
												(post.length > 1 && `${post[i].vip}`)
											}
											onChange={handleChange1}
										/>
										<button
											onClick={() => {
												handleClick(prev.n);
												setLoader({
													t: "vip",
													i: i,
												});
											}}
											className="w-100 themeBtn mt-2"
										>
											{(activeloader &&
												loader &&
												loader.t === "vip" &&
												loader.i == i && (
													<div className="w-25 mx-auto">
														<Loader />
													</div>
												)) ||
												"Publish"}
										</button>
									</div>
								);
							})}
							{/* BODY END */}
						</div>

						<h1 className="mt-5 text-center color1 fw600">Piggy Bank</h1>
						<div className="row gy-5 mt-1">
							{/* BODY START */}
							{data2.map((prev, i) => {
								return (
									<div key={i} className="col-12 col-md-6 col-lg-4">
										<h4 className="text-center color1 f20">{prev.t}</h4>
										<input
											className="w-100 px-3 text-white overflow"
											type="text"
											name={prev.n}
											value={nftState2[`${prev.n}`]}
											placeholder={
												(piggy.length === 1 && `loading`) ||
												(piggy.length > 1 && `${piggy[i].solana}`)
											}
											onChange={handleChange2}
										/>
										<button
											onClick={() => {
												generator();
												setWinnerSelect(piggy[i].key);
											}}
											className="w-100 themeBtn mt-2"
											data-bs-toggle="modal"
											data-bs-target="#exampleModal"
										>
											Generate winner
										</button>
										<button
											onClick={() => {
												handleClick2(prev.n);
												setLoader({
													t: "piggy",
													i: i,
												});
											}}
											className="w-100 themeBtn mt-2"
										>
											{(activeloader &&
												loader &&
												loader.t === "piggy" &&
												loader.i == i && (
													<div className="w-25 mx-auto">
														<Loader />
													</div>
												)) ||
												"Publish"}
										</button>
									</div>
								);
							})}
							{/* BODY END */}
						</div>

						<h1 className="mt-5 text-center color1 fw600">Boss NFT</h1>
						<div className="row gy-4 mt-1">
							{/* BODY START */}
							<div className="col-12 col-md-6 col-lg-4 mx-auto">
								<h4 className="text-center color3 mb-3 fw600 f20">Boss NFT</h4>
								<input
									className="w-100 px-3 text-white overflow"
									type="text"
									placeholder={(bossData.length && bossData) || ""}
									value={boss}
									onChange={(e) => setBoss(e.target.value)}
								/>
								<button
									onClick={() => {
										generator();
										setWinnerSelect("");
									}}
									className="w-100 themeBtn mt-2"
									data-bs-toggle="modal"
									data-bs-target="#exampleModal"
								>
									Generate winner
								</button>
								<button onClick={handleClick3} className="w-100 themeBtn mt-2">
									{(activeloader && loader.t === "boss" && boss !== "" && (
										<div className="w-25 mx-auto">
											<Loader />
										</div>
									)) ||
										"Publish"}
								</button>
							</div>
							{/* BODY END */}
						</div>

						<h1 className="mt-5 text-center color1 fw600">Roadmap</h1>
						<div className="row gy-4 mt-1">
							{/* BODY START */}
							<div className="col-12 col-md-6 col-lg-4 mx-auto">
								<p className="text-center text-white">
									The status of the roadmap is now
								</p>
								<input
									className="w-100 px-3 text-white overflow"
									type="number"
									placeholder={percent || ""}
									value={roadmap}
									onChange={(e) => setRoadmap(e.target.value)}
								/>
								<button onClick={handleClick4} className="w-100 themeBtn mt-2">
									{(activeloader &&
										loader.t === "roadmap" &&
										roadmap !== "" && (
											<div className="w-25 mx-auto">
												<Loader />
											</div>
										)) ||
										"Publish"}
								</button>
							</div>
							{/* BODY END */}
						</div>
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<Footer />
			</div>
		</>
	);
};

export default Dashboard;
