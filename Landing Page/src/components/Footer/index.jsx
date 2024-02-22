import { Box, Button, ButtonGroup, Stack, TextField } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Stack
        borderTop={1}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 15, lg: 25 }}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        height={180}
        flexWrap="wrap"
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ButtonGroup
            color="secondary"
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            <Button href="#" variant="subtitle1">
              About Career
            </Button>
            <Button href="#" variant="subtitle1">
              Features
            </Button>
            <Button href="#" variant="subtitle1">
              Careers
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ButtonGroup
            color="secondary"
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            <Button href="#" variant="subtitle1">
              Pricing
            </Button>
            <Button href="#" variant="subtitle1">
              Partnerships
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <ButtonGroup
            color="secondary"
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            <Button href="#" variant="subtitle1">
              Help center
            </Button>
            <Button href="#" variant="subtitle1">
              Privacy
            </Button>
            <Button href="#" variant="subtitle1">
              Blog
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button href="#" size="large">
            We`d love to hear from you
          </Button>
        </Box>
        <Box>
          <Stack direction={"row"}>
            <TextField label="Email" type="email" value="email" size="small" />
            <Button type="button" variant="contained">
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Footer;
