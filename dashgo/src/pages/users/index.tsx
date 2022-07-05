import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Sidebar } from "../../components/Sidebar";
import { Pagination } from "../../components/Pagination";
import { Header } from "../../components/Header";
export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Flex mb={8} justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Users
            </Heading>

            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
            >
              Create user
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w={8}>
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>User</Th>
                {isWideVersion && <Th>Registration date</Th>}
                <Th w={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td px={["4", "4", "6"]}>
                  <Box>
                    <Text fontWeight="bold">Nathan Delanhese</Text>
                    <Text fontSize="sm" color="gray.300">
                      ndelanhese@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isWideVersion && (
                  <Td px={["4", "4", "6"]}>04 de Abril, 2021</Td>
                )}
                <Td>
                  {isWideVersion ? (
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="pink"
                      bg="pink.400"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    >Edit</Button>
                  ) : (
                    <IconButton
                      aria-label="Edit user"
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="pink"
                      bg="pink.400"
                    >
                      <Icon as={RiPencilLine} fontSize={16} />
                    </IconButton>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
