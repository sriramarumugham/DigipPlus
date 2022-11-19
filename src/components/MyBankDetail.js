import React from "react";
import "../styles/BankDetails.css";


// form to fill up the data
function MyBankDetail() {
  return (
    <form className="bankDetailsForm">
      <label for="account-number">Account Number</label>
      <input
        id="account-number"
        name="account-number"
        type="number"
        placeholder="Account Number"
      />
      <label for="bank-name">Bank Name</label>
      <input
        id="bank-name"
        name="bank-name"
        type="text"
        placeholder="Bank Name"
      />
      <label for="isfc-code">ISFC Code</label>
      <input
        id="isfc-code"
        name="isfc-code"
        type="number"
        placeholder="ISFC Code"
      />
      <label for="pan-number">PAN Number</label>
      <input
        id="pan-number"
        name="pan-number"
        type="number"
        placeholder="PAN Number"
      />
      <label for="state-name">State name</label>
      <input
        id="state-name"
        name="state-name"
        type="text"
        placeholder="State name"
      />
      <button
        className=".btn-grad "
        type="submit"
        onClick={(e) => e.preventDefault()}
      >
        SUBMIT
      </button>
    </form>
  );
}

export default MyBankDetail;
