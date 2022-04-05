export const balanceReducer = (existingBalance = [], action) => {
  switch (action.type) {
    case "ADD_TO_BALANCE":
      return [...existingBalance, action.payload];
    default:
      return existingBalance;
  }
};
