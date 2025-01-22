import { ITicket } from "../../utils/interfaces";

export default interface IGetTicketsResponse {
  tickets: ITicket[];
  total: number;
  hasNext: boolean;
}

export interface IGetTicketsParams {
  page: number;
}
