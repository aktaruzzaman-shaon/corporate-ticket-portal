"use client"

import Ticket from "./(components)/ticket";

const alltickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets")
    const data = await res.json()
    return data;
  } catch (error) {
    console.log("Failed to get tickets", error)
  }
}

export default async function Home() {
  const { tickets } = await alltickets();
  const onlcilkcheck = ()=>{
    console.log("clicked")
  }
  console.log(tickets)

  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <table className="table">
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
              tickets.map((singleTicket,index) => <Ticket singleTicket={singleTicket} index={index}></Ticket>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}
