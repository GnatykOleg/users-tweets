import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getAllUsersOperation, updateUserOperation } from "./tweetsOperations";

import {
  FilterBy,
  ITweetsSliceInitialState,
  IUpdateUser,
  UsersArray,
} from "../../types/redux-types/redux-types";

import { REDUX_FILTER, REDUX_STATE } from "../../conts/redux-const";

const { TWEETS, FOLLOWING_LIST, LOADING, ERROR, FILTERED_BY } = REDUX_STATE;

const { ALL } = REDUX_FILTER;

const initialState: ITweetsSliceInitialState = {
  [TWEETS]: null,
  [FOLLOWING_LIST]: [] as string[],
  [FILTERED_BY]: ALL,
  [LOADING]: false,
  [ERROR]: null,
};

const tweetsSlice = createSlice({
  name: TWEETS,

  initialState,

  reducers: {
    addToFollowingList(state, { payload }: PayloadAction<string>) {
      state.followingList = [...state.followingList, payload];
    },

    deleteFromFollowingList(state, { payload }: PayloadAction<string>) {
      state.followingList = state.followingList.filter(
        (userId) => userId !== payload
      );
    },

    setFilteredBy(state, { payload }: PayloadAction<FilterBy>) {
      state.filteredBy = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAllUsersOperation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      getAllUsersOperation.fulfilled,
      (state, { payload }: PayloadAction<UsersArray>) => {
        state.tweets = payload;
        state.loading = false;
      }
    );

    builder.addCase(
      getAllUsersOperation.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = payload;
      }
    );

    builder.addCase(updateUserOperation.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(
      updateUserOperation.fulfilled,
      (state, { payload }: PayloadAction<IUpdateUser>) => {
        state.tweets = state.tweets!.map((user) => {
          if (user.id === payload.id) user.followers = payload.followers;
          return user;
        });

        state.loading = false;
      }
    );

    builder.addCase(
      updateUserOperation.rejected,
      (state, { payload }: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.error = payload;
      }
    );
  },
});

export const { addToFollowingList, deleteFromFollowingList, setFilteredBy } =
  tweetsSlice.actions;

export default tweetsSlice.reducer;
