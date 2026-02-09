import { useSuspenseQuery } from "@tanstack/react-query";
import { FetchApi } from "../../Utils/FetchApi";
import { Demon } from "../../interfaces/Demon";

const fetchData = async () => {
  // O endpoint no backend é "api/Demon" (singular por padrão do [controller]),
  // mas o frontend estava chamando "demons". Ajustando para "Demon".
  const response = await FetchApi("Demon").get("/");
  return response.data.data;
};
export const useListDemons = () => {
  const { data, isLoading, ...rest } = useSuspenseQuery<Demon[]>({
    queryKey: ["ListDemons"],
    queryFn: () => fetchData(),
  });
  return { demons: data, isLoading, ...rest };
};
