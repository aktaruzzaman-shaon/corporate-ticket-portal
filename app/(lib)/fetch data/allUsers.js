export async function getUsers() {
    const res = await fetch("http://localhost:3000/api/users")
    const usersData = await res.json()
    return usersData
}