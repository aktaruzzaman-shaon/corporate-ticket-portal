
const SingleTicketDetails = ({ singleTicketDetails }) => {
    const { title, description, category, priority, status, } = singleTicketDetails.tickets;
    return (
        <div className="h-screen">
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
            <p>{priority}</p>
            <p>{priority}</p>
            <p>{status}</p>
        </div>
    );
};

export default SingleTicketDetails;