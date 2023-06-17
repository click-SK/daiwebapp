import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import { connectWallet } from "../../service";
import "../../style/wallet.scss"

const WalletPage = ({ setAccount }) => {
	const [activeWallet, setActiveWallet] = useState("")

	const navigate = useNavigate()

	const wallets = [
		{
			img: <img src="/img/metamask.svg" alt="metamask" />,
			title: "Metamask"
		},
		{
			img: <img src="/img/trust_wallet.svg" alt="trust wallet" />,
			title: "Trust wallet"
		}
	]

	const connect = async () => {
		const result = await connectWallet()
		setAccount(result.account)
		navigate("/profile")
	}

	return (
		<div className="wallet-page">
			<div className="wallet-page-container">
				<p className="card-title">Підключення гаманця</p>
				<p className="card-subtitle">Оберіть доступні гаманці</p>
				<div className="wallets-container">
					{wallets.map((wallet) => (
						<div className={`wallets-container-item ${activeWallet === wallet.title ? "active" : ""}`} onClick={() => { wallet.title === activeWallet ? setActiveWallet("") : setActiveWallet(wallet.title) }}>
							<span className="wallets-container-item-img">
								{wallet.img}
							</span>
							<span className="wallets-container-item-title">
								{wallet.title}
							</span>
						</div>
					))}
				</div>
				<p className="card-helper">Підключаючи гаманець Ви <br />погоджуєтесь з <span className="card-helper-purple">Правилами</span> та ...</p>
				<button className="exchange_btn" onClick={connect}>Пiдтвердити</button>
			</div>
		</div>
	)
}

export default WalletPage
