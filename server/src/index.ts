import { Request, Response } from "express";
import { IRequestTicket, ITicket } from "./interfaces/ticket.interface";
import loadTickets from "./services/load-tickets";

const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors')

dotenv.config();

const app = express();

app.use(cors());
const port = process.env.PORT;

app.get("/api/tickets", (req: Request, res: Response) => {
  const tickets = loadTickets();

  const query = req.query as unknown as IRequestTicket;
  const { page = 1, limit = 3, userType } = query;

  let filteredTickets = tickets;

  if (userType) {
    filteredTickets = filteredTickets.filter(
      (ticket: ITicket) => ticket.userType === userType
    );
  }

  const startIndex = (page - 1) * limit;
  const paginatedTickets = filteredTickets.slice(
    startIndex,
    startIndex + +limit
  );
  const hasNext = startIndex + +limit < filteredTickets.length;

  res.json({
    tickets: paginatedTickets,
    total: filteredTickets.length,
    hasNext,
  });
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
