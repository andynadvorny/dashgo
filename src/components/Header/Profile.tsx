import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Andy Nadvorny</Text>
          <Text color="gray.300" fontSize="small">andynadvorny@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Andy Nadvorny" src="https://github.com/andynadvorny.png" />
    </Flex>
 )
}