import { Flex, Heading, Link, Separator } from "@radix-ui/themes";

export default function LeftPanel() {
  return (
    <>
      <Flex direction="column" style={{ marginTop: "25%" }}>
        <Heading as="h3" size="5">
          General Profile
        </Heading>

        <Flex direction="column" gap="5" style={{ marginTop: "30%" }}>
          <Link href="" ml="3">
            General
          </Link>
          <Separator orientation="horizontal" size="4" />
          <Link href="" ml="3">
            Account
          </Link>
          <Separator orientation="horizontal" size="4" />
          <Link href="" ml="3">
            Notifications
          </Link>
          <Separator orientation="horizontal" size="4" />
          <Link href="" ml="3">
            Performance
          </Link>
          <Separator orientation="horizontal" size="4" />
          <Link href="" ml="3">
            Privacy
          </Link>
          <Separator orientation="horizontal" size="4" />
          <Link href="" ml="3">
            Advanced Settings
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
