import TicketForm from "./ticketform/page";
import TicketTable from "./(components)/shared/ticketTable";
import connectdb from "./(models)/db";

export default async function Home() {
  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <TicketTable></TicketTable>
        {/* <TicketForm></TicketForm> */}
      </div>
    </div>
  );
}
