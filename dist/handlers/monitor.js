"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Web3 = require('web3');
const contractABI = [{ "constant": true, "inputs": [], "name": "PERCENTS_DIVIDER", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserDownlineCount", "outputs": [{ "name": "referrals", "type": "uint256[5]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "referrer", "type": "address" }], "name": "invest", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserDividends", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserAvailable", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "started", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TIME_STEP", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferrer", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralTotalBonus", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "PROJECT_FEE", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "TOTAL_REF", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getSiteInfo", "outputs": [{ "name": "_totalInvested", "type": "uint256" }, { "name": "_totalBonus", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalInvested", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "REFERRAL_PERCENTS", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserInfo", "outputs": [{ "name": "totalDeposit", "type": "uint256" }, { "name": "totalWithdrawn", "type": "uint256" }, { "name": "totalReferrals", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getContractBalance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalDeposits", "outputs": [{ "name": "amount", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "commissionWallet", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "getPlanInfo", "outputs": [{ "name": "time", "type": "uint256" }, { "name": "percent", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserActionLength", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserAmountOfDeposits", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserDepositInfo", "outputs": [{ "name": "plan", "type": "uint8" }, { "name": "percent", "type": "uint256" }, { "name": "amount", "type": "uint256" }, { "name": "start", "type": "uint256" }, { "name": "finish", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }, { "name": "index", "type": "uint256" }], "name": "getUserActions", "outputs": [{ "name": "", "type": "uint8[]" }, { "name": "", "type": "uint256[]" }, { "name": "", "type": "uint256[]" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserCheckpoint", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "INVEST_MIN_AMOUNT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserReferralBonus", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalWithdrawn", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "userAddress", "type": "address" }], "name": "getUserTotalReferrals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [{ "name": "wallet", "type": "address" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "user", "type": "address" }], "name": "Newbie", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "plan", "type": "uint8" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "NewDeposit", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Withdrawn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "referrer", "type": "address" }, { "indexed": true, "name": "referral", "type": "address" }, { "indexed": true, "name": "level", "type": "uint256" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "RefBonus", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "user", "type": "address" }, { "indexed": false, "name": "totalAmount", "type": "uint256" }], "name": "FeePayed", "type": "event" }];
const contractAddress = "0xD7Cbf177054FDb5a77b0446209C8a83B71F8e58F";
let contractBalance = 0;
let contract;
let web3;
let privateKey = '';
let isProcessing = false;
function loadWeb3() {
    return __awaiter(this, void 0, void 0, function* () {
        web3 = yield new Web3('https://bsc-dataseed1.binance.org:443');
    });
}
function loadContract(contractABI, contractAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield new web3.eth.Contract(contractABI, contractAddress);
    });
}
function getCurrentAccount(privateKey) {
    return __awaiter(this, void 0, void 0, function* () {
        const account = yield web3.eth.accounts.privateKeyToAccount(privateKey);
        return account;
    });
}
function getUserAvailable(contract, account) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield contract.methods.getUserAvailable(account.address).call();
    });
}
function withdraw(contract, account) {
    return __awaiter(this, void 0, void 0, function* () {
        let withdraw = contract.methods.withdraw();
        let encodedABI = withdraw.encodeABI();
        console.log('trying to withdraw');
        contract.methods.withdraw().estimateGas({ from: account.address })
            .then(function (gasAmount) {
            let tx = {
                from: account.address,
                to: contractAddress,
                gas: gasAmount * 2,
                data: encodedABI
            };
            web3.eth.accounts.signTransaction(tx, privateKey).then((signed) => {
                let tran = web3.eth.sendSignedTransaction(signed.rawTransaction);
                tran.on('confirmation', (confirmationNumber, receipt) => {
                    console.log('confirmation: ' + confirmationNumber);
                });
                tran.on('transactionHash', (hash) => {
                    console.log('hash');
                    console.log(hash);
                });
                tran.on('receipt', (receipt) => {
                    console.log(receipt);
                    return (receipt);
                    isProcessing = false;
                });
                tran.on('error', console.error);
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    });
}
function handleMonitor(ctx, message) {
    const msgArray = message.split(' ');
    if (msgArray[0] === 'monitor') {
        privateKey = msgArray[1];
        ctx.reply('Started balance monitoring.');
        function checkAndWithdraw(contract, account) {
            return __awaiter(this, void 0, void 0, function* () {
                let amountToHarvest = yield getUserAvailable(contract, account);
                amountToHarvest = parseFloat(web3.utils.fromWei(amountToHarvest));
                contractBalance = yield contract.methods.getContractBalance().call();
                contractBalance = parseFloat(web3.utils.fromWei(contractBalance));
                //
                let mainWalletBalance = yield web3.eth.getBalance(account.address);
                mainWalletBalance = web3.utils.fromWei(mainWalletBalance);
                if (contractBalance > 0 && amountToHarvest > 0.006) {
                    const walletBalanceBeforeWithdraw = mainWalletBalance;
                    console.log('I should never see this twice');
                    ctx.reply(`The contract balance is: ${contractBalance}. Trying to withdraw. Your current wallet balance is ${walletBalanceBeforeWithdraw}`);
                    let withdrawResponse = yield withdraw(contract, account);
                    //Maybew commented below caused a bug
                    //let walletBalanceAfterWithdraw = await web3.eth.getBalance(account.address);
                    //walletBalanceAfterWithdraw = web3.utils.fromWei(mainWalletBalance);
                    // return ctx.reply(`Response is ${withdrawResponse}. Your current wallet balance is ${walletBalanceAfterWithdraw}`);
                    return ctx.reply(`Response is ${withdrawResponse}.`);
                }
                //If not going to withdraw
                isProcessing = false;
                return;
            });
        }
        function load() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('awaiting for web3');
                yield loadWeb3();
                console.log('loading contract');
                contract = yield loadContract(contractABI, contractAddress);
                //console.log(contract);
                console.log('getting user account');
                const account = yield getCurrentAccount(privateKey);
                console.log('getting user account balance');
                const mainWalletBalance = yield web3.eth.getBalance(account.address);
                console.log(web3.utils.fromWei(mainWalletBalance));
                console.log('getting contract balance!!');
                contractBalance = yield contract.methods.getContractBalance().call();
                //console.log(web3.utils.fromWei(contractBalance));
                setInterval(function () {
                    if (!isProcessing) {
                        isProcessing = true;
                        checkAndWithdraw(contract, account);
                    }
                }, 1500);
            });
        }
        load();
    }
}
exports.default = handleMonitor;
//# sourceMappingURL=monitor.js.map