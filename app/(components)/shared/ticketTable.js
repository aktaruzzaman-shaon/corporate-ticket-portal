"use client"
import alltickets from "@/app/data/allTicket";
import { useRouter } from "next/router";

 async function TicketTable() {
    // hooks------------------------------
    // const router = useRouter();

    const { tickets } =  alltickets();

    const ticketDetails = () => {
        console.log(router)
        // router.push('/login')
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
                            <tr key={index} onClick={() => ticketDetails()}>
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