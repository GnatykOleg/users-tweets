import React, { FC } from "react";

import { useNavigate } from "react-router-dom";

import { ROUTES } from "../../conts/routes";

import { PrimaryButton } from "../../components";

const Tweets: FC = () => {
  const navigate = useNavigate();

  return (
    <section>
      <h2 className="visually-hidden">Tweets page</h2>
      <PrimaryButton
        text="Go to Home Page"
        onClick={() => navigate(ROUTES.HOME)}
      />
    </section>
  );
};

export default Tweets;
