import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
import axios from 'axios';

const initialState = {
  jobs: [
    {
      id: 1,
      title: 'Front-end Developer',
      company: 'StartupTech',
      salary: 120000,
      contact_email: 'contact@startuptech.com'
    },
    {
      id: 2,
      title: 'Back-end Developer',
      company: 'TechStartup',
      salary: 120000,
      contact_email: 'contact@techstartup.com'
    },
    {
      id: 3,
      title: 'Fullstack Developer',
      company: 'TechStartup',
      salary: 120000,
      contact_email: 'contact@techstartup.com'
    },
    {
      id: 4,
      title: 'DevOps',
      company: 'SomeCompany',
      salary: 120000,
      contact_email: 'somecompany@gmail.com'
    }
  ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addJob(job) {
    dispatch({
      type: 'ADD_JOB',
      payload: job
    });
  }

  return (
    <GlobalContext.Provider value={{ jobs: state.jobs, addJob }}>
      {children}
    </GlobalContext.Provider>
  );
};
