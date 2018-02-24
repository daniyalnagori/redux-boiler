import React, { Component } from 'react';
import './index.css';

class Home extends Component {
    render() {
        return (
            <div className='container_fluid'>
                <div className="header">
                    <h2>Arbitrage-Trade</h2>
                    <div className="headbtn">
                        <button className="btn3">Dashboard</button>
                        <button className="btn3">Arbitrage</button>
                        <button className="btn3">Stream</button>
                        <button className="btn3">Setting</button>
                    </div>
                    <div className="headtext">
                        <p>BOT RUNNING</p>
                    </div>
                </div>
                <br /><br />
                <form>
                <h4><strong>Arbitrage opportunity</strong></h4><br />
                    <p> Bot Name:
                    <input className="input1" type="text" placeholder="Bot Name" size='8' />
                    </p>
                    <p>What makes to use : </p>
                    <button className="btn1">Gdax</button>
                    <button className="btn2">Kraken</button>
                    <button className="btn1">gemini</button>
                    <button className="btn1">Binance</button>
                    <button className="btn2">bitfinix</button>
                    <br /><br />
                    <p> What the Arbitrage trade to execute (After fee)
                        <input className="input1" type="text" placeholder="4%" size="1" />
                    </p>
                    <div className="calender">
                        <p>Run bot from
                        <input className="input3" type="date" />
                            To
                        <input className="input3" type="date" />
                            Every
                        <input className="input2" type="number" placeholder="1" />
                            Seconds</p>
                    </div>
                    <br />
                    <div className="footbtn">
                        <button className="btn4">Run Test</button>
                        <button className="btn4">Run Bot</button>
                    </div>
                </form>
                <h4>Live Data</h4>
                <table>
                    <tr>
                        <td className="tabledate">Date</td>
                        <td className="tablemax">MAX</td>
                        <td className="tablemax">MIN</td>
                        <td className="tablemax">delta</td>
                        <td className="tablemax">Opportunity</td>
                        <td className="tablemax">Opportunity with fee</td>
                        <td className="tablemax">PROFIT</td>
                    </tr>
                    <tr>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                        <td className="tabledata">Not Available</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;