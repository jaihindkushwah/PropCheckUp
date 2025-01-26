import { IconButton, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useContext } from "react";
import { ColorModeContext } from "../theme";
import { Person } from "@mui/icons-material";

function Header() {
  const theme = useTheme();
  const { toggleColorMode } = useContext(ColorModeContext);
  return (
    <header className="flex justify-between px-4 w-full">
      <div>{/* <IconButton>Logo</IconButton> */}</div>
      <div className="justify-self-end">
        {theme.palette.mode === "dark" ? (
          <IconButton title="Light Mode" onClick={toggleColorMode}>
            <LightModeIcon />
          </IconButton>
        ) : (
          <IconButton title="Dark Mode" onClick={toggleColorMode}>
            <DarkModeIcon />
          </IconButton>
        )}
        <IconButton>
          <Person />
        </IconButton>
      </div>
    </header>
  );
}

export default Header;
