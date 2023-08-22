import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <main class="main">
        <Header />
        <Home/>
        <Footer/>
      </main>
    </div>
  );
};

export default Dashboard;
