import { useEffect, useState } from "react"

type User = {
    id: number,
    name: string,
    username: string,
    email: string
}

const UserTable = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setErrorMessage] = useState<string>()

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    const fetchUsers = async () => {
        setLoading(true)
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users")
            if (!response.ok) throw new Error("failed to fetch")
            const users: User[] = await response.json();
            setUsers(users)
        } catch (err) {
            setErrorMessage(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <button onClick={fetchUsers}>Fetch Users</button>
            {loading && (<p>Fetching user data</p>)}
            {error && (<p>error</p>)}
            {users.length>0 && (
                <table style={{textAlign:"left"}}>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>username</th>
                            <th>email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(each=>{
                            return (
                                <tr key={each.id}>
                                    <td>{each.name}</td>
                                    <td>{each.username}</td>
                                    <td>{each.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )

}

export default UserTable;