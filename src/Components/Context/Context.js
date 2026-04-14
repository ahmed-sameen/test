import { useContext, useMemo, useState } from "react";
import UserContext from "../../Utils/UserContext";
import ChildForContext from "./ChildForContext";

const Context = () => {
    const [userName, setUserName] = useState("")
    const [name, setName] = useState("")
    const userData = useContext(UserContext);
    console.log(userData);

    const val = useMemo(() => { return { userName, setUserName } }, [userName])
    return <UserContext.Provider value={val}>
        <div>
            Parent - <input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <ChildForContext />
    </UserContext.Provider>
}

export default Context;