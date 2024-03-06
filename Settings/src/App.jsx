import { Container, Flex } from "@radix-ui/themes";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import MainPanel from "./components/MainPanel";
import InfoPanel from "./components/InfoPanel";

function App() {
  return (
    <Flex direction="row" gap="9" style={{ flexWrap: "wrap" }}>
      <Container mx="7">
        <LeftPanel />
      </Container>
      <Container mx="7">
        <MainPanel />
      </Container>
      <Container mx="auto">
        <InfoPanel />
      </Container>
    </Flex>
  );
}

export default App;
