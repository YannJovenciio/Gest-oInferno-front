import { useState } from "react";
import { useGetDemons } from "../../Api/useGetDemons";
import { useGetDemonsAnalytics } from "./useGetDemonsAnalytics";
import { FormFields } from "../../Models/FormFields";
import { useDemonTableData } from "../../Hooks/useDemonTableData/useDemonTableData";

export const useDemonList = () => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);
  const [searchValue, setSearchValue] = useState("");

  const {
    demons: DemonsList,
    isLoading: isLoadingDemons,
    error: errorDemons,
  } = useGetDemons(pageSize, pageNumber);

  const {
    demonAnalytics: DemonsAnalyticsList,
    isLoading: isLoadingAnalytics,
    error: errorAnalytics,
  } = useGetDemonsAnalytics(pageSize, pageNumber);

  const { orderedDemons } = useDemonTableData({
    DemonAnalytics: DemonsAnalyticsList ?? [],
    Demons: DemonsList ?? [],
  });

  const filteredOptions = orderedDemons?.filter((item) =>
    item.Demon.demonName
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase()),
  );

  const fields: FormFields[] = [
    {
      label: "Enter demon name",
      textTitle: "Demon Name",
      value: "demonName",
    },
    {
      label: "Enter demon category",
      textTitle: "Demon Category",
      value: "demonCategory",
    },
  ];
  return {
    fields,
    filteredOptions,
    orderedDemons,
    pageSize,
    pageNumber,
    setPageNumber,
    setSearchValue,
    isLoadingDemons,
    errorDemons,
    isLoadingAnalytics,
    errorAnalytics,
    DemonsAnalyticsList,
  };
};
