import "./../HistoryCard/HistoryCard.css";

// 1. IMPORT REACT
import React from "react";

// 2. ADDITIONAL IMPORTS
import { Typography } from "@material-ui/core";

// 3. CREATE A FUNCTION COMPONENT
const HistoryCard = (props) => {
  return (
    <div>
      {props.transactionType ? (
        <div className="card">
          <Typography variant="h5">{props.transactionType}</Typography>
          <Typography variant="h5">{props.amount}</Typography>
        </div>
      ) : null}
    </div>
  );
};

// 4. EXPORT COMPONENT
export default HistoryCard;
