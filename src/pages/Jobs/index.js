import React, { useContext } from 'react';
import './styles.scss';

import JobCard from '../../components/JobCard';
import Footer from '../../components/Footer';

import { GlobalContext } from '../../context/state';

export default function Jobs() {
  const { jobs } = useContext(GlobalContext);

  return (
    <div className="Jobs PageLoad">
      <h1>Jobs</h1>
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
      <Footer />
    </div>
  );
}
