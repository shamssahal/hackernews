import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


import Home from "./components/Home";
import Post from "./components/Post";

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
                <Route exact path="/post/:postId" element={<Post/>} />
                
            </Routes>
        </Router>
    );
};




export default App;