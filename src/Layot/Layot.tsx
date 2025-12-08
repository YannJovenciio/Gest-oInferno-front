import { Box } from "@mui/material";
import { LayotHeader } from "./LayotHeader";
import { LayotFooter } from "./LayotFooter";

interface LayotProps {
  children: React.ReactNode;
}

export const Layot: React.FC<LayotProps> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        justifyContent: "left",
      }}
    >
      <header>
        <LayotHeader />
      </header>
      <main style={{ flex: "1%" }}>{children}</main>
      <footer>
        <LayotFooter />
      </footer>
    </Box>
  );
};
