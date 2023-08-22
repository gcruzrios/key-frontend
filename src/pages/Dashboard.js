import React from "react";
import Sidebar from "../components/Sidebar";

import Footer from "../components/Footer";
import Home from "../components/Home";
import HeaderMain from "../components/HeaderMain";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <main class="main">
        <HeaderMain />
        <Home/> 
        <Footer/>
      </main>
    </div>
  );
};

export default Dashboard;
