import React, { createContext, useReducer } from "react";
import reducer from "./reducer";
import axios from "axios";

const initialState = {
  jobs: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function getJobs() {
    try {
      const res = await axios.get("/api");
      dispatch({
        type: "GET_JOBS",
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  async function addJob(job) {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = axios.post("/api", job, config);
      dispatch({
        type: "ADD_JOB",
        payload: res.data
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <GlobalContext.Provider
      value={{ jobs: state.jobs, error: state.error, getJobs, addJob }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
