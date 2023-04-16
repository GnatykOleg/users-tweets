export const REDUX_STATE = Object.freeze({
  TWEETS: "tweets",

  FOLLOWING_LIST: "followingList",

  FILTERED_BY: "filteredBy",

  LOADING: "loading",

  ERROR: "error",
});

export const REDUX_ACTION_NAME = Object.freeze({
  GET_ALL: "get-all-users",

  UPDATE_USER: "update-user",
});

export const REDUX_ENDPOINTS = Object.freeze({
  USERS: "users",
});

export const REDUX_FILTER = Object.freeze({
  ALL: "All",

  FOLLOWING: "Following",

  FOLLOW: "Follow",
});
