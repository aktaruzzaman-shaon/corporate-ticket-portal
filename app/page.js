"use client"
import TicketTable from "./(components)/shared/ticketTable";
import Ticket from "./(components)/ticket";

const alltickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets")
    return await res.json()
  } catch (error) {
    console.log("Failed to get tickets", error)
  }

}

export default async function Home() {
  const { tickets } = await alltickets();

  return (
    <div>
      <div className="overflow-x-auto mx-5">
        {/* <table className="table">
          <thead>
            <tr>
              <th>Ticked id</th>
              <th>Name</th>
              <th>Subject</th>
              <th>From</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {
              tickets.map((singleTicket, index) => <Ticket singleTicket={singleTicket} index={index} key={index}></Ticket>)
            }
          </tbody>
        </table> */}
        <TicketTable tickets={tickets}></TicketTable>
      </div>
    </div>
  );
}
