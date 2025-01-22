import Local from "./components/local";
import Tourist from "./components/tourist";
import { ITicketsViewFactory } from "./interfaces";

function TicketsViewFactory({ userType, tickets }: ITicketsViewFactory) {
  if (!tickets?.length) return <div>No tickets found</div>;

  switch (userType) {
    case "local":
    case null:
      return <Local data={tickets} />;

    case "tourist":
      return <Tourist data={tickets} />;

    default:
      break;
  }
}

export default TicketsViewFactory;
