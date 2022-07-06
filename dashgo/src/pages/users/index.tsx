import {
  Box,
  Button,
  ButtonSpinner,
  Checkbox,
  Flex,
  Heading,
  Icon,
  IconButton,
  Link,
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
import NextLink from "next/link";
import { getUsers, useUsers } from "../../services/hooks/useUsers";
import { useState } from "react";
import { queryClient } from "../../services/queryClient";
import { api } from "../../services/api";
import { GetServerSideProps } from "next";

export default function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isFetching, error } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(
      ["user", userId],
      async () => {
        const response = await api.get(`users/${userId}`);

        return response.data;
      },
      {
        staleTime: 1000 * 60 * 10, //10 minutes
      }
    );
  }

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

            <NextLink href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Create user
              </Button>
            </NextLink>
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
                  {data.users.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td px={["4", "4", "6"]}>
                          <Box>
                            <Link
                              color="pink.400"
                              onMouseEnter={() => handlePrefetchUser(user.id)}
                            >
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>
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
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage}
              />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

// Utilizar o ssr

// export const getServerSideProps: GetServerSideProps = async () => {

//   const {users, totalCount} = await getUsers(1)

//   return {
//     props: {
//       users,
//     }
//   }
// }