import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {!authCtx.isLoggedIn && <Route path="/auth" element={<AuthPage />} />}

        {authCtx.isLoggedIn && (
          <Route path="/profile" element={<UserProfile />} />
        )}
        {!authCtx.isLoggedIn && (
          <Route path="/profile" element={<AuthPage />} />
        )}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  );
};

export default App;
