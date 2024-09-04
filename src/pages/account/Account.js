import Signin from "./components/Signin";
import Signup from "./components/Signup";
import React, { useState } from "react";

function Account({ method = "signin", onClose }) {
    // State variables
    const [currentMethod, setCurrentMethod] = useState(method);

    // Styling
    const Account = "fixed z-50 top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50";
    const AccountWindow = "flex flex-col w-1/2 h-1/2 bg-black bg-opacity-25 backdrop-blur-lg border border-white rounded items-center justify-center gap-4 p 4";

    return (
        <div className={Account}>
            <div className={AccountWindow}>
                <div className="fixed flex flex-row top-2 left-2 justify-center items-center gap-2">
                    <button className="border-none bg-red-700 rounded-full p-2" onClick={onClose}>
                        
                    </button>
                </div>
                {currentMethod === "signin" ? <Signin setCurrentMethod={setCurrentMethod} /> : currentMethod === "signup" && <Signup setCurrentMethod={setCurrentMethod} />}
            </div>
        </div>
    );
}

export default Account;