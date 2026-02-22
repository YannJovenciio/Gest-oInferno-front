import { FetchApi } from "../../Utils/FetchApi";
import { DemonAnalytics, response } from "../../Models/DemonAnalytics";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (pageSize: number, pageNumber: number) => {
  const response = await FetchApi().get("DemonAnalytics", {
    params: { pageSize, pageNumber },
  });
  return response.data.data;
};
export const useGetDemonsAnalytics = (
  pageSize: number | undefined,
  pageNumber: number,
) => {
  const { data, isLoading, ...rest } = useQuery<response>({
    queryKey: ["Demon", "Analytics", pageNumber, pageSize],
    queryFn: async () => fetchData(pageSize ?? 10, pageNumber),
  });
  return { demonAnalytics: data, isLoading, ...rest };
};
