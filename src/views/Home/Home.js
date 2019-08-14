import React from "react";
import Layout from "components/Layout";
import { Link } from "react-router-dom";

const Home = () => (
  <Layout className="home">
    <h1>Home page</h1>
    <ul>
      <li>
        <Link to="/search">Go to Search</Link>
      </li>
    </ul>
  </Layout>
);

export default Home;
