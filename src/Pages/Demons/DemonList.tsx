import { Typography } from "@mui/material";
import { useListDemons } from "./useListDemons";

export const DemonList = () => {
  const { demons } = useListDemons();
  console.log("DemonList render", demons);
  return (
    <>
      <Typography variant="h4">Lista de demonios</Typography>
      {demons &&
        demons.map((demon) => (
          <Typography key={demon.IdDemon}>{demon.DemonName}</Typography>
        ))}
    </>
  );
};
