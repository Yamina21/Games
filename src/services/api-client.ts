import axios from "axios";
export interface FetchResponse<T>{
    count : number;
    results: T[]
    }
export default axios.create({
    baseURL:"https://api.rawg.io/api/",
    params:{
        key:'3f876986712e40318966ac3228921a32'
    }
})