import { ISubscription } from "@/types";
import { checkSession } from "@/utils/checkSession";
import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

const token = checkSession();

export const getAllSubscriptions = async (): Promise<any> => {
  const response = await axios.get(`${baseUrl}/api/subscription/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return response;
};

export const getCheckOut = async (subscriptionId: string): Promise<any> => {
  const response = await axios.get(`${baseUrl}/api/subscription/checkout/${subscriptionId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  console.log(response);
  return response;
};
