function SinglePageDetails({ params }) {
    const res = fetch(`http://localhost:3000/api/Tickets?name=${params.id[0]}`)
    return (
        <div>{params.id[0]}</div>
    )
}
export default SinglePageDetails