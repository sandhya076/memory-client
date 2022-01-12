
const reducers = (memorie = [], action) => {
  switch (action.type) {
    case "DELETE":
      return memorie.filter((memorie) => memorie._id !== action.payload);
    case "UPDATE":
      return memorie.map((memorie) =>
        memorie._id === action.payload._id ? action.payload : memorie
      );
    case "CREATE":
      return [...memorie, action.payload];
    case "FETCH_ALL":
      return action.payload;

    default:
      return memorie;
  }
};

export default reducers;
