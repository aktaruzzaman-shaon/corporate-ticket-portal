import TicketTable from "../(components)/shared/ticketTable";


// load data form cache
async function alltickets() {
    try {
        const res = await fetch("http://localhost:3000//api/Tickets/", { cache: 'no-store' })
        return await res.json();
    } catch (error) {
        return ("Failed to get tickets", error)
    }
}


async function allTicket() {
    const { tickets } = await alltickets();

    return (
        <div>
            <TicketTable tickets={tickets} ></TicketTable>
        </div>
    );
};

export default allTicket;