"use client";
import styles from "./page.module.css";
import React, { Fragment } from "react";

import Main from "./Components/Section/Main/Main";
const Home = () => {
  return (
    <Fragment>
      <section id="home">
        <Main />
      </section>
    </Fragment>
  );
};

export default Home;
