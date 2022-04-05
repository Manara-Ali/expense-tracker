// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { AttachMoneyOutlined } from "@material-ui/icons";

// 3. CREATE A FUNCTION COMPONENT
const Expenses = ({ submission }) => {
  const expenseArr = submission.filter((element) => {
    return element.amount.startsWith("-");
  });

  const expenses = -expenseArr
    .map((element) => {
      return parseFloat(element.amount);
    })
    .reduce((element, accumulator) => {
      return (accumulator += element);
    }, 0);
  return (
    <div
      className="expenses"
      style={{ borderLeft: "1px solid green", paddingLeft: "20px" }}
    >
      <Typography variant="h5">Expenses</Typography>
      <AttachMoneyOutlined fontSize="small"></AttachMoneyOutlined>
      <span style={{ fontSize: "1.25em" }}>{expenses}</span>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { submission: state.submission };
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default connect(mapStateToProps, {})(Expenses);
