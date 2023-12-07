import "./booking.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from '../mainpage/header'

function App() {
	return (
		<>
			<Header />
			{/* <div className="mainbody">

				<div className="stage">Stage</div>
				<div className="kitchen">Kitchen</div>
				<img style={{position:"absolute",left:"55vw",top:"10vh"}} src="src\assets\4ch.png" />
				<img style={{position:"absolute",left:"40vw",top:"10vh"}} src="src\assets\4ch.png" />
				<img style={{position:"absolute",left:"25vw",top:"10vh"}} src="src\assets\4ch.png" />
				<img style={{position:"absolute",left:"10vw",top:"10vh"}} src="src\assets\4ch.png" />
				<img style={{position:"absolute",left:"10vw",top:"40vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"10vw",top:"70vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"10vw",top:"100vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"10vw",top:"130vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"35vw",top:"130vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"60vw",top:"130vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"85vw",top:"130vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"85vw",top:"90vh"}} src="src\assets\6ch.png" />
				<img style={{position:"absolute",left:"85vw",top:"50vh"}} src="src\assets\4ch.png" />
				<img style={{position:"absolute",left:"38vw",top:"158vh"}} src="src\assets\available.png" />
				<div style={{position:"absolute",left:"43vw",top:"161vh",color:"white"}}>Available</div>
				<img style={{position:"absolute",left:"53vw",top:"158vh"}} src="src\assets\unavailable.png" />
				<div style={{position:"absolute",left:"58vw",top:"161vh",color:"white"}}>Unavailable</div>
				<button className="reserve" style={{position:"absolute",left:"45vw",top:"170vh"}}>reserve</button>
			</div> */}
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
					</tr>
					<tr>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
						</td>
					</tr>
					<tr>
						<td>
							<img className="t6" src="src\assets\6ch.png" />
						</td>
					</tr>


				</table>
				<input className="submit" type="submit" value="reserve" />
			</div>
		</>
	);
}
export default App;
