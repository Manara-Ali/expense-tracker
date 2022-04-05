// Create a reducer to handle form submission
export const handleFormSubmissionReducer = (
  existingSubmission = [],
  action
) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      return [...existingSubmission, action.payload];
    default:
      return existingSubmission;
  }
};
