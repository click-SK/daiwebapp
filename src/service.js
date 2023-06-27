import { Address, ABI } from "./DAIWOO";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";
import axios from "axios";
import BN from "bn.js";
import {
	ChainId,
	Token,
	Fetcher,
	Route,
	Trade,
	CurrencyAmount,
	TradeType,
	Percent,
} from "@pancakeswap/sdk";
import { Web3Provider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { AddressZero } from "@ethersproject/constants";
import { parseUnits } from "@ethersproject/units";
import { ethers } from "ethers";

let provider;
let web3;
let accounts;
let contract;

const bsc_testnet_chainId = "0x61";

const alchemyAPI =
	"https://eth-goerli.g.alchemy.com/v2/LYJU9HBYO1tM7LOuI35oqsD4Uc_j0X8_";

const bsc_testnet_add = {
	method: "wallet_addEthereumChain",
	params: [
		{
			chainId: "0x61",
			chainName: "Binance Smart Chain Testnet",
			nativeCurrency: { name: "BNB", symbol: "bnb", decimals: 18 },
			rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
			blockExplorerUrls: ["https://testnet.bscscan.com/"],
		},
	],
};

const bscscanAPIKey = "TQK1G5F2AEQ12EGZ6U6GRJC7WVR7KKQHY3";

const bsc_testnet_change = {
	method: "wallet_switchEthereumChain",
	params: [{ chainId: "0x61" }],
};

const ROUTER_ADDRESS = "0xD99D1c33F9fC3444f8101754aBC46c52416550D1"; // Testnet router address

export const connectWallet = async () => {
	try {
		provider = await detectEthereumProvider();
		if (provider) {
			if (provider.isMetaMask) {
				console.log("MetaMask is installed!");
			}
			web3 = new Web3(window.ethereum);
			accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			});
			localStorage.setItem("ethAccount", accounts[0]);
			return { account: accounts[0], web3: web3 };
		} else {
			console.log("Please install MetaMask!");
			return { account: null, web3: null };
		}
	} catch (err) {
		console.log(err);
		return { account: null, web3: null };
	}
};

const checkNetwork = async () => {
	const chainId = await window.ethereum.request({ method: "eth_chainId" });
	if (chainId !== bsc_testnet_chainId) {
		try {
			await window.ethereum.request(bsc_testnet_add);
		} catch (err) {
			await window.ethereum.request(bsc_testnet_change);
		}
	}
};

export const getContractData = async (account) => {
	try {
		web3 = new Web3(window.ethereum);
		await checkNetwork();
		contract = new web3.eth.Contract(ABI, Address);
		const balanceOf = await contract.methods.balanceOf(account).call();
		const lastBuyBackPrice = await contract.methods
			.lastBuyBackPrice(account)
			.call();
		const totalSupply = await contract.methods.totalSupply().call();
		return { balanceOf, lastBuyBackPrice, totalSupply };
	} catch (err) {
		console.log(err);
		return { balanceOf: null, lastBuyBackPrice: null, totalSupply: null };
	}
};

export const buyBack = async () => {
	await contract.methods.buyBack(accounts).send({ from: accounts });
};

export const estimateGas = async () => {
	const web3 = new Web3(window.ethereum);
	const contract = new web3.eth.Contract(ABI, Address);
	const accounts = await window.ethereum.request({
		method: "eth_requestAccounts",
	});

	const gasPrice = await web3.eth.getGasPrice();
	const estimatedGas = await contract.methods
		.transfer("0xEA54ee7226c4e2660d51aD5e2fB8740D857DEfc2", 100)
		.estimateGas({ from: accounts[0] });

	const totalGas = new BN(gasPrice).mul(new BN(estimatedGas));
	const gasInBNB = web3.utils.fromWei(totalGas.toString(), "ether");

	const response = await axios.get(
		"https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd"
	);
	const BNBToUsd = response.data.binancecoin.usd;
	const gasInUsd = BNBToUsd * gasInBNB;

	return gasInUsd;
};

export const getUserUSDTBalance = async (account) => {
	const erc20Abi = [
		// берём только то, что нам нужно
		{
			constant: true,
			inputs: [{ name: "_owner", type: "address" }],
			name: "balanceOf",
			outputs: [{ name: "balance", type: "uint256" }],
			type: "function",
		},
	];
	// Замените на адрес контракта USDT в Binance Smart Chain Testnet
	const usdtAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";

	const web3 = new Web3("https://data-seed-prebsc-1-s1.binance.org:8545/"); // URL Binance Smart Chain Testnet RPC
	const usdtContract = new web3.eth.Contract(erc20Abi, usdtAddress);

	const balance = await usdtContract.methods.balanceOf(account).call();
	const usdtBalance = web3.utils.fromWei(balance, "ether"); // Преобразуйте результат из wei в USDT

	console.log(`Balance of ${account}: ${usdtBalance} USDT`);

	return Number(usdtBalance);
};

const getBlockByNumber = async (blockNumber) => {
	const body = {
		id: 1,
		jsonrpc: "2.0",
		method: "eth_getBlockByNumber",
		params: [blockNumber, false], // false indicates that we don't need transaction details
	};

	const response = await axios.post(alchemyAPI, body);

	if (response.data.result) {
		const blockTimestamp = response.data.result.timestamp;
		return {
			timestamp: parseInt(blockTimestamp, 16), // convert hexadecimal to decimal
		};
	}

	throw new Error(
		`Failed to get block information for block number: ${blockNumber}`
	);
};

export const getTransactionHistory = async (address) => {
	const response = await axios.get(
		`https://api-testnet.bscscan.com/api
	?module=account
	&action=tokentx
	&contractaddress=${Address}
	&address=${address}
	&page=1
	&offset=5
	&sort=asc
	&apikey=${bscscanAPIKey}`
	);

	const transfers = response.data;

	const transfersHistory = transfers.result.map((el) => {
		return {
			type: el.from === address ? "Withdraw" : "Deposit",
			date: new Date(parseInt(el.timeStamp) * 1000),
			value: parseInt(Number(el.value) / 10 ** 18),
		};
	});

	return transfersHistory;
};

// export const swapTokens = async () => {
// 	// Запрашивает доступ к MetaMask
// 	if (window.ethereum) {
// 		await window.ethereum.enable();
// 	}

// 	// Используйте провайдер MetaMask
// 	// const provider = new Web3Provider(window.ethereum);
// 	// const provider = await detectEthereumProvider();
// 	const provider = new ethers.providers.JsonRpcProvider(
// 		"https://bsc-dataseed.binance.org/",
// 		{ name: "binance", chainId: 56 }
// 	);

// 	// Получить текущий аккаунт
// 	// const account = await provider.getSigner();
// 	const accounts = await window.ethereum.request({
// 		method: "eth_requestAccounts",
// 	});
// 	const account = accounts[0];

// 	// Токены, которые вы хотите обменять (в данном примере - BNB и BUSD)
// 	const usdt = new Token(
// 		ChainId.BSC_TESTNET,
// 		"0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
// 		18
// 	);
// 	const daiwoo = new Token(
// 		ChainId.BSC_TESTNET,
// 		"0x5BD33652e85DDe48e749e979bE0E03909cAEB1a0",
// 		18
// 	);

// 	// Получите информацию о паре токенов
// 	const pair = await Fetcher.fetchPairData(daiwoo, usdt, provider);

// 	console.log(pair);

// 	// Создайте маршрут
// 	const route = new Route([pair], daiwoo);

// 	// Создайте сделку
// 	const trade = new Trade(
// 		route,
// 		new CurrencyAmount(daiwoo, "1000000000000000000"),
// 		TradeType.EXACT_INPUT
// 	);

// 	console.log(trade.executionPrice.toSignificant(6));
// 	console.log(trade.nextMidPrice.toSignificant(6));

// 	// Router contract
// 	const router = new Contract(
// 		ROUTER_ADDRESS,
// 		[
// 			"function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)",
// 		],
// 		account
// 	);

// 	const amountIn = parseUnits("1", 18); // 1 BNB
// 	const amountOutMin = parseUnits("0", 18); // минимальное количество токенов для приема
// 	const path = [daiwoo.address, usdt.address];
// 	// const to = account.getAddress(); // адресс получателя
// 	const to = account
// 	const deadline = BigNumber.from(Math.floor(Date.now() / 1000) + 60 * 20); // 20 минут от текущего времени

// 	// Создайте транзакцию
// 	const tx = await router.swapExactTokensForTokens(
// 		amountIn,
// 		amountOutMin,
// 		path,
// 		to,
// 		deadline
// 	);
// 	console.log(`Transaction hash: ${tx.hash}`);

// 	// Ожидание подтверждения транзакции
// 	const receipt = await tx.wait();
// 	console.log(`Transaction was mined in block ${receipt.blockNumber}`);
// };

export const swapTokens = async () => {
	// Запрашивает доступ к MetaMask
	if (window.ethereum) {
	  await window.ethereum.enable();
	}

	// Используйте провайдер MetaMask
	const provider = new ethers.JsonRpcProvider(
	  "https://data-seed-prebsc-1-s1.binance.org:8545/"
	);

	// Получить текущий аккаунт
	const accounts = await window.ethereum.request({
	  method: "eth_requestAccounts",
	});
	const account = accounts[0];

	// Токены, которые вы хотите обменять (в данном примере - BNB и BUSD)
	const usdt = await Fetcher.fetchTokenData(
	  ChainId.BSC_TESTNET,
	  "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
	  provider
	);
	const daiwoo = await Fetcher.fetchTokenData(
	  ChainId.BSC_TESTNET,
	  "0x5BD33652e85DDe48e749e979bE0E03909cAEB1a0",
	  provider
	);

	// Получите информацию о паре токенов
	const pair = await Fetcher.fetchPairData(daiwoo, usdt, provider);

	console.log(pair);

	// Создайте маршрут
	const route = new Route([pair], daiwoo);

	// Создайте сделку
	const trade = new Trade(
	  route,
	  new CurrencyAmount(daiwoo, "1000000000000000000"),
	  TradeType.EXACT_INPUT
	);

	console.log(trade.executionPrice.toSignificant(6));
	console.log(trade.nextMidPrice.toSignificant(6));

	// Router contract
	const router = new Contract(
	  ROUTER_ADDRESS,
	  [
		"function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)",
	  ],
	  account
	);

	const amountIn = parseUnits("1", 18); // 1 BNB
	const amountOutMin = parseUnits("0", 18); // минимальное количество токенов для приема
	const path = [daiwoo.address, usdt.address];
	const to = account;
	const deadline = BigNumber.from(Math.floor(Date.now() / 1000) + 60 * 20); // 20 минут от текущего времени

	// Создайте транзакцию
	const tx = await router.swapExactTokensForTokens(
	  amountIn,
	  amountOutMin,
	  path,
	  to,
	  deadline
	);
	console.log(`Transaction hash: ${tx.hash}`);

	// Ожидание подтверждения транзакции
	const receipt = await tx.wait();
	console.log(`Transaction was mined in block ${receipt.blockNumber}`);
  };
