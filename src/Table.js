import "./Table.css"
const Table = () => {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Platform</th>
                        <th>Last Traded Price</th>
                        <th>Buy / Sell Price</th>
                        <th>Difference</th>
                        <th>Savings</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>WazirX</td>
                        <td>&#8377;40,50,000</td>
                        <td>&#8377; 40,39,272 / &#8377;40,40,000</td>
                        <td>5.85%</td>
                        <td>&#8377;2,23,713</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bitbns</td>
                        <td>&#8377;40,59,901</td>
                        <td>&#8377; 40,43,330 / &#8377;40,55,975</td>
                        <td>6.11%</td>
                        <td>&#8377;2,33,614</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Giotus</td>
                        <td>&#8377;40,00,220</td>
                        <td>&#8377; 40,07,999  / &#8377;40,98,000</td>
                        <td>4.55%</td>
                        <td>&#8377;1,73,933</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Colodax</td>
                        <td>&#8377;25,83,138</td>
                        <td>&#8377; 25,75,167 / &#8377;26,08,984</td>
                        <td className='red'>-32.49%</td>
                        <td className='red'>&#8377;12,43,148</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Zebpay</td>
                        <td>&#8377;40,99,999</td>
                        <td>&#8377; 40,99,999 / &#8377;40,79,000</td>
                        <td>7.15%</td>
                        <td>&#8377;2,73,712</td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>CoinDCX</td>
                        <td>&#8377;41,64,463</td>
                        <td >&#8377; 41,59,581  / &#8377;41,64,831</td>
                        <td >8.84%</td>
                        <td>&#8377;3,38,176</td>
                    </tr>
                </tbody>
            </table>
        </div>
      );
}
 
export default Table;