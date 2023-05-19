import React from "react";
import Layout from "../layout";
import { documentTitle } from "../utils/title";

const Login = () => {
  // page title
  documentTitle("Login");

  return (
    <Layout>
      <p className="mx-16 my-16 text-xl font-bold text-green-600 cursor-pointer">
        Configure Tailwind CSS with React.JS
      </p>
      <h1>Login</h1>
    </Layout>
  );
};

export default Login;
