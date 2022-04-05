// Define our different action creators
export const balanceActionCreator = () => {
  return {
    type: "ADD_TO_BALANCE",
    payload: 0,
  };
};

// Create an action creator to handle the transaction type
export const handleTransactionTypeChange = (e) => {
  return {
    type: "NEW_TRANSACTION",
    payload: e ? e.target.value : "",
  };
};

// Create an action creator to handle the amount type
export const handleAmountChange = (e) => {
  return {
    type: "AMOUNT_CHANGE",
    payload: e ? e.target.value : "",
  };
};

// Create and action creator to handle form submission
export const handleSubmitActionCreator = (transactionType, amount) => {
  return {
    type: "SUBMIT_FORM",
    payload: {
      transactionType: transactionType,
      amount: amount,
    },
  };
};
