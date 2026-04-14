import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
            <Link to="/">Home</Link>&nbsp;
            <Link to="/about">About</Link>&nbsp;
            <Link to="/rtk">RTK</Link>&nbsp;
            <Link to="/rtk1">rtk1</Link>&nbsp;
            {/* <Link to="/rtkvendor">RTK vendor</Link>&nbsp;
            <Link to="/rtkcustomer">RTK customer</Link>&nbsp; */}
            <Link to="/rtkcustomer1"> customer</Link>&nbsp;
            <Link to="/rtkvendor1">vendor</Link>&nbsp;
        </div>
    )
}

export default Header;