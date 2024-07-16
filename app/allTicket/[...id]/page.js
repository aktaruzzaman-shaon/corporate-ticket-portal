import SingleTicketDetails from "@/app/(components)/shared/singleTicketDetails";


async function SingleTicket({ params }) {

    console.log(params.id[0])

    const res = await fetch(`http://localhost:3000/api/Tickets?id=${params.id[0]}`)
    const singleTicketDetails = await res.json();

    console.log(singleTicketDetails)

    return (
        <div>
            {params.id[0]}
            {/* <SingleTicketDetails singleTicketDetails={singleTicketDetails}></SingleTicketDetails> */}
        </div>
    )
}
export default SingleTicket