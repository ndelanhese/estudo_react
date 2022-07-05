import {
  Box,
  Divider,
  Flex,
  Heading,
  VStack,
  SimpleGrid,
  HStack,
  Button,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiCloseLine, RiSaveLine } from "react-icons/ri";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("E-mail obrigatório").email("E-mail invalido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "No mínimo 8 caracteres"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser identicas"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }

  return (
    <Box>
      <Header />
      <Flex w="100%" my={6} maxWidth={1480} mx="auto" px={6}>
        <Sidebar />

        <Box as="form" flex={1} borderRadius={8} bg="gray.800" p={[6, 8]} onSubmit={handleSubmit(handleCreateUser)}>
          <Heading size="lg" fontWeight="normal">
            Create user
          </Heading>
          <Divider my={6} borderColor="gray.700" />
          <VStack spacing={[6, 8]}>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input name="name" type="name" label="Name" {...register('name')} error={errors.name}/>
              <Input name="email" type="email" label="E-Mail"  {...register('email')} error={errors.email}/>
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={[6, 8]} w="100%">
              <Input name="password" type="password" label="Password"  {...register('password')} error={errors.password}/>
              <Input
                name="passwordConfirmation"
                type="password"
                label="Password confirmation"
                {...register('passwordConfirmation')}
                error={errors.passwordConfirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify="flex-end">
            <HStack spacing={4}>
              <Link href="/users" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  <Icon as={RiCloseLine} fontSize={16} mr={1} />
                  Cancel
                </Button>
              </Link>
              <Button colorScheme="pink" type="submit" isLoading={formState.isSubmitting}>
                <Icon as={RiSaveLine} fontSize={16} mr={1} />
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
