import Card from "../../../../../components/card";
import GridView from "../../../../../components/grid-view";
import { ITicket } from "../../../../../utils/interfaces";

function Local({ data }: { data: Partial<ITicket>[] }) {
  return (
    <GridView>
      {data.map((ticket,index) => (
        <Card key={`card-${index}`}>
          <div key={`id-${ticket.id}`}>ID of ticket: {ticket.id}</div>
          <div key={`title-${ticket.title}`}>Title: {ticket.title}</div>
          <div key={`description-${ticket.description}`}>Description: {ticket.description}</div>
          <div key={`date-${ticket.date}`}>Date: {ticket.date}</div>
        </Card>
      ))}
    </GridView>
  );
}

export default Local;
