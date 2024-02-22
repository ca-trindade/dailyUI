import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Background from "./components/Background";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Background>
          <header>
            <Navbar />
          </header>
          <main>
            <Body />
          </main>
          <footer>
            <Footer />
          </footer>
        </Background>
      </ThemeProvider>
    </>
  );
}

export default App;
