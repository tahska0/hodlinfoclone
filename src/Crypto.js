import cryptoimg from "./images/cryptonews.png"
import "./Crypto.css"
import { useParams } from "react-router";
const Crypto = (props) => {
    
    return (
            <div className="crypto">
            <a href="">
            <img src={props.image} alt=""/>
            </a>
            </div>
      );
}
 
export default Crypto;