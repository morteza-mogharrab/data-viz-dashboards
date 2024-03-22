import React, { Component } from 'react';

export class CardSection extends Component {
    render() {
        return (
            <div>
                <div className="fs-1 fw-bold m-3 text-Capitalize"
                    style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md',
                        marginTop: '3px !important',
                        marginBottom: '0px !important',
                        color: '#0D6EFD' // Shade of blue for the coin name
                    }}>
                    {this.props.coinName}
                </div>

                <section className="row m-3 mb-0" style={{ marginTop: '2px !important' }}>
                    <div className="card text-dark text-center m-3"
                        style={{ width: "11rem", backgroundColor: "#FFFFFF", borderColor: "#DEE2E6", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: '#6C757D' }}>Market Cap 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#212529" }}>
                                {this.props.mCap24} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-dark text-center m-3"
                        style={{ width: "11rem", backgroundColor: "#FFFFFF", borderColor: "#DEE2E6", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: '#6C757D' }}>All Time High</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#212529" }}>
                                ${this.props.ath}
                            </p>
                        </div>
                    </div>
                    <div className="card text-dark text-center m-3"
                        style={{ width: "11rem", backgroundColor: "#FFFFFF", borderColor: "#DEE2E6", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: '#6C757D' }}>All Time Low</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#212529" }}>
                                ${this.props.atl}
                            </p>
                        </div>
                    </div>
                    <div className="card text-dark text-center m-3"
                        style={{ width: "11rem", backgroundColor: "#FFFFFF", borderColor: "#DEE2E6", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: '#6C757D' }}>Positive Sentiments</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#212529" }}>
                                {this.props.sentiment} %
                            </p>
                        </div>
                    </div>
                    <div className="card text-dark text-center m-3"
                        style={{ width: "11rem", backgroundColor: "#FFFFFF", borderColor: "#DEE2E6", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: '#6C757D' }}>High 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#0D6EFD" }}>
                                ${this.props.high24}
                            </p>
                        </div>
                    </div>
                    <div className="card text-dark text-center m-3"
                        style={{ width: "11rem", backgroundColor: "#FFFFFF", borderColor: "#DEE2E6", marginTop: "0px !important" }}>
                        <div className="card-body">
                            <h6 className="card-title" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', color: '#6C757D' }}>Low 24Hrs</h6>
                            <p className="card-text fw-bold fs-5" style={{ color: "#DC3545" }}>
                                ${this.props.low24}
                            </p>
                        </div>
                    </div>
                </section>

                <div className="text-dark text-center" style={{ fontFamily: 'NHaasGroteskDSPro-65Md', marginTop: '1%' }}>
                    <div className="font-weight-bold" style={{ fontSize: '1.25rem' }}>
                        Current Price
                    </div>
                    <div className="display-1" style={{ color: '#212529' }}>
                        ${this.props.currentPrice}
                    </div>
                </div>
            </div>
        );
    }
}

export default CardSection;