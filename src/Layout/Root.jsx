import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
      <div className="">
        <div className="">
          <NavBar></NavBar>
        </div>
        <Outlet></Outlet>
      </div>
    );
};

export default Root;