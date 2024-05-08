import { useQuery } from "@tanstack/react-query";
import Genres from "../data/genres";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Genre {
    id: number;
    name: string
    image_background: string;
}


const useGenres= ()=> useQuery({
    queryKey:['genres'],
    queryFn:()=>
        apiClient.get<FetchResponse<Genre>>('/genres').then(res=> res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: {count: Genres.length, results: Genres}
})
export default useGenres;