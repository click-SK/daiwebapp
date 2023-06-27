import React, { useState, useEffect } from "react";
import "../../style/profile.scss";
import Transaction from "./Transaction";
import { Link } from "react-router-dom";
import { getTransactionHistory } from "../../service";

const TransactionHistory = ({ address }) => {
	const ukrainian_months = [
		"Січень",
		"Лютий",
		"Березень",
		"Квітень",
		"Травень",
		"Червень",
		"Липень",
		"Серпень",
		"Вересень",
		"Жовтень",
		"Листопад",
		"Грудень",
	];
	const [arr, setArr] = useState([
		{
			img: "/icons/icon_deposit.svg",
			title: "Депозит",
			date: "Квітень 25.22",
			sum: "+$874",
		},
		{
			img: "/icons/icon_withdrawal.svg",
			title: "Виведення",
			date: "Квітень 25.22",
			sum: "-$2490",
		},
		{
			img: "/icons/icon_deposit.svg",
			title: "Депозит",
			date: "Квітень 25.22",
			sum: "+$874",
		},
	]);

	const getHistory = async () => {
		const history = await getTransactionHistory(address);
		const hist = history.map((el) => {
			return {
				img:
					el.type === "Deposit"
						? "/icons/icon_deposit.svg"
						: "/icons/icon_withdrawal.svg",
				title: el.type === "Deposit" ? "Депозит" : "Виведення",
				date: `${
					ukrainian_months[el.date.getMonth()]
				} ${el.date.getDate()}.${String(el.date.getFullYear()).slice(
					2
				)}`,
				// sum: `${el.type === "Deposit" ? "+" : "-"}$${el.value}`,
				sum: `${el.type === "Deposit" ? "+" : "-"}${el.value}`,
			};
		});
		// setArr(history);
		setArr(hist.reverse())
		// console.log("history", hist);
	};

	useEffect(() => {
		if (address) {
			getHistory();
		}
	}, [address]);

	console.log(arr);

	return (
		<div className="TransactionHistory">
			<div className="transaction_history">
				<div className="desk_title">Історія транзакцій:</div>
				{arr.map((item, index) => (
					<Transaction
						key={index}
						img={item.img}
						title={item.title}
						date={item.date}
						sum={item.sum}
					/>
				))}

				<div className="show_more">
					<Link className="btn_show_more">Дізнатись більше</Link>
					<img src="/icons/icon_arrow-forward.svg" alt="arrow" />
				</div>
			</div>
		</div>
	);
};

export default TransactionHistory;
