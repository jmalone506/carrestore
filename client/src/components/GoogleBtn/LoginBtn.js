import React from "react";
import { GoogleLogin } from "react-google-login";

const clientID = "518771907465-9mn91uss4quc2ha1p04v38h8s7jalh85.apps.googleusercontent.com";

function LoginBtn() {
    const onSuccess = (res) => {
        console.log("[Login Success] currentUser:", res.profileObj);
    };

    const onFailure = (res) => {
        console.log("[Login Failed] res:", res);
    };

    
    return (
        <div>
          <GoogleLogin
          clientID={clientID}
          buttonText="Login"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          style={{marginTop: "100px"}}
          isSignedIn={true}
          />  
        </div>
    )
}

export default LoginBtn
