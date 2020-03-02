export default (state, action) => {
  switch (action.type) {
    case "GET_JOBS":
      return {
        ...state,
        jobs: action.payload
      };
    case "ADD_JOB":
      return {
        ...state,
        jobs: [...state.jobs, action.payload]
      };
    default:
      return state;
  }
};
