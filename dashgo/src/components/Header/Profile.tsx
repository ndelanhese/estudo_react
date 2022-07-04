import { Flex, Box, Avatar, Text } from '@chakra-ui/react';

export function Profile(){

    return(
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
    );
}