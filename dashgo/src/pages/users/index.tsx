import {
  Box,
  Button,
  ButtonSpinner,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Spinner,
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
import Link from "next/link";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const { data, isLoading, isFetching, error } = useUsers();

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
              {isFetching ? "" : "Users"}

              {!isLoading && isFetching && (
                <ButtonSpinner color="gray.500" ml={4} />
              )}
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Create user
              </Button>
            </Link>
          </Flex>

          {isLoading ? (
            <Flex justify={"center"}>
              {" "}
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={"center"}>
              {" "}
              <Text>Falha ao obter os dados</Text>
            </Flex>
          ) : (
            <>
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
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px={["4", "4", "6"]}>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && (
                          <Td px={["4", "4", "6"]}>{user.createdAt}</Td>
                        )}
                        <Td>
                          {isWideVersion ? (
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="pink"
                              bg="pink.400"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize={16} />
                              }
                            >
                              Edit
                            </Button>
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
                    );
                  })}
                </Tbody>
              </Table>
              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
