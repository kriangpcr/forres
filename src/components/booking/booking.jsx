import "./booking.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from '../mainpage/header'

function App() {
	return (
		<>
			<Header />
			<div className="reserve">

				<table className="alltable">
					<tr>
						<td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
						<td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
						<td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
						<td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
						<td><img className="stage" src="src\assets\stage.png" /></td>
					</tr>
					
					<tr>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
							
						</td>
						<td colSpan={3} rowSpan={3} ><img className="kitchen" src="src\assets\kitchen.png" /></td>
						<td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
					</tr>
					<tr>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
						</td><td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
					</tr>
					<tr>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
						</td><td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
					</tr>
					<tr>
						<td>
						</td>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
						</td>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
						</td>
						<td>
							<img className="t4" src="src\assets\4ch.png" />
						</td>
						<td>
						</td>
					</tr>
				</table>
				<p style={{color:"#FFDE66"}}>&nbsp;&nbsp;Available&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Unavailable</p>
				<img className="t4" src="src\assets\available.png" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img className="t4" src="src\assets\unavailable.png" /><br />
				<input style={{margin:"30px"}} className="submit" type="submit" value="reserve" />
			</div>
		</>
	);
}
export default App;
