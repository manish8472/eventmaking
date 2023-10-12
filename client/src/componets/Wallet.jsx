import Web3 from "web3";
import { useNavigate } from "react-router-dom";
import ABI from './ABI.json'
import Navigation from "../pages/Navigation";
const Wallet = ({saveState}) => {
    const navigateTo = useNavigate()

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });

        const contractAddress = "0xa2e39bf05b0064bea8981f92930e0e10ffdc29c8";
        const contract = new web3.eth.Contract(ABI, contractAddress);
        console.log(contract)
        saveState({web3:web3, contract:contract, account:accounts[0]});

        navigateTo("/view-all-tasks")
      } else {
        throw Error;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   connectWallet();

  return (
    <div className="wallet_page">
      <div className="wallet_header">
        <span>WELCOME TO</span> <p>TODO 3.0</p>
      </div>
      <div className="connect_wallet_section todo_btn">
        <p> Please connect metamask wallet to access the app</p>
        <button onClick={connectWallet}>Connect Wallet</button>
      </div>
      
    </div>
  );
};

export default Wallet;
