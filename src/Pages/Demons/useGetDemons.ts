import { useQuery } from "@tanstack/react-query";
import { FetchApi } from "../../Utils/FetchApi";
import { Demon } from "../../Models/Demon";

const fetchData = async (pageNumber: number, pageSize: number) => {
  const response = await FetchApi().get("Demon", {
    params: { pageNumber, pageSize },
  });
  return response.data.data;
};
export const useGetDemons = (pageSize: number, pageNumber: number) => {
  const { data, isLoading, ...rest } = useQuery<Demon[]>({
    queryKey: ["ListDemons", pageNumber, pageSize],
    queryFn: async () => fetchData(pageNumber, pageSize),
  });
  return { demons: data, isLoading, ...rest };
};
