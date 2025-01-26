import { ThemeProvider } from "@mui/material";
import { useMode, ColorModeContext } from "./theme";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  const { theme, colorMode } = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
