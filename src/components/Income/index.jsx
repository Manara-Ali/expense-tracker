// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORT
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import { AttachMoneyOutlined } from "@material-ui/icons";

// 3. CREATE A FUNCTION COMPONENT
const Income = ({ submission }) => {
  const incomeArr = submission.filter((element) => {
    return element.amount.startsWith("+");
  });

  const income = incomeArr
    .map((element) => {
      return parseFloat(element.amount);
    })
    .reduce((element, accumulator) => {
      return (accumulator += element);
    }, 0);
  return (
    <div style={{ marginRight: "-20px" }}>
      <Typography variant="h5">Income</Typography>
      <AttachMoneyOutlined fontSize="small"></AttachMoneyOutlined>
      <span style={{ fontSize: "1.25em" }}>{income}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { submission: state.submission };
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default connect(mapStateToProps, {})(Income);
