import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button, Icon } from "@chakra-ui/react";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <Box flex={1} borderRadius={8} bg="gray.800" p={8}>
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>
          <Divider my={6} borderColor="gray.700" />
          <VStack spacing={8}>
          <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input name="name" label="Name" />
            <Input name="email" type="email" label="E-Mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={8} w="100%">
            <Input name="password" type="password" label="Password" />
            <Input name="passwordConfirmation" type="password" label="Password confirmation" />
            
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify="flex-end"> 
    <HStack spcing={4}>
<Button colorScheme="whiteAlpha">
    <Icon as={RiCloseLine} fontSize={16} mr={1}/>
Cancel
</Button><Button colorScheme="pink">
<Icon as={RiSaveLine} fontSize={16} mr={1}/>    
Save

</Button>
    </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
