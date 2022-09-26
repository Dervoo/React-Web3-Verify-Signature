import "./navigationBar.css";
import { Link  } from "react-router-dom";
import Web3Modal from "web3modal";
import {ethers} from "ethers";

export const NavigationBar = (props) => {
    const login = async() => {
        try {
            const web3Modal = new Web3Modal();
            const instance = await web3Modal.connect();
            const provider = new ethers.providers.Web3Provider(instance);
            if (provider) {
              props.changeGlobalProvider(provider);
            }
        } catch (e) {
            console.log(e);
        }
    }


    return (
        <header>
            <Link to="/" className="logo">
                Demo template
            </Link>
            <div className="header-right">
                {props.globalProviderProps ? (
                    <a>Logged: {props.globalProviderProps.provider.selectedAddress.slice(0,7)}</a>
                ) : (
                    <button onClick={() => login()}>Connect</button>
                )}
            </div>
        </header>
    );
};
