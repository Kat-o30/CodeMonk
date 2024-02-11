import React from "react";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from "./Home/Navbar/Navbar";
import Header from "./Home/Header/Header";
// import Services from "./Home/Services/Services";
import ChatBox from "./Home/ChatBox/ChatBox";

const End = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Header />
            {/* <Services /> */}
            <ChatBox />
        </div>
    )
}

export default End;