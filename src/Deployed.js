import React, { useState } from "react"

import GeprWebApp from "./Apps/GeprWebApp.js"
import GeprIosApp from "./Apps/GeprIosApp.js"
import VitalsIosApp from "./Apps/VitalsIosApp.js"

function Deployed() {

    const [showWebApp, setShowWebApp] = useState(false)
    const [showMobileApp, setShowMobileApp] = useState(false)
    const [showVitalsApp, setShowVitalsApp] = useState(false)

    function webAppToggle() {
        setShowWebApp(prevShowWebApp => !prevShowWebApp)
        setShowMobileApp(false)
        setShowVitalsApp(false)
    }

    function mobileAppToggle() {
        setShowMobileApp(prevShowMobileApp => !prevShowMobileApp)
        setShowWebApp(false)
        setShowVitalsApp(false)
    }

    function vitalsAppToggle() {
        setShowVitalsApp(prevShowVitalsApp => !prevShowVitalsApp)
        setShowWebApp(false)
        setShowMobileApp(false)
    }

    return (
        <div className="deployedDiv">
            <h1 className="deployedHeader">Deployed - Apps</h1>
            <div className="deployedButtonDiv">
                <button onClick={webAppToggle} style={{ backgroundColor: showWebApp ? "#FFFF00" : "coral" }}>
                    {"<GEPR Web App />"}
                </button>
                <button onClick={mobileAppToggle} style={{ backgroundColor: showMobileApp ? "#FFFF00" : "coral" }}>
                    {"<GEPR iOS App />"}
                </button>
                <button onClick={vitalsAppToggle} style={{ backgroundColor: showVitalsApp ? "#FFFF00" : "coral" }}>
                    {"<Vitals iOS App />"}
                </button>
            </div>
            <div style={{ display: showWebApp ? "block" : "none" }}>
                <GeprWebApp />
            </div>
            <div style={{ display: showMobileApp ? "block" : "none" }}>
                <GeprIosApp />
            </div>
            <div style={{ display: showVitalsApp ? "block" : "none" }}>
                <VitalsIosApp />
            </div>
        </div>
    )
}
export default Deployed