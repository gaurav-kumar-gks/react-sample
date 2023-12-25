import { useState, useContext } from "react";
import { AppContext } from "../App";

const ChangeProfile = ({ setLoggedInUser }) => {
    const [newUserName, setNewUserName] = useState("test");

    return (
        <div>
            <div>
                Enter Username: <input type="text" placeholder="New username" onChange={(e) => setNewUserName(e.target.value)} />
            </div>
            <button onClick={() => setLoggedInUser(newUserName)}>Change Username</button>
        </div>
    );
}

export const Profile = () => {
    const {loggedInUser, setLoggedInUser} = useContext(AppContext);
    return (
        <div>
            <p>Welcome {loggedInUser}</p>
            <ChangeProfile setLoggedInUser={setLoggedInUser} />
        </div>
    );
}

export default Profile;