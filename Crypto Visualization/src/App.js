import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardSection from './components/CardSection';
import ChartSection from './components/ChartSection';
import Header from './components/Header';
import './App.css';
import './index.css';

// Example InfoPage component
const InfoPage = ({ onGetStarted }) => (
  <div style={{ textAlign: 'center', marginTop: '20vh', color: '#333333' }}>
    <h1>Explore the Crypto Landscape</h1>
    <p>Dive deeper into the ever-evolving world of cryptocurrency with our dynamic data visualizations.</p>
    <button onClick={onGetStarted} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', background: '#0d8a72', border: 'none', color: 'white' }}>
      Get Started
    </button>
  </div>
);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      id: "bitcoin",
      data: {}
    };
  }

  fetchData = async () => {
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/${this.state.id}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const jsonData = await response.json();
      this.setState({ data: jsonData });
    } catch (error) {
      console.error("Failed to fetch data", error);
    }
  }

  handleSubmit = async (event) => {
    const newId = event.target.value;
    if (newId !== this.state.id) {
      this.setState({ id: newId }, this.fetchData);
    }
  }

  componentDidMount() {
    this.fetchData();
    this.interval = setInterval(this.fetchData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  renderDashboard = () => {
    const { data } = this.state;
    const { market_data, sentiment_votes_up_percentage, community_data } = data;

    return (
      <div>
        <Header handle_Submit={this.handleSubmit} />
        <CardSection
          coinName={data.name}
          currentPrice={market_data?.current_price?.usd || ""}
          mCap24={market_data?.market_cap_change_percentage_24h || ""}
          ath={market_data?.ath?.usd || ""}
          atl={market_data?.atl?.usd || ""}
          sentiment={sentiment_votes_up_percentage}
          high24={market_data?.high_24h?.usd || ""}
          low24={market_data?.low_24h?.usd || ""}
        />
        <ChartSection
          Id={this.state.id}
          priceChange24={market_data?.price_change_24h_in_currency?.usd || ""}
          MarketCap={market_data?.market_cap?.usd || ""}
          TotVol={market_data?.total_volume?.usd || ""}
          Circulating={market_data?.circulating_supply || ""}
          twitterF={community_data?.twitter_followers || ""}
        />
      </div>
    );
  };

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<InfoPage onGetStarted={() => window.location.pathname = '/dashboard'} />} />
          <Route path="/dashboard" element={this.renderDashboard()} />
        </Routes>
      </Router>
    );
  }
}