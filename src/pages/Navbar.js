import { Link } from "react-router-dom";
export const Navbar = () => {
    return (
        <div>
            <Link to="/home">Home</Link>
            <br></br>
            <Link to="/form">Form</Link>
            <br></br>
            <Link to="/profile">Profile</Link>
            <br></br>
            <Link to="/users">Users</Link>
            <br></br>
            <Link to="/cat">Cat</Link>
            <br></br>
            <Link to="/predict">Predict</Link>
        </div>
    );
}