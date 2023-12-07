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
                <div style={{marginLeft:"16%"}} className="logo-container">
                    <a href="/"><img
                        src="../src/assets/logo.png"
                        className="logo"
                    /></a>

                </div>
                <button className="user">STAFF </button>
            </div>
           
        </>
    );
}
export default App;
