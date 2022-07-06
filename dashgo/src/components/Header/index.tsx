import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import {  RiMenuLine, RiSearchLine } from "react-icons/ri";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationNav } from "./NotificationNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
  const { onOpen } = useSidebarDrawer();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="3"
      px={["4", "4","6"]}
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open Navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
          mr={2}
          mt={2}
        ></IconButton>
      )}

      <Logo showProfileData={isWideVersion} />
      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
              <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
