import SingleTicketDetails from "@/app/(components)/shared/singleTicketDetails";

async function SinglePageDetails({ params }) {
    const res = await fetch(`http://localhost:3000/api/Tickets?id=${params.id[0]}`)
    const singleTicketDetails = await res.json();

    return (
        <div>
            {params.id[0]}
            <SingleTicketDetails singleTicketDetails={singleTicketDetails}></SingleTicketDetails>
        </div>
    )
}
export default SinglePageDetails