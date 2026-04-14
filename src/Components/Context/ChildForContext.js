import { memo, useContext } from "react";
import UserContext from "../../Utils/UserContext";

const ChildForContext = memo(() => {

    const { userName, setUserName } = useContext(UserContext)

    console.log(userName, "child")

    return <input value={userName} onChange={(e) => setUserName(e.target.value)} />
})

export default ChildForContext;