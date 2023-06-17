import { Address, ABI } from "./DAIWOO";
import detectEthereumProvider from "@metamask/detect-provider";
import Web3 from "web3";

let provider
let web3
let accounts
let contract

const bsc_testnet_chainId = '0x61'

const bsc_testnet_add = {
	method: 'wallet_addEthereumChain',
	params: [
		{
			chainId: '0x61',
			chainName: 'Binance Smart Chain Testnet',
			nativeCurrency: { name: 'BNB', symbol: 'bnb', decimals: 18 },
			rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545/'],
			blockExplorerUrls: ['https://testnet.bscscan.com/']
		}
	]
}

const bsc_testnet_change = {
	method: 'wallet_switchEthereumChain',
	params: [{ chainId: '0x61' }],
}
export const connectWallet = async () => {
	try {
		provider = await detectEthereumProvider();
		if (provider) {
			if (provider.isMetaMask) {
				console.log('MetaMask is installed!');
			}
			web3 = new Web3(window.ethereum);
			accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			localStorage.setItem("ethAccount", accounts[0])
			// contract = new web3.eth.Contract(ABI, Address);
			// setAccount(accounts[0]);
			// setWeb3(web3);
			// setContract(contract);
			return { account: accounts[0], web3: web3 }
		} else {
			console.log('Please install MetaMask!');
			return { account: null, web3: null }
		}
	} catch (err) {
		console.log(err)
		return { account: null, web3: null }
	}
};

const checkNetwork = async () => {
	const chainId = await window.ethereum.request({ method: 'eth_chainId' });
	if (chainId !== bsc_testnet_chainId) {
		try {
			await window.ethereum.request(bsc_testnet_add)
		}
		catch (err) {
			await window.ethereum.request(bsc_testnet_change)
		}
	}
}

export const getContractData = async (account) => {
	try {
		web3 = new Web3(window.ethereum);
		await checkNetwork()
		contract = new web3.eth.Contract(ABI, Address);
		const balanceOf = await contract.methods.balanceOf(account).call();
		const lastBuyBackPrice = await contract.methods.lastBuyBackPrice(account).call();
		const totalSupply = await contract.methods.totalSupply().call();
		return { balanceOf, lastBuyBackPrice, totalSupply }
	} catch (err) {
		console.log(err)
		return { balanceOf: null, lastBuyBackPrice: null, totalSupply: null }
	}
}

export const buyBack = async () => {
	await contract.methods.buyBack(accounts).send({ from: accounts });
}
