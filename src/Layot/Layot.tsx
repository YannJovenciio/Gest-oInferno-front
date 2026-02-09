import { Box } from "@mui/material";
import { LayotFooter } from "./LayotFooter";
import { LayotHeader } from "./LayotHeader";

interface LayotProps {
  children?: React.ReactNode;
}

export const Layot: React.FC<LayotProps> = ({ children }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          minHeight: "100vh",
          justifyContent: "left",
        
        }}
      >
        <LayotHeader></LayotHeader>
        <main style={{ flex: "1%" }}>{children}</main>
      </Box>
      <footer>
        <LayotFooter />
      </footer>
    </Box>
  );
};
