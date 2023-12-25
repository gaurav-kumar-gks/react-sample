import { useContext } from 'react';
import { AppContext } from "../App";
import { useGetCat } from '../useGetCat';

export const Home = () => {
    const { data, isCatLoading, refetchData } = useGetCat();
    const { loggedInUser } = useContext(AppContext);

    return (
        <div>
            <h1>Home</h1>
            <p>Hello: {loggedInUser}</p>
            {isCatLoading && <p>Loading</p>}
            {!isCatLoading && <p>{data}</p>}
            <button onClick={refetchData}>Refetch</button>
        </div>
    );
}