import { UserRegister } from "@/types";

export const registerUser = async (newUser: UserRegister): Promise<any> => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password
      })
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
