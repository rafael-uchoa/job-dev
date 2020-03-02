import React, { useState, useContext } from "react";
import "./styles.scss";

import Footer from "../../components/Footer";

import { GlobalContext } from "../../context/state";

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [salary, setSalary] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const { addJob } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();

    const newJob = {
      id: Math.floor(Math.random() * 10000),
      title,
      company,
      salary,
      contact_email: contactEmail
    };

    addJob(newJob);

    window.location = "/";
  }

  return (
    <div className="CreateJob PageLoad">
      <h1>Create Jobs</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="text">Job Title</label>
        <input
          type="text"
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter job title..."
        />
        <label htmlFor="text">Company Name</label>
        <input
          type="text"
          onChange={e => setCompany(e.target.value)}
          placeholder="Enter company name..."
        />
        <label htmlFor="amount">Enter Salary</label>
        <input
          type="number"
          onChange={e => setSalary(e.target.value)}
          placeholder="Enter salary..."
        />
        <label htmlFor="text">Enter Contact Email</label>
        <input
          type="text"
          onChange={e => setContactEmail(e.target.value)}
          placeholder="Enter contact email..."
        />
        <button type="submit">Create Job</button>
      </form>
      <Footer />
    </div>
  );
}
