import { HStack, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";

export function NotificationNav() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <HStack
      spacing={["6", "8"]}
      mx={["6", "8"]}
      pr={["6", "8"]}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      {!isWideVersion && <Icon as={RiSearchLine} fontSize={["15","20"]} />}
      <Icon as={RiNotificationLine} fontSize={["15","20"]} />
      <Icon as={RiUserAddLine} fontSize={["15","20"]} />
    </HStack>
  );
}
