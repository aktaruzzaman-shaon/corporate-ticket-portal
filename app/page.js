import TicketTable from "./(components)/shared/ticketTable";

async function alltickets() {
  try {
    const res = await fetch("http://localhost:3000//api/Tickets/", { cache: 'no-store' })
    return await res.json();
  } catch (error) {
    return ("Failed to get tickets", error)
  }
}
export default async function Home() {
  const {tickets} = await alltickets();
  
  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <TicketTable tickets={tickets} ></TicketTable>
      </div>
    </div>
  );
}
