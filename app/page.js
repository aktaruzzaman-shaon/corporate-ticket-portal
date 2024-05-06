import TicketForm from "./(components)/shared/ticketForm";
import TicketTable from "./(components)/shared/ticketTable";
import connectdb from "./(models)/db";

export default async function Home() {
  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <TicketTable></TicketTable>
      </div>
    </div>
  );
}
