import React from "react";

// IMPORTING COMPONENTS
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Collection from "../../components/Collection";
import Cta from "../../components/Cta";
import Roadmap from "../../components/Roadmap";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import Sidebar from "../../components/Sidebar";
import { useHooks } from "../../Hooks/useHooks";

const Home = () => {
	const { isOpen, OnClick } = useHooks();

	return (
		<>
			<Sidebar ClickEvent={OnClick} isOpen={isOpen} />
			<Header ClickEvent={OnClick} isOpen={isOpen} />
			<Hero />
			<Collection />
			<Cta home rp />
			<Roadmap />
			<Cta home />
			<Team />
			<Footer />
		</>
	);
};

export default Home;
