const AddressReducerFunction = (state, { type, payload }) => {
  switch (type) {
    case "ADD_ADDRESS":
      return [payload,...state];
    default:
      return state;
  }
};

export { AddressReducerFunction };
