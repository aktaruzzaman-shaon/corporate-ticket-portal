import TicketTable from "./(components)/shared/ticketTable";

export default async function Home() {
  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <TicketTable></TicketTable>
      </div>
    </div>
  );
}
