import React from "react";
import { Outlet } from "react-router-dom";
import { Earnings, Tabs } from "../components/index";

function Payment() {
  return (
    <div className="fullPage jobsPage">
      <div className="tabsSession">
        {/* group of tabs in the payments page */}
        <h3 className="heading">PAYMENT NAVIGATION</h3>
        <Tabs data={"INVOICE"} path={"invoice"} />
        <Tabs data={"MY BANK DETAILS"} path={"my-bank-detail"} />
      </div>

      <div className="display">
        {/* outlet for nested routes */}
        <Outlet />
      </div>
      
      <Earnings />
    </div>
  );
}

export default Payment;
