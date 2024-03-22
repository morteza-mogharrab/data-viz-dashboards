import React, { Component } from 'react';

class Header extends Component {
  render() {
    const navbarStyle = {
      backgroundColor: "#FFFFFF",
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    };

    const brandStyle = {
      fontFamily: 'NHaasGroteskDSPro-65Md',
      color: '#212529',
      textDecoration: 'none',
      fontSize: '2rem',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    };

    const selectStyle = {
      width: "auto",
      backgroundColor: "#ffffff",
      color: '#212529',
      border: '2px solid #dee2e6'
    };

    return (
      <header>
        <nav className="navbar navbar-expand-lg" style={navbarStyle}>
          <div className="container-fluid">
            <a className="navbar-brand" href="/" style={brandStyle}>
              Digital Currency Visualization Platform
            </a>
            <select className="form-select form-select-lg" aria-label="Select Coin" name="selectCoin"
              style={selectStyle} onChange={this.props.handle_Submit}>
              <option value="bitcoin">Select Coin</option>
              <option value="avalanche-2">Avalanche (AVAX)</option>
              <option value="binancecoin">Binance (BNB)</option>
              <option value="bitcoin">Bitcoin (BTC)</option>
              <option value="cardano">Cardano (ADA)</option>
              <option value="decentraland">Decentraland (MANA)</option>
              <option value="dogecoin">Dogecoin (DOGE)</option>
              <option value="ethereum">Ethereum (ETH)</option>
              <option value="ripple">Ripple (XRP)</option>
              <option value="solana">Solana (SOL)</option>
              <option value="tether">Tether (USDT)</option>
            </select>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
