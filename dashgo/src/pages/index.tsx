import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
type SignInFormData = {
  email: string;
  password: string;
};

const SignInFormSchema = yup.object({
  email: yup.string().required('E-mail obrigatório').email('E-mail invalido'),
  password: yup.string().required('Senha obrigatória'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });
  const errors = formState.errors;
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p={8}
        borderRadius="8"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
          id="email"
            type="email"
            name="email"
            label="Email"
            error={errors.email}
            {...register('email')}
          ></Input>
          

          <Input
          id="password"
            type="password"
            name="password"
            label="password"
            error={errors.password}
            //{...register("password", { required: "Senha Obrigatória" })}
            {...register('password')}
          ></Input>
        </Stack>
        <Button
          type="submit"
          mt={6}
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entry
        </Button>
      </Flex>
    </Flex>
  );
}
