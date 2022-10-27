import React, { Fragment } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {
  return (
    <Fragment>
      {/* Navbar Component */}
      <Navbar />
      {/* Search Component */}
      <Search />
      {/* Info Component */}
      <Info />
      {/* User Component */}
      <User />
      {/* Repos Component */}
      <Repos />
    </Fragment>
  );
};

export default Dashboard;
