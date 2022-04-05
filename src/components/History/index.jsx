// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import HistoryCard from "../HistoryCard";

// 3. CREATE A FUNCTION COMPONENT
const History = ({ submission }) => {
  const submissionList = submission.map((element, index) => {
    return (
      <div key={index}>
        <HistoryCard
          transactionType={element.transactionType}
          amount={element.amount}
        />
      </div>
    );
  });
  return (
    <div>
      <Typography variant="h5" style={{ textAlign: "center" }}>
        History
      </Typography>
      <hr />
      <br />
      {submissionList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { submission: state.submission };
};

// 4. EXPORT COMPONENT TO BE USED IN OTHER PARTS OF OUR APPLICATION
export default connect(mapStateToProps)(History);
