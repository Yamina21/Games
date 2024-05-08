import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import APIClient from "../services/api-client";
import { Platform } from "./UsePlatforms";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms :{platform: Platform}[];
    metacritic: number;
    rating_top: number;
  }
  
  const apiClient = new APIClient<Game>('/games')
const useGames=(gameQuery:GameQuery)=> useQuery({
  queryKey: ['games',  gameQuery],
  queryFn:()=> apiClient
      .getAll({params:{genres:gameQuery.genre?.id, 
        platforms:gameQuery.platform?.id, ordering: gameQuery.sortOrder, search: gameQuery.searchText}}),
     
})
 

export default useGames;