import './Price.css';
const Price = () => {
    return (
        <div className="price">
            <div className="minutes">
                <div className="percent">0.41 %</div>
                <div className="time">5 Mins</div>
            </div>

            <div className="hour">
            <div className="percent">1.24 %</div>
            <div className="time">1 Hour</div>
            </div>

            <div className="rate">
                <div className="best_price">Best Price to Trade</div>
                <div className="rupees">&#8377; 38,26,286</div>
                <div className="time">Average BTC/INR net price including commission</div>
            </div>

            <div className="day">
            <div className="percent">4.15 %</div>
            <div className="time">1 Hour</div>
            </div>

            <div className="days">
            <div className="percent">11.75 %</div>
            <div className="time">7 Days</div>
            </div>
        </div>
      );
}
 
export default Price;