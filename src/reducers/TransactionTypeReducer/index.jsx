// Create a reducer to handle the transaction type action creator
export const handleTransactionTypeChangeReducer = (
  existingValue = "",
  action
) => {
  switch (action.type) {
    case "NEW_TRANSACTION":
      return action.payload;
    default:
      return existingValue;
  }
};
