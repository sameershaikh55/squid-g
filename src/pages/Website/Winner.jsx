import React from "react";

// IMPORTING COMPONENTS
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WinnerNft from "../../components/WinnerNft";
import Cta from "../../components/Cta";
import Piggy from "../../components/Piggy";
import BossNft from "../../components/BossNft";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";

const Winner = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<WinnerNft />
			<Cta />
			<Piggy />
			<Cta />
			<BossNft />
			<Footer />
		</>
	);
};

export default Winner;
