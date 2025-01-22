export type UserTicket = "local" | "tourist" | null;

export interface ITicket {
  id: number;
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  userType: UserTicket;
}
