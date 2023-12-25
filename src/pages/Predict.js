import { useState } from "react";
import Axios from "axios";

export const Predict = () => {
    const [name, setName] = useState("");
    const [prediction, setPrediction] = useState(null);

    const fetchPrediction = (name) => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
            setPrediction(response.data);
        });
    };

    return (
        <div>
            <div>
                <input
                    placeholder="Enter name"
                    onChange={(e) => setName(e.target.value)}
                />

                <button onClick={() => fetchPrediction(name)}>Predict</button>

                <div>
                    <p>Name: {name}</p>
                    <p>Age: {prediction?.age}</p>
                </div>
            </div>
        </div>
    );
};
