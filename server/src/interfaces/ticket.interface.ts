import { Request } from "express";

interface ITicket {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  userType: "local" | "tourist";
}

interface IRequestTicket {
  limit: number;
  page: number;
  userType: "local" | "tourist";
  search: string
}

export { ITicket, IRequestTicket };
