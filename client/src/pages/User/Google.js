import React, { Component } from "react";

class Google extends React.Component {

    insertGapiScript() {
        const script = document.createElement("script")
        script.src = "https://apis.google.com/js/platform.js"
        script.onload = () => {
            this.initializeGoogleSignIn()
        }
        document.body.appendChild(script)
    }

    initializeGoogleSignIn() {
        window.gapi.load("auth2", () => {
            window.gapi.auth2.init({
                client_id: "518771907465-9mn91uss4quc2ha1p04v38h8s7jalh85.apps.googleusercontent.com"
            })
            console.log("Api init")

            window.gapi.load("signin2", () => {
                const params = {
                    onSucess: () => {
                        console.log("User has finished signing in!")

                    }
                }
                window.gapi.signin2.render("loginButton", params)
            })
        })

    }
    componentDidMount() {
        console.log("Loading");

        this.insertGapiScript();

        window.gapi.load("auth2", () => {
            window.gapi.auth2.init({
                client_id: "518771907465-9mn91uss4quc2ha1p04v38h8s7jalh85.apps.googleusercontent.com"
            })
            console.log("Api init")

            window.gapi.load("signin2", () => {
                const params = {
                    onSucess: () => {
                        console.log("User has finished signing in!")

                    }
                }
                window.gapi.signin2.render("loginButton", params)
            })
        })

    }
}



return (
    <div className="App">
        <h1>Google Login Demo</h1>
        <div id="loginButton">Sign in with Google</div>
    </div>
)






export default Google;