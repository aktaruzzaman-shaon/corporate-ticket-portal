"use client"

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
  console.log(tickets)
  return (
    <div>
      <p>This is tickets</p>
      {
        tickets.map((singleTicket) => (
          <p>{singleTicket.title}</p>
        ))
      }
    </div>
  );
}
