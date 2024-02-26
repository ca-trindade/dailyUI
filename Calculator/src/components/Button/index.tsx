import Button from "@mui/material/Button";
import { FunctionComponent } from "react";

interface ButtonProps {
  children: number | string;
  onClick?: () => void;
}

import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#455a64",
      main: "#37474f",
      dark: "#263238",
      contrastText: "#b0bec5",
    },
    secondary: {
      light: "#757ce8",
      main: "#3f50b5",
      dark: "#002884",
      contrastText: "#fff",
    },
  },
  shape: {
    borderRadius: 30,
  },
});

const style = {
  boxShadow: 5,
  padding: 3,
  m: 1,
  fontSize: 24,
  fontWeight: "bold",
  width: 90,
  height: 110,
};

export const ButtonUI: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        aria-label="Medium-sized button group"
        onClick={onClick}
        border-radius={50}
        sx={style}
      >
        {children}
      </Button>
    </ThemeProvider>
  );
};
