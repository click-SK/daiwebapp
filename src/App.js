import { useState, useEffect } from "react";
import AboutUsPage from "./components/about_us_page/AboutUsPage";
import ContactsPage from "./components/contacts_page/ContactsPage";
import FAQPage from "./components/faq_page/FAQPage";
import ServicePage from "./components/service_page/ServicePage";
import MainPage from "./components/main_page/MainPage";
import Header from "./components/header/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./components/profile_page/Profile";
import Footer from "./components/Footer";
import AnimWave from "./components/wave/AnimWave";
import "./style/main.scss";
import Modal from "./components/modal/Modal";
import WalletPage from "./components/wallet_page/WalletPage";

function App() {
	const [show, setShow] = useState(false);
	const [account, setAccount] = useState(localStorage.getItem("ethAccount") || "");

	const showModal = () => {
		setShow(true);
		console.log("showModal");
	};

	const hideModal = () => {
		setShow(false);
		console.log("hideModal");
	};

	// useEffect(() => {
	// 	return localStorage.removeItem("ethAccount");
	// }, []);

	return (
		<div className="App">
			<div className="background">
				<AnimWave />
			</div>
			{/* <div className="main_page_background">
            <div className="main_spotlight_one"></div>
            <div className="main_spotlight_two"></div>
            <div className="main_spotlight_three"></div>

        </div> */}
			<Modal show={show} handleClose={hideModal} />
			<Header showModal={showModal} />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/about-us" element={<AboutUsPage />} />
				<Route path="/service" element={<ServicePage />} />
				<Route path="/faq" element={<FAQPage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route
					path="/profile"
					element={<Profile account={account} />}
				/>
				<Route
					path="/wallet"
					element={<WalletPage setAccount={setAccount} />}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
