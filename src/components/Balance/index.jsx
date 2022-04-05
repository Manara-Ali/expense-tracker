import "./../Balance/Balance.css";

// 1. IMPORT REACT
import React, { useRef, useEffect } from "react";

// 2. ADDITIONAL IMPORT
import { connect } from "react-redux";
import { AttachMoneyOutlined } from "@material-ui/icons";
import { balanceActionCreator } from "../../actionCreators";
import { Typography } from "@material-ui/core";

// 3. CREATE A FUNCTION COMPONENT
const Balance = ({ balance, submission }) => {
  const currentBalance = submission
    .map((element) => {
      return parseFloat(element.amount);
    })
    .reduce((element, accumulator) => {
      return (accumulator += element);
    }, 0);
  return (
    <div>
      <Typography variant="h4" className="current-balance">
        Current Balance
      </Typography>
      <h4 className="current-amount">
        <AttachMoneyOutlined fontSize="medium"></AttachMoneyOutlined>
        {currentBalance.toFixed(2)}
      </h4>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { balance: state.balance, submission: state.submission };
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default connect(mapStateToProps, {
  balanceActionCreator: balanceActionCreator,
})(Balance);
