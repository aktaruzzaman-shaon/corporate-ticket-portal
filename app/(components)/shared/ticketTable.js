import Link from "next/link";

// fetching all tickets from DB----------------------
const alltickets = async () => {
    try {
        const res = await fetch("http://localhost:3000//api/Tickets", { cache: 'no-store' })
        return await res.json()
    } catch (error) {
        return ("Failed to get tickets", error)
    }
}

async function TicketTable() {
    const {tickets} = await alltickets();
    console.log(tickets)
    return (
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
                    tickets?.map((singleTicket, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{singleTicket._id}</td>
                                <td>{singleTicket.title}</td>
                                <td>{singleTicket.updatedAt}</td>
                            </tr>
                        )
                    }
                    )
                }
            </tbody>
        </table >
    );
};


export default TicketTable;