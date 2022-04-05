// IMPORT COMBINE REDUCER METHOD
import { combineReducers } from "redux";

// IMPORT ALL OF OUR REDUCERS
import { balanceReducer } from "./balanceReducer";
import { handleTransactionTypeChangeReducer } from "./TransactionTypeReducer";
import { handleAmountChangeReducer } from "./AmountReducer";
import { handleFormSubmissionReducer } from "./SubmitReducer";

// Create our reducers
const ourReducers = combineReducers({
  balance: balanceReducer,
  transactionType: handleTransactionTypeChangeReducer,
  amount: handleAmountChangeReducer,
  submission: handleFormSubmissionReducer,
});

// EXPORT OUR REDUCERS
export default ourReducers;
