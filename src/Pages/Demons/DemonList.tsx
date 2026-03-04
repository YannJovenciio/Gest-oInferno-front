import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { DemonAccordionDetails } from "../../components/Accordion/DemonAccordionDetails";
import { LoaderCircle, X } from "lucide-react";
import { InputForm } from "../../components/InputForm/InputForm";
import { useDemonList } from "./useDemonList";
import { FormButton } from "../../components/FormButton/FormButton";
import { MouseEvent } from "react";

export const DemonList = () => {
  const {
    fields,
    filteredOptions,
    setSearchValue,
    isLoadingDemons,
    errorDemons,
    isLoadingAnalytics,
    errorAnalytics,
    pageSize,
    DemonsAnalyticsList,
    pageNumber,
    setPageNumber,
  } = useDemonList();
  const theme = useTheme();

  if (!DemonsAnalyticsList) {
    return (
      <>
        <Typography>Nenhum demon encontrado...</Typography>
      </>
    );
  }

  if (isLoadingDemons || isLoadingAnalytics) {
    return (
      <>
        <Typography>Carregando demons...</Typography>
        <LoaderCircle />
      </>
    );
  }
  if (errorDemons || errorAnalytics) {
    return (
      <>
        <Typography>Error ao carregar demons...</Typography>
        <X />
      </>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "3%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "100%",
          gap: "8px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: "left", fontFamily: "Playfair Display, serif" }}
            >
              Demon Registry
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "left", fontFamily: "Merriweather, serif" }}
            >
              Manage infernal entities and their performance.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "right" }}>
            <FormButton
              text={"Register Entity"}
              BgColor={theme.palette.primary.main}
              fontColor={theme.palette.primary.contrastText}
              onClick={function (
                event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
              ): void {
                // TODO: Implementar navegação para página de criar novo demon
                console.log("Navigate to create demon form");
              }}
              fontWeight={""}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <Autocomplete
          sx={{ width: "50%", boxSizing: "border-box" }}
          renderInput={(params) => (
            <TextField {...params} label="Enter demon name to search" />
          )}
          options={
            DemonsAnalyticsList.map(
              (Demon) => Demon.demonName,
            ) ?? []
          }
          onInputChange={(event, value) => {
            setSearchValue(value);
          }}
          noOptionsText="Sem demonios encontrados para esse nome"
        />
        <Box>
          <DemonAccordionDetails
            Analytics={filteredOptions}
            pageSize={pageSize}
            pageNumber={pageNumber}
            onPageChange={(newPage) => setPageNumber(newPage)}
            totalItems={DemonsAnalyticsList.length}
          />
        </Box>
      </Box>
      <InputForm fields={fields} />
    </Box>
  );
};
