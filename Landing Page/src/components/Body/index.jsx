import { Button, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
const Body = () => {
  const theme = createTheme({
    typography: {
      h1: {
        color: grey[900],
        fontWeight: 600,
      },
      h3: {
        color: grey[900],
        fontWeight: 400,
      },
      subtitle1: {
        color: grey[500],
        fontSize: 22,
        fontWeight: 400,
      },
      button: {
        width: 200,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Stack marginTop={20} marginLeft={28} width={1000} height={700}>
          <Typography variant="h3">Lorem ipsum dolor</Typography>
          <Typography variant="h1">
            Recusandae debitis neque cumque quidem iusto ipsum ipsa temporibus
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Dolorum laborum qui molestias ab quod, repellendus rem atque,
            dignissimos, tempore facere placeat. Similique!
          </Typography>
          <Button variant="contained" color="secondary">
            Get started
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
};

export default Body;
