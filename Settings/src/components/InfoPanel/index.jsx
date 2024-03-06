import { Box, Flex, Text } from "@radix-ui/themes";

export default function InfoPanel() {
  return (
    <>
      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)",
          maxWidth: "400px",
          marginTop: "25%",
        }}
      >
        <Flex direction="column" style={{ padding: "20px" }}>
          <Text as="p" size="2" color="gray">
            Additional Information
          </Text>
          <Text as="p" size="1" color="gray" style={{ marginTop: "5%" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            corporis illo dolore quos porro explicabo, enim incidunt saepe
            aliquam repellat repellendus sint nihil ducimus reprehenderit
            delectus impedit similique repudiandae atque.
          </Text>
        </Flex>
      </Box>
    </>
  );
}
