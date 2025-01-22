import { useSearchParams } from "react-router";
import "./App.css";
import TicketsPage from "./pages/tickets/tickets.page";
import { UserTicket } from "./utils/interfaces";

function App() {
  const [searchParams] = useSearchParams();

  const userType = searchParams.get("userType") as UserTicket;

  return (
    <TicketsPage userType={userType}/>
  );
}

export default App;
