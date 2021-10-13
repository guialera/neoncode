import React, { useState } from "react"

import Welcome from "./Welcome.js"
import About from "./About.js"
import Deployed from "./Deployed.js"


function MainComponent() {

    const [showWelcome, setShowWelcome] = useState(true)
    const [showAbout, setShowAbout] = useState(false)
    const [showDeployed, setShowDeployed] = useState(false)

    function aboutToggle() {
        setShowAbout(prevShowAbout => !prevShowAbout)
        setShowWelcome(false)
        setShowDeployed(false)
    }

    function deployedToggle() {
        setShowDeployed(prevShowDeployed => !prevShowDeployed)
        setShowWelcome(false)
        setShowAbout(false)
    }

    return (
        <div>
            <h1 className="mainTitle">neonCode</h1>
            <div style={{ display: showWelcome ? "block" : "none" }}>
                <Welcome />
            </div>
            <div className="buttonDiv">
                <button onClick={aboutToggle} style={{ backgroundColor: showAbout ? "#FFFF00" : "coral" }}>
                    {"<About />"}
                </button>
                <button onClick={deployedToggle} style={{ backgroundColor: showDeployed ? "#FFFF00" : "coral" }}>
                    {"<Deployed />"}
                </button>
            </div>
            <div style={{ display: showAbout ? "block" : "none" }}>
                <About />
            </div>
            <div style={{ display: showDeployed ? "block" : "none" }}>
                <Deployed />
            </div>
        </div>
    )
}

export default MainComponent