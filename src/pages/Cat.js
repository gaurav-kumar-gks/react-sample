import { useState } from "react";
import Axios from "axios";

export const Cat = () => {
    const [catFact, setCatFact] = useState("");

    const fetchCatFact = () => {
        Axios.get("https://catfact.ninja/fact").then((response) => {
            setCatFact(response.data.fact);
        });
    };

    // useEffect(() => { fetchCatFact() }, []);

    return (
        <div>
            <div>
                <button onClick = {fetchCatFact}>Generate cat fact</button>
                <p>{catFact}</p>
            </div>
        </div>
    );
};
