import { ITicket, UserTicket } from "../../../utils/interfaces";

export type ITicketsViewFactory = {
  userType: UserTicket;
  tickets: Partial<ITicket>[] | undefined;
};
