import React from "react";
import { GoogleLogout } from "react-google-login";

const clientID = "518771907465-9mn91uss4quc2ha1p04v38h8s7jalh85.apps.googleusercontent.com";

function LogoutBtn() {
    const onSuccess = () => {
        alert("You are logged out");
    };

    return (
        <div>
            <GoogleLogout
                clientID={clientID}
                buttonText="Logout"
                onSuccess={onSuccess}
            
            />
        </div>
    )
}

export default LogoutBtn
