import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { Router } from "./Router/Router";
import { theme } from "./Theme/theme";
import { ThemeProvider } from "@emotion/react";
import Sidebar from "./components/Sidebar";
import { Box } from "@mui/material";
import { LayotFooter } from "./Layot/LayotFooter";

function App() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            backgroundColor: "#EBEBEB",
          }}
        >
          <Sidebar />

          <Router />
        </Box>
        <footer>
          <LayotFooter />
        </footer>
      </ThemeProvider>
    </FormProvider>
  );
}

export default App;
