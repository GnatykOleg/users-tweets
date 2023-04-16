import React, { FC, useEffect, useState } from "react";

import { nanoid } from "@reduxjs/toolkit";

import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";

import { getAllUsersOperation } from "../../redux/tweets/tweetsOperations";

import { setFilteredBy } from "../../redux/tweets/tweetsSlice";

import { getTweetsDataSelector } from "../../redux/tweets/tweetsSelectors";

import { REDUX_FILTER } from "../../conts/redux-const";

import { FilterBy } from "../../types/redux-types/redux-types";

import { COLORS } from "../../conts/colors-const";

import {
  GoBackButton,
  Loader,
  PrimaryButton,
  TweetsFilter,
  Card,
} from "../../components";

import ScrollToTop from "react-scroll-to-top";

import s from "./TweetsPage.module.css";

const Tweets: FC = () => {
  const [tweetsPerPage, setTweetsPerPage] = useState<number>(8);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsersOperation());
  }, [dispatch]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTweetsPerPage(8);
    dispatch(setFilteredBy(e.currentTarget.value as FilterBy));
  };

  const { FOLLOW, FOLLOWING } = REDUX_FILTER;

  const { tweets, loading, followingList, filteredBy } = useAppSelector(
    getTweetsDataSelector
  );

  const filteredTweets = tweets?.filter(({ id }) => {
    if (filteredBy === FOLLOW) return !followingList.includes(id);
    if (filteredBy === FOLLOWING) return followingList.includes(id);
    return true;
  });

  const tweetsToRender = filteredTweets?.slice(0, tweetsPerPage);

  if (loading) return <Loader />;

  return (
    <section className={s.section}>
      <h2 className="visually-hidden">Tweets page</h2>

      <div className={s.headerButtonsWrapper}>
        <GoBackButton />
        <TweetsFilter onChange={onChange} />
      </div>

      <ul className={s.list}>
        {tweetsToRender?.map((user) => (
          <Card key={nanoid()} user={user} />
        ))}
      </ul>

      {filteredTweets && tweetsPerPage < filteredTweets.length && (
        <PrimaryButton
          text="Load more"
          onClick={() => setTweetsPerPage((state) => state + 8)}
          inlineStyles={{
            background: COLORS.primaryColor,
            margin: "0 auto",
            marginTop: "50px",
          }}
        />
      )}

      <ScrollToTop style={{ background: COLORS.primaryColor }} smooth />
    </section>
  );
};

export default Tweets;
