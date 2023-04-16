import React, { FC, Suspense, lazy } from "react";

import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../conts/routes-const";

import { Loader } from "../components";

const HomePage = lazy(() => import("../Pages/HomePage/HomePage"));

const TweetsPage = lazy(() => import("../Pages/TweetsPage/TweetsPage"));

const PagesRoutes: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.TWEETS} element={<TweetsPage />} />
        <Route path={ROUTES.NOT_FOUND} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default PagesRoutes;
