import { nanoid } from "@reduxjs/toolkit";

import { ROUTES } from "../../../conts/routes-const";

const { HOME, TWEETS } = ROUTES;

export const headerMenuItems = [
  {
    id: nanoid(),
    to: HOME,
    text: "home",
  },
  {
    id: nanoid(),
    to: TWEETS,
    text: "tweets",
  },
];
