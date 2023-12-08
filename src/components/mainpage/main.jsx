/* eslint-disable no-unused-vars */
import "./main.css";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./booknow.css";
import Header from './header'
import Headerlogin from './headerlogin'
function App() {

    return (
        <>
            <Headerlogin />
            <div className="containerpic">
                <img className="mainpic" src="src\assets\mainpic.jpg" />
                <div className="centered">FOR RES</div>
            </div>
            <hr />

            <div>
                <p className="abtus"> ABOUT US
                </p>
                <p className="abtus-">At Forres, we believe that dining is not merely  about sustenance its an art form, a celebration of </p>
                <p className="abtus-">flavors, a symphony of textures. Join us on this culinary adventure</p>
                <p className="abtus-">and let us redefine your perception of fine dining.</p>
                <p className="abtus--"> Cooking is a labor of love, a willingness to give of yourself and your time.</p>
            </div>
            <hr />
            <div className="course">
                <p className="abtus"> COURSE
                </p>
                <div className="flex-container">
                    <div><a href="/premium"><img src="src\assets\steak.png" alt="" /></a></div>
                    <div><a href="/alaska"><img src="src\assets\white.png" alt="" /></a></div>
                    <div><a href="/izakaya"><img src="src\assets\japan.png" alt="" /></a></div>
                    <div><a href="/stir"><img src="src\assets\frech.png" alt="" /></a></div>
                    <div><a href="/dimsum"><img src="src\assets\chinese.png" alt="" /></a></div>
                    <div><a href="/yakiniku"><img src="src\assets\brown.png" alt="" /></a></div>
                </div>
            </div>
        </>
    );  
}
export default App;
