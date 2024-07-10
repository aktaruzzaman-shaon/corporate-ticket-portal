import SingleTicketDetails from "@/app/(components)/shared/singleTicketDetails";

<<<<<<< HEAD
async function SingleTicket({ params }) {
=======
async function SinglePageDetails({ params }) {

>>>>>>> 9452792d44bbad36aacbabc66a6f9cf385cf0f85
    const res = await fetch(`http://localhost:3000/api/Tickets?id=${params.id[0]}`)
    const singleTicketDetails = await res.json();

    return (
        <div>
            {params.id[0]}
            <SingleTicketDetails singleTicketDetails={singleTicketDetails}></SingleTicketDetails>
        </div>
    )
}
export default SingleTicket