import { AppBar, Button, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";

const Navbar = () => {
  const sxButton = {
    fontSize: "1.3rem",
  };

  return (
    <AppBar aria-label="navbar" display="flex">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          marginLeft: "200px",
          marginRight: "100px",
        }}
      >
        <Box sx={{ display: "flex", gap: "90px" }}>
          <Button href="" sx={sxButton}>
            Home
          </Button>
          <Button href="" sx={sxButton}>
            Projects
          </Button>
          <Button href="" sx={sxButton}>
            Contacts
          </Button>
        </Box>
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Button variant="outlined" sx={sxButton}>
            Login
          </Button>
          <Button variant="contained" sx={sxButton}>
            SignIn
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
