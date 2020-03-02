import React, { useContext, useEffect } from 'react';
import './styles.scss';

import BackButton from '../../components/BackButton';
import JobCard from '../../components/JobCard';
import Footer from '../../components/Footer';

import { GlobalContext } from '../../context/state';

export default function Jobs() {
  const { jobs, getJobs } = useContext(GlobalContext);

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="Jobs PageLoad">
      <h1>
        <BackButton />
        {' Jobs'}
      </h1>
      {jobs.map(job => (
        <JobCard key={job._id} job={job} />
      ))}
      <Footer />
    </div>
  );
}
