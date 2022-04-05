// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import { handleTransactionTypeChange } from "../../actionCreators";
import { handleAmountChange } from "../../actionCreators";
import { handleSubmitActionCreator } from "./../../actionCreators";

// 3. CREATE FUNCTIONAL COMPONENT
const Transaction = ({
  transactionType,
  amount,
  handleTransactionTypeChange,
  handleAmountChange,
  handleSubmitActionCreator,
}) => {
  return (
    <div>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        Add new transaction
      </Typography>
      <hr />
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitActionCreator(transactionType, amount);
          handleTransactionTypeChange();
          handleAmountChange();
          return;
        }}
      >
        <div className="field">
          <label>Transaction Type</label>
          <input
            id="transaction-type"
            type="text"
            name="transaction-type"
            placeholder="Transaction Type"
            onChange={(e) => {
              return handleTransactionTypeChange(e);
            }}
            value={transactionType}
          />
        </div>
        <div className="field">
          <label>Amount (Positive +Income, Negative -Expense)</label>
          <input
            id="amount"
            type="text"
            name="Amount"
            placeholder="Amount"
            onChange={(e) => {
              return handleAmountChange(e);
            }}
            value={amount}
          />
        </div>
        <button
          className="ui button primary"
          type="submit"
          style={{ width: "100%" }}
          disabled={transactionType && amount ? false : true}
        >
          Submit
        </button>
        {transactionType && amount ? null : (
          <p style={{ textAlign: "center", marginTop: "0" }}>
            {"(Enter data before you can submit)"}
          </p>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return state;
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default connect(mapStateToProps, {
  handleTransactionTypeChange: handleTransactionTypeChange,
  handleAmountChange: handleAmountChange,
  handleSubmitActionCreator: handleSubmitActionCreator,
})(Transaction);
