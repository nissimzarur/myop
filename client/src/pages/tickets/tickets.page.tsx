import Spacer from "../../components/spacer";
import TicketsViewFactory from "../../patterns/factory/tickets-view/tickets-view.factory";
import useLoadTickets from "./hooks/useLoadTickets.hook";
import { ITicketsPage } from "./interfaces";
import Screen from "../../components/screen";

function TicketsPage({ userType }: ITicketsPage) {
  const ticketsResp = useLoadTickets(userType);

  return (
    <Screen>
      <Spacer size="lg" />
      <div className="text-center text-5xl font-thin">
        You are on <b>{userType.toUpperCase()}</b> mode
      </div>
      <Spacer size="lg" />
      <div className="w-full items-center flex flex-col">
        <input
          type="text"
          placeholder="Search..."
          className="border p-3 rounded-lg"
          onChange={(e) => {
            ticketsResp.searchTickets(e.target.value);
          }}
        />
        {ticketsResp.loading && <div>Fetching data, please wait...</div>}
      </div>
      <Spacer size="lg" />
      <TicketsViewFactory userType={userType} tickets={ticketsResp.tickets} />
      <Spacer size="lg" />
      <div className="w-full items-center flex flex-col">
        {ticketsResp.hasNext && (
          <button
            className="text-lg p-3 bg-slate-500 rounded-2xl text-white hover:scale-105 border"
            onClick={ticketsResp.loadMoreTickets}
          >
            Load more
          </button>
        )}
      </div>
    </Screen>
  );
}

export default TicketsPage;
