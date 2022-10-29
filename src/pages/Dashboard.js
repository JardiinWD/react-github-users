import React, { Fragment, useContext } from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { GithubContext } from '../context/context';

const Dashboard = () => {

  const { loading } = useContext(GithubContext)
  console.log(loading);

  if (loading) {

    return (
      <Fragment>
        {/* Navbar Component */}
        <Navbar />
        {/* Search Component */}
        <Search />
        <img src={loadingImage} className="loading-img" alt="Loading" />
        {/* Info Component */}
        <Info />
        {/* User Component */}
        <User />
        {/* Repos Component */}
        <Repos />
      </Fragment>
    )
  }

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
