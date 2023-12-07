import "./main.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./booknow.css";

function App() {
    const [booking, setBooking] = useState(false);

    const showbook = () => {
        setBooking(!booking)
    }

    return (
        <>
            <div className="header">
                <div style={{marginLeft:"27%"}} className="logo-container">
                    <a href="/"><img
                        src="../src/assets/logo.png"
                        className="logo"
                    /></a>

                </div>
                <button className="user">User </button>
                <button className="book" onClick={showbook}>BOOK NOW </button>
            </div>
            {booking && (<div className="modal">
                <div onClick={showbook} className="overlay"></div>
                <div className="modal-content" action="/booking" method="post">
                    <form action="/booking"><h1 className="bookhead">BOOKING</h1>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>&ensp;&nbsp;DATE&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;TIME</div>

                        <div >
                            <input style={{ backgroundColor: "#FFDE66",width:"165px",borderRadius:"8px"}} type="date" />
                            <input style={{ backgroundColor: "#FFDE66", width:"165px",borderRadius:"8px" }} type="time" />
                        </div>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>&ensp;&nbsp;CARS&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;PEOPLE</div>

                        <div >
                            <input style={{ backgroundColor: "#FFDE66",borderRadius:"8px",width:"162px"}} type="text" />
                            <input style={{ backgroundColor: "#FFDE66",borderRadius:"8px",width:"162px"}} type="text" />
                        </div>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>&ensp;&nbsp;COURSE</div>

                        <div><select  style={{ width: "94.2%" ,backgroundColor: "#FFDE66",borderRadius:"8px"}} form="carform">
                            <option value="PREMIUM">PREMIUM COURSE</option>
                            <option value="ALASKA">ALASKA COURSE</option>
                            <option value="IZAKAYA">IZAKAYA  COURSE</option>
                            <option value="STIR">STIR COURSE</option>
                            <option value="DIM-SUM">DIM-SUM COURSE</option>
                            <option value="YAKINIKU">YAKINIKU COURSE</option>
                        </select>
                        </div>

                        <a href="/booking">  <input className="reserve-btn" type="submit" value="reserve" /></a>
                        </form>

                </div>
            </div>)}

        </>
    );
}
export default App;
