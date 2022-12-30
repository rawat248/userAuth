import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = React.createContext({
  tokenn: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const userIsLoggedIn = !!token;

  const loginHandler = (tokenn) => {
    setToken(tokenn);
  };

  const logoutHandler = () => {
    setToken(null);
  };

  const contextValue = useMemo(() => ({
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }));

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.string.isRequired,
};

export default AuthContext;
