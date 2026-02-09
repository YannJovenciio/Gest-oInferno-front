import { Box } from "@mui/material";
import { useListDemons } from "../Demons/useListDemons";

export const ListCavern = () => {
  const { demons } = useListDemons();
  return <Box>List Cavern Page</Box>;
};
