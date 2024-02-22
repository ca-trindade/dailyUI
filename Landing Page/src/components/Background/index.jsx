import { styled } from "@mui/system";

const imageURL =
  "https://images.pexels.com/photos/2439742/pexels-photo-2439742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
const Background = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  backgroundImage: `url(${imageURL})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
});

export default Background