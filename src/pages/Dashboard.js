import React from "react";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import Home from "../components/Home";
import HeaderMain from "../components/HeaderMain";
import NavBar from "../components/NavBar";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <main class="main">
        <NavBar/>
        {/* <HeaderMain /> */}
        <Home/> 
        <Footer/>
      </main>
    </div>
  );
};

export default Dashboard;
