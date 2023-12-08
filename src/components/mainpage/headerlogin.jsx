/* eslint-disable no-unused-vars */
import "./main.css";
import React, { useState } from "react";
import "./booknow.css";

function App() {
    const [booking, setBooking] = useState(false);
    const [signup, setsignup] = useState(false);

    const showbook = () => {
        setBooking(!booking)
    }
    const showsignup = () => {
        setsignup(!signup)
        setBooking(!booking)
    }
    const closeall = () => {
        setsignup(false)
        setBooking(false)
    }

    return (
        <>
            
            <div class="container">
                <a className="" href="/"><img className="icon" src="../src/assets/logo.png" /></a>
                <div class="mybutton2">

                    <button className="booknow" onClick={showbook}>
                    SIGN IN
                    </button>
                </div>
            </div>
            {booking && (<div className="modal">
                <div onClick={closeall} className="overlay"></div>
                <div className="modal-content" action="/booking" method="post">
                    <form><h1 className="bookhead">BOOKING</h1>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>username</div>
                        <div className="onecul">
                            <input className="onecul" type="text" />
                        </div>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>password</div>
                        <div className="onecul">
                            <input className="onecul" type="password" />
                        </div>
                        <input className="reserve-btn" type="submit" value="SIGN IN" />
                        <input onClick={showsignup} style={{ marginLeft: "10px", color: "black", backgroundColor: "#FFDE66" }} className="reserve-btn" type="button" value="SIGN UP" />
                    </form>
                </div>
            </div>)}
            {signup && (<div className="modal">
                <div onClick={closeall} className="overlay"></div>
                <div className="modal-content" action="/booking" method="post">
                    <form><h1 className="bookhead">BOOKING</h1>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>username</div>
                        <div className="onecul">
                            <input className="onecul" type="text" />
                        </div>
                        
                        <div ><div style={{ color: "#FFDE66", textAlign: "start" }}>Firstname&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;Lastname</div>
                            <input style={{ marginRight: "10px",width :"45%" }} type="text" />
                            <input style={{ marginLeft: "10px",width :"45%" }} type="text" />
                        </div>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>password</div>
                        <div className="onecul">
                            <input className="onecul" type="password" />
                        </div>
                        <div style={{ color: "#FFDE66", textAlign: "start" }}>confirm password</div>
                        <div className="onecul">
                            <input className="onecul" type="password" />
                        </div>
                        <input style={{ marginLeft: "10px", color: "black", backgroundColor: "#FFDE66" }} className="reserve-btn" type="submit" value="SIGN UP" />
                    </form>
                </div>
            </div>)}
        </>
    );
}
export default App;
