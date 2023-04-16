import React, { FC } from "react";

import { NavLink } from "react-router-dom";

import { ROUTES } from "../../conts/routes-const";

import tweet from "../../assets/images/tweet.png";

import s from "./HomePage.module.css";

const Home: FC = () => (
  <section className={s.section}>
    <h1 className={s.title}>Welcome to tweets app!</h1>
    <main>
      <NavLink className={s.link} to={ROUTES.TWEETS}>
        <img src={tweet} alt="tweet bird" />
      </NavLink>
    </main>
  </section>
);

export default Home;
