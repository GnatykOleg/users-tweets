import axios, { AxiosResponse } from "axios";

import {
  IUpdateUser,
  IUser,
  UsersArray,
} from "../../types/redux-types/redux-types";

import { REDUX_ENDPOINTS } from "../../conts/redux-const";

const { REACT_APP_BACKEND_BASE_URL } = process.env;

const { USERS } = REDUX_ENDPOINTS;

const instance = axios.create({
  baseURL: REACT_APP_BACKEND_BASE_URL,
});

export const getAllUsersService = async () => {
  const { data }: AxiosResponse<UsersArray> = await instance.get(USERS);

  return data;
};

export const updateUserService = async ({ followers, id }: IUpdateUser) => {
  const { data }: AxiosResponse<IUser> = await instance.put(`${USERS}/${id}`, {
    followers,
  });

  return data;
};
