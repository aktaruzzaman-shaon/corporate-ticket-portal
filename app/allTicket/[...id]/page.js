function SinglePageDetails({ params }) {
    const res = fetch(`http://localhost:3000/api/Tickets ? id : ${params.id[0]}`)
    return (
        <div>{params.id[0]}</div>
    )
}
export default SinglePageDetails