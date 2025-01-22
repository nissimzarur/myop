import Card from "../../../../../components/card";
import ListView from "../../../../../components/list-view";
import { ITicket } from "../../../../../utils/interfaces";

function Tourist({ data }: { data: Partial<ITicket>[] }) {
  return (
    <ListView>
      {data.map((ticket) => (
        <Card className="w-96">
          <div key={`id-${ticket.id}`}>ID of ticket: {ticket.id}</div>
          <div key={`title-${ticket.title}`}>Title: {ticket.title}</div>
          <img key={`image-${ticket.image}`} src={ticket.image} alt="image"/>
        </Card>
      ))}
    </ListView>
  );
}

export default Tourist;
