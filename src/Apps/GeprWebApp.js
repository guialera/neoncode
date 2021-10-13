import React from "react"

function GeprWebApp() {

    function changeColor(e) {
        e.target.style.background = "#FFFF00"
    }

    function changeColorOriginal(e) {
        e.target.style.background = "coral"
    }

    return (
        <div>
            <h1>General Election Presidential Results Web App</h1>
            <img
                class="geprWebImg"
                height="400px"
                width="600px"
                src="https://i.ibb.co/TmTXpyP/GEPR-App.jpg"
            />
            <br />
            <a href="https://gepr-app.herokuapp.com/" target="_blank">
                <button
                    className="geprWebAppButton"
                    onMouseOver={changeColor}
                    onMouseLeave={changeColorOriginal}
                >
                    Deployed Link
                </button>
            </a>
        </div>
    )
}

export default GeprWebApp