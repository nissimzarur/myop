import { useEffect, useState } from "react";
import getTickets from "../../../api/get-tickets";
import { ITicket, UserTicket } from "../../../utils/interfaces";

function useLoadTickets(userType: UserTicket) {
  const [tickets, setTickets] = useState<ITicket[]>();
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMoreTickets = async () => {
    if (!hasNext) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getTickets(userType, { page });
      console.log({ response });
      setTickets((prev)=>(response.tickets ? [...prev || [], ...response.tickets] : []));
      setHasNext(response.hasNext);
      setLoading(false);
    })();
  }, [userType, page]);

  return { tickets, hasNext, loading, loadMoreTickets };
}

export default useLoadTickets;
