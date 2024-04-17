"use client"
import Ticket from "../ticket";

const TicketTable = ({ tickets }) => {
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
                    tickets.map((singleTicket, index) => {
                        return (
                            <tr key={index}>
                                <th>{singleTicket.index + 1}</th>
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