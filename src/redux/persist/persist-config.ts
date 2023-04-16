import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { REDUX_STATE } from "../../conts/redux-const";

import storage from "redux-persist/lib/storage";

const { TWEETS, FOLLOWING_LIST, LOADING, ERROR } = REDUX_STATE;

export const persistConfig = {
  key: FOLLOWING_LIST,

  storage,

  whitelist: [FOLLOWING_LIST],

  blacklist: ["_persist", TWEETS, LOADING, ERROR],
};

export const middlewareConfig = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};
