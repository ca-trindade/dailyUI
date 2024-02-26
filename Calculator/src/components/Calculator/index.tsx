import { useEffect, useState } from "react";
import { ButtonUI } from "../Button";
import { Button, Box, Stack } from "@mui/material";

type ArrayType = string[];

export const Calculator = () => {
  const [display, setDisplay] = useState<ArrayType>([]);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    document.title = `${result}`;
  }, [result]);

  const handleButtonClick = (value: string) => {
    if (value === "=") {
      const expression = display.join("");
      const newResult = eval(expression).toString();
      setResult(newResult);
      setDisplay([newResult]);
    } else {
      setDisplay((prevDisplay) => [...prevDisplay, value]);
    }
  };

  const copyToClipboard = (): Promise<void> => {
    const newString: string = display.toString().replace(/,/g, "");
    console.log(newString);
    return navigator.clipboard.writeText(newString);
  };

  const style = {
    color: "#b0bec5",
    border: 0,
    boxShadow: 10,
    padding: 3,
    borderRadius: 2,
    fontSize: 24,
    fontWeight: "bold",
    width: 8 / 12,
    height: "110px",
    marginLeft: 1,
    marginRight: 3,
  };

  return (
    <div>
      <Stack
        sx={{
          bgColor: "#b0bec5",
          height: 800,
          boxShadow: 15,
          borderRadius: 10,
          p: 3,
          gap: 1,
        }}
      >
        <Box
          sx={{
            height: 500,
            marginTop: 6,
          }}
        >
          <Button
            variant="outlined"
            children={result !== "" ? result : display.join("")}
            onClick={copyToClipboard}
            sx={style}
          />
          <ButtonUI
            children={"C"}
            onClick={() => {
              setDisplay([]);
              setResult("");
            }}
          />
        </Box>
        <Box>
          <ButtonUI children={7} onClick={() => handleButtonClick("7")} />
          <ButtonUI children={8} onClick={() => handleButtonClick("8")} />
          <ButtonUI children={9} onClick={() => handleButtonClick("9")} />
          <ButtonUI children={"/"} onClick={() => handleButtonClick("/")} />
        </Box>
        <Box>
          <ButtonUI children={4} onClick={() => handleButtonClick("4")} />
          <ButtonUI children={5} onClick={() => handleButtonClick("5")} />
          <ButtonUI children={6} onClick={() => handleButtonClick("6")} />
          <ButtonUI children={"x"} onClick={() => handleButtonClick("*")} />
        </Box>
        <Box>
          <ButtonUI children={1} onClick={() => handleButtonClick("1")} />
          <ButtonUI children={2} onClick={() => handleButtonClick("2")} />
          <ButtonUI children={3} onClick={() => handleButtonClick("3")} />

          <ButtonUI children={"+"} onClick={() => handleButtonClick("+")} />
        </Box>
        <Box
          sx={{
            marginBottom: 7,
          }}
        >
          <ButtonUI children={"."} onClick={() => handleButtonClick(".")} />
          <ButtonUI children={0} onClick={() => handleButtonClick("0")} />
          <ButtonUI children={"="} onClick={() => handleButtonClick("=")} />
          <ButtonUI children={"-"} onClick={() => handleButtonClick("-")} />
        </Box>
      </Stack>
    </div>
  );
};
