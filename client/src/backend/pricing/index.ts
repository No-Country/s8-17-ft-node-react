import { ISubscription } from "@/types";
import axios from "axios";

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const getSubscriptions = async (data: ISubscription): Promise<any> => {
  const response = await axios.get(`${baseUrl}api/subscription`);

  console.log(response);

  return response;
};

export const getCheckOut = async (data: ISubscription): Promise<any> => {
  const response = await axios.get(`${baseUrl}api/subscription/:id`);

  console.log(response);

  return response;
};
