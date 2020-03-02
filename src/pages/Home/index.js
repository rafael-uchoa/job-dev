import React from 'react';
import './styles.scss';

import Header from '../../components/Header';
import MainCard from '../../components/MainCard';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className="Home PageLoad">
      <Header />
      <main>
        <MainCard title="Employers" path="/create" btnText="Create Jobs" />
        <MainCard title="Employees" path="/jobs" btnText="Find Jobs" />
      </main>
      <Footer />
    </div>
  );
}
