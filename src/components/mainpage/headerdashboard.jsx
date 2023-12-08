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
            
            <div class="container">
                <a className="" href="/"><img className="icon" src="../src/assets/logo.png" /></a>
                <div class="mybutton2">

                    
                    <a className="name" href="/">DASHBOARD</a>
                </div>
            </div>
        </>
    );
}
export default App;
