import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const RootLayout: React.FC = () => {
  return (
    <div className="max-h-screen bg-gray-100 dark:bg-gray-900 flex max-w-screen overflow-hidden transition-all">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>
      <div>
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
