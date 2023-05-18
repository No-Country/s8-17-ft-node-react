import { UserAuth, UserRegister } from "@/types";
import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const registerUser = async (newUser: UserRegister): Promise<any> => {
  return await axios.post(`${baseUrl}/api/auth/register`, {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password
  });
};

export const loginUser = async (user: UserAuth): Promise<any> => {
  return await axios.post(`${baseUrl}/api/auth/login`, {
    email: user.email,
    password: user.password
  });
};

export const google = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/api/auth/google`);

  return response;
};

export const profile = async (): Promise<any> => {
  const loggedUserJSON = window.localStorage.getItem("loggedUser");
  let user = null;
  if (loggedUserJSON) {
    user = JSON.parse(loggedUserJSON);
  }
  const response = await axios.get(`${baseUrl}/api/auth/profile`, {
    headers: {
      Authorization: `Bearer ${user?.token}`
    }
  });
  const profile = response.data;

  return profile;
};
