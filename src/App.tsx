import React, { FC } from "react";

import PagesRoutes from "./PagesRoutes/PagesRoutes";

import { Header } from "./components";

const App: FC = () => {
  return (
    <>
      <Header />
      <PagesRoutes />
    </>
  );
};

export default App;
