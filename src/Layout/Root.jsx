import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Root = () => {
    return (
      <div className="">
        <div className="">
          <NavBar></NavBar>
        </div>
        <Outlet></Outlet>

        <div>
            <Footer></Footer>
        </div>
      </div>
    );
};

export default Root;