
const Ticket = ({ singleTicket, index }) => {
    const {_id,title,description,category,priority,progress,status,updatedAt} = singleTicket;
    return (
        <div className="overflow-x-auto">
            <tr>
                <th>{index+1}</th>
                <td>{_id}</td>
                <td>{title}</td>
                <td>{updatedAt}</td>
            </tr>
        </div>
    )
}

export default Ticket