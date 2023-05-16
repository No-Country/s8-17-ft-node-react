import { UserRegister } from "@/types";
import axios from "axios";

export const registerUser = async (newUser: UserRegister): Promise<any> => {
  return await axios.post("http://localhost:3001/auth/register", {
    name: newUser.name,
    email: newUser.email,
    password: newUser.password
  });
};
