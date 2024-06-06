"use client"

import { useRouter } from "next/navigation";

function TicketTable({ tickets }) {
    const router = useRouter();
    const singleTicketDetails = (id) => {
        router.push(`/allTicket/${id}`)
    }
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
                            <tr key={index} onClick={() => singleTicketDetails(singleTicket._id)} className="cursor-pointer">
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