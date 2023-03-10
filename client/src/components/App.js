import React, { Component } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

class App extends Component {
    state = { walletInfo: {} };

    componentDidMount()
    {
        fetch(`${document.location.origin}/api/wallet-info`).then(response => response.json()).then(json => this.setState({ walletInfo: json }));
    }

    render() {
        const { address, balance } = this.state.walletInfo;
        return (
            <div className='App'>
                <img className= 'logo' src={logo}></img>
                <br />
               <div>
                KP-CHAIN STAY HIGH
               </div>
               <br></br>
               <div id="Rahul">
                Developed By Rahul
               </div>
               <br />
               <div><Link to='/blocks'>Blocks</Link></div>
               <br />
               <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
               <br />
               <div><Link to='/transaction-pool'>Transaction Pool</Link></div>
               <br />
               <div className='WalletInfo'>
               <div>Address: {address}</div>
               <br></br>
               <div>Balance: {balance}</div>
               </div>
            </div>
        );
    }
}

export default App;