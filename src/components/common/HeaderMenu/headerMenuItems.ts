import { ROUTES } from "../../../conts/routes";

const { HOME, TWEETS } = ROUTES;

export const headerMenuItems = [
  {
    id: 1,
    to: HOME,
    text: "home",
  },
  {
    id: 2,
    to: TWEETS,
    text: "tweets",
  },
];
