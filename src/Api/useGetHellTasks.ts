import { useQuery } from "@tanstack/react-query"
import { Task } from "../types"
import { FetchApi } from "../Utils/FetchApi"

   async function  fetchData(){
        const response = await FetchApi().get("helltask",{params: {demonId:"83F9A014-F640-4498-B167-94D5FBF1F006"}})
        return response.data.data
    }
export const useGetHellTasks = () => {
    const { data, isLoading, ...rest } = useQuery<Task[]>({
        queryKey: ["HellTask"],
        queryFn: fetchData,
    })

    return { tasks: data, isLoading, ...rest }
}