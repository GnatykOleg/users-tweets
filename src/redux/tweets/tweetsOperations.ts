import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../services/api/api";

import { REDUX_ACTION_NAME } from "../../conts/redux-const";

import { IUpdateUser, UsersArray } from "../../types/redux-types/redux-types";

import { toast } from "react-toastify";

const { GET_ALL, UPDATE_USER } = REDUX_ACTION_NAME;

export const getAllUsersOperation = createAsyncThunk<
  UsersArray,
  undefined,
  { rejectValue: string }
>(GET_ALL, async (_, { rejectWithValue }) => {
  try {
    const users: UsersArray = await api.getAllUsersService();

    return users;
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});

export const updateUserOperation = createAsyncThunk<
  IUpdateUser,
  IUpdateUser,
  { rejectValue: string }
>(UPDATE_USER, async ({ followers, id }, { rejectWithValue }) => {
  try {
    await api.updateUserService({ followers, id });

    return { followers, id };
  } catch (error: any) {
    toast.error(error.message);
    return rejectWithValue(error.message);
  }
});
