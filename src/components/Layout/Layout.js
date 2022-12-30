import React from "react";
import PropTypes from "prop-types";
import MainNavigation from "./MainNavigation";

const Layout = ({ children }) => (
  <>
    <MainNavigation />
    <main>{children}</main>
  </>
);

Layout.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Layout;
