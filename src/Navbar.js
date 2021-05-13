import { useState } from "react";
import telegram from "./images/telegram.png"
import logo from "./images/logo.png"
import "./Navbar.css"

const Navbar = () => {
  const [curr, setCurr] = useState("INR");
  const [coins, setCoins] = useState("BTC");
  const arr = ["BTC","ETH","USDT","XRP","TRX","DASH","ZEC","XEM","IOST","WIN","BTT","WRX"];
  return (
   <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo"/>
        <p>Powered By <span>Finstreet</span></p>
      </div>
      <div className="currency">
        
      <select value={curr} onChange={(e) => {setCurr(e.target.value); }}>
          <option value="INR">INR</option>
        </select>
        <select value={coins} onChange={(e) => {setCoins(e.target.value);}}>
          {arr.map((ob) => (
            <option value={ob}>{ob}</option>
            ))}
        </select>
        <button>{"Buy "+coins}</button>
      </div>
      <div className="telegram">
        <div className="timer">60</div>
          <a href="" className="tele">
            <img src={telegram}/>
            <span>Connect Telegram</span>
          </a>
          <div class="slider">Slider</div>
        </div>
   </div>
  );
};

export default Navbar;
