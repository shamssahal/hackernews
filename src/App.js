import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from "./Components/Home";

const App = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/assets/js/app.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    );
};




export default App;