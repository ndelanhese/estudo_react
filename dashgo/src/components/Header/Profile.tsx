import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {/* Essa validação com && é como um if */}
      {showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Nathan Delanhese</Text>
          <Text color="gray.300" fontSize="small">
            ndelanhese@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size={["sm","md"]}
        name="Nathan Delanhese"
        src="https://github.com/ndelanhese.png"
      ></Avatar>
    </Flex>
  );
}
