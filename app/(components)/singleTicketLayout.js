import { getUsers } from "../(lib)/fetch data/allUsers"

const SingleTicketLayout = async () => {

    const users = await getUsers();
    console.log(users, "users")
    return (
        <div className="flex justify-end">
            <div>Assign</div>
            {
                <select className="select select-bordered select-xs w-4 max-w-xs ml-1">
                    {
                        users.map((user, index) => (
                            <option key={index}>{user.userName}</option>
                        ))
                    }
                </select>
            }
        </div>
    )
}

export default SingleTicketLayout