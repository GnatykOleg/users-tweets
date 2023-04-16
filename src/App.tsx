import React, { FC } from "react";

import PagesRoutes from "./PagesRoutes/PagesRoutes";

import { Header } from "./components";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <>
      <Header />
      <PagesRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
