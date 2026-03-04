import {
  Autocomplete,
  AutocompleteRenderInputParams,
  Box,
  Card,
  TextField,
  Typography,
} from "@mui/material";
import { GeorgianLariIcon } from "lucide-react";

interface StyledFormProps {}
export const StyledForm = () => {
  const options = [
    { label: "Demon Category 1", value: "category1" },
    { label: "Demon Category 2", value: "category2" },
    { label: "Demon Category 3", value: "category3" },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "3%",
        maxWidth: "100%",
        flexDirection: "column",
      }}
    >
      <Card>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              padding: "3%",
            }}
          >
            {" "}
            <GeorgianLariIcon />
            Demon management System
            <Typography variant="body1"></Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#af0404",
              padding: "2%",
              // maxWidth: "50%", // Removido para ocupar a largura disponível ou ajustar com margin
              width: "50%", // Define uma largura fixa relativa
              margin: "0 auto", // Centraliza o Box dentro do pai
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center", // Centraliza o texto horizontalmente dentro do Box
              borderRadius: "0",
            }}
          >
            <Typography
              variant="body2"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              Demon creating form
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              paddingLeft: "6%",
              flexDirection: "column",
            }}
          >
            <Typography sx={{textAlign:"left"}}>Select demon category</Typography>
            <Autocomplete
              renderInput={(params) => (
                <TextField {...params} label="Category" />
              )}
              options={options}
            ></Autocomplete>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
