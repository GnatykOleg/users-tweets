import { REDUX_FILTER, REDUX_STATE } from "../../conts/redux-const";

const { TWEETS, FOLLOWING_LIST, LOADING, ERROR, FILTERED_BY } = REDUX_STATE;

const { ALL, FOLLOW, FOLLOWING } = REDUX_FILTER;

export interface IUser {
  user: string;
  avatar: string;
  tweets: number;
  followers: number;
  id: string;
}

export type UsersArray = Array<IUser>;

export type FilterBy = typeof ALL | typeof FOLLOW | typeof FOLLOWING;

export interface ITweetsSliceInitialState {
  [TWEETS]: null | UsersArray;
  [FOLLOWING_LIST]: Array<string>;
  [FILTERED_BY]: FilterBy;
  [LOADING]: boolean;
  [ERROR]: any;
}

export interface IUpdateUser {
  followers: number;
  id: string;
}
