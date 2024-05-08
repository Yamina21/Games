import { useQuery } from "@tanstack/react-query";
import Genre from "../data/Genres";
import APIClient from "../services/api-client";

export interface Genre {
    id: number;
    name: string
    image_background: string;
}
const apiClient= new APIClient<Genre>('/genres');

const useGenres= ()=> useQuery({
    queryKey:['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 *60 *60 *1000, //24h
    initialData:{count: Genre.length, results: Genre},
})
export default useGenres;