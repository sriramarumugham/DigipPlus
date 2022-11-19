import React from "react";
import "../styles/Invoice.css";
function Invoice({ date, amount, project }) {
  return (
    <div className="invoiceWrapper">
      <p>Payment Date: {date} </p>
      <p>Amount Paid :{amount}</p>
      <p>Payment made for project</p>
      {project}
    </div>
  );
}

export default Invoice;
