import React from "react"

import About from "./About.js"
import Deployed from "./Deployed.js"


function MainComponent(){
    return(
        <div>
            <h1 className="mainTitle">neonCode</h1>
            <About />
            <Deployed />
        </div>
    )
}

export default MainComponent