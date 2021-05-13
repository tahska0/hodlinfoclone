import logo from "./logo.svg";
import "./index.css";
import Navbar from "./Navbar";
import Price from "./Price";
import Crypto from "./Crypto"
import cryptoimg from "./images/cryptonews.png"
import banner from "./images/banner.png"
import Table from "./Table";
import Footer from "./Footer";


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <Price/>
      <Crypto image={cryptoimg}/>
      <Table/>
      <Crypto image={banner}/>
      <Footer/>

    </div>
  );
}

export default App;
