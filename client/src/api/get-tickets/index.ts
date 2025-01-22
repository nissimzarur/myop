import { NetworkService } from "../../services/network.service";
import { GET_TICKETS_URL } from "../../utils/constants";
import { ITicket } from "../../utils/interfaces";
import IGetTicketsResponse, { IGetTicketsParams } from "./interfaces";

export default async function (
  userType?: "local" | "tourist",
  params?: IGetTicketsParams
): Promise<IGetTicketsResponse> {
  try {
    const networkService = NetworkService.getInstance();
    const page = params?.page || 1;

    const url = `${GET_TICKETS_URL}?userType=${userType}&page=${page}&limit=3`;

    const response = await networkService.get<IGetTicketsResponse>(url);

    return response;
  } catch (error) {
    console.error("Error fetching tickets:", error);
    throw new Error("Error fetching tickets");
  }
}
