import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetListCavern = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ["GetListCavern"],
    queryFn: async () => {
      const response = await axios.get("/api/caverns");
      return response.data;
    },
  });
  return { data, isLoading };
};
