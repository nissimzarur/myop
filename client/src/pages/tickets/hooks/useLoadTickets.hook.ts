import { useEffect, useState } from "react";
import getTickets from "../../../api/get-tickets";
import { ITicket, UserTicket } from "../../../utils/interfaces";

function useLoadTickets(userType: UserTicket) {
  const [tickets, setTickets] = useState<ITicket[]>();
  const [hasNext, setHasNext] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('')

  const loadMoreTickets = async () => {
    if (!hasNext) {
      return;
    }
    setPage((prevPage) => prevPage + 1);
  };

  const searchTickets = (newSearch: string) => {
    setSearch(newSearch);
    setPage(1);
    setTickets([])
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await getTickets(userType, { page, search });
      setTickets((prev)=>(response.tickets ? [...prev || [], ...response.tickets] : []));
      setHasNext(response.hasNext);
      setLoading(false);
    })();
  }, [userType, page, search]);

  return { tickets, hasNext, loading, loadMoreTickets, searchTickets };
}

export default useLoadTickets;
