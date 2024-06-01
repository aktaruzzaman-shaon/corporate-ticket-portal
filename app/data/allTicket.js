// Load all tickets from db
async function alltickets() {
    try {
        const res = await fetch("http://localhost:3000//api/Tickets", { cache: 'no-store' })
        return await res.json()
    } catch (error) {
        return ("Failed to get tickets", error)
    }
}

export default alltickets;