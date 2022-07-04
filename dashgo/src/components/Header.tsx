import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import {
  RiNotificationLine,
  RiSearchLine,
  RiUserAddLine,
} from "react-icons/ri";
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="3"
      px="6"
      align="center"
    >
      <Link href="/dashboard" target="_blank">
        <a>
          <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
            dashgo
            <Text color="pink.500" as="span" ml="1">
              .
            </Text>
          </Text>
        </a>
      </Link>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxWidth={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full"
      >
        <Input
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na Plataforma"
          _placeholder={{ color: "gray.400" }}
          mr="4"
          px="4"
        />

        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr={4} textAlign="right">
            <Text>Nathan Delanhese</Text>
            <Text color="gray.300" fontSize="small">
              ndelanhese@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Nathan Delanhese"
            src="https://github.com/ndelanhese.png"
          ></Avatar>
        </Flex>
      </Flex>
    </Flex>
  );
}
