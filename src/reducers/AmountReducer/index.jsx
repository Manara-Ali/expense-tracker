// Create a reduce to handle amount change
export const handleAmountChangeReducer = (existingAmount = "", action) => {
  switch (action.type) {
    case "AMOUNT_CHANGE":
      return action.payload;
    default:
      return existingAmount;
  }
};
