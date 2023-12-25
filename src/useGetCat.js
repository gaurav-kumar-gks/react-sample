import { useQuery } from '@tanstack/react-query';
import Axios from "axios";

export const useGetCat = (initialValue = false) => {
    const { data, isLoading: isCatLoading, refetch } = useQuery({
        queryKey: ["cat"],
        queryFn: () => Axios.get("https://catfact.ninja/fact").then((res) => res.data?.fact)
    });


    const refetchData = () => {
        console.log("refetching data");
        refetch();
    }



    return {data, refetchData, isCatLoading};
}