import { Button, useTheme } from "@mui/material";
import FloatingActionButtons from "../components/Floating";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import Form from "../components/Form";

function Home() {
  const { toggleColorMode } = useContext(ColorModeContext);
  const theme = useTheme();
  const handleDarkMode = () => {
    toggleColorMode();
  };

  console.log(theme.palette.mode);
  return (
    <div className="flex flex-col  w-screen h-screen dark:bg-slate-700 bg-slate-300">
      <div>
        <FloatingActionButtons />
        <Button onClick={handleDarkMode}>Toggle</Button>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
}

export default Home;
