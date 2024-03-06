import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  TextFieldInput,
} from "@radix-ui/themes";

export default function MainPanel() {
  return (
    <>
      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
          marginTop: "10%",
          padding: "50px",
        }}
      >
        <Flex direction="column">
          <Heading as="h1" size="5">
            Settings
          </Heading>
          <Heading as="h2" size="7" ml="2" style={{ marginTop: "8px" }}>
            Account
          </Heading>
          <Box style={{ marginTop: "5%" }}>
            <Flex
              direction="column"
              style={{ marginTop: "5%", maxWidth: "350px" }}
            >
              <Heading as="h4" size="4" ml="2" style={{ marginBottom: "8px" }}>
                Email
              </Heading>
              <TextFieldInput type="email" placeholder="email@email.com" />
            </Flex>

            <Flex
              direction="column"
              style={{ marginTop: "8%", maxWidth: "350px" }}
            >
              <Heading as="h4" size="4" ml="2" style={{ marginBottom: "8px" }}>
                Username
              </Heading>
              <TextFieldInput placeholder="User3576" />
            </Flex>

            <Flex direction="column" style={{ marginTop: "8%" }}>
              <Heading as="h4" size="4" ml="2" style={{ marginBottom: "8px" }}>
                Language
              </Heading>

              <SelectRoot defaultValue="English">
                <SelectTrigger style={{ maxWidth: "350px" }} />
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Portuguese">Portuguese</SelectItem>
                    <SelectItem value="Galician">Galician</SelectItem>
                    <SelectItem value="Spanish">Spanish</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </SelectRoot>
            </Flex>
            <Flex
              direction="column"
              style={{ marginTop: "8%", maxWidth: "350px" }}
            >
              <Heading as="h4" size="4" ml="2" style={{ marginBottom: "8px" }}>
                Country
              </Heading>
              <TextFieldInput size="2" placeholder="Portugal" />
            </Flex>

            <Flex direction="column" style={{ minWidth: 450, marginTop: "8%" }}>
              <Heading as="h4" size="4" ml="2" style={{ marginBottom: "15px" }}>
                Social Accounts
              </Heading>
              <Grid columns="4" gap="3">
                <Button>Linkdin</Button>
                <Button>Github</Button>
                <Button>Facebook</Button>
                <Button>X</Button>
              </Grid>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
