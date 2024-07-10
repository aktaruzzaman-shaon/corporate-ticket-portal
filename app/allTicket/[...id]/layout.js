import SingleTicketLayout from "../../(components)/singleTicketLayout";

export default function singleTicketLayout({ children }) {
    return (
        <div>
            <div className="bg-slate-500">
                <SingleTicketLayout></SingleTicketLayout>
            </div>
            {children}
        </div>
    )
}