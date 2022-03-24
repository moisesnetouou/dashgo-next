import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Moisés Neto</Text>
        <Text color="gray.300" fontSize="sm">
          moises@teste.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Moisés Neto"
        src="https://avatars.githubusercontent.com/u/39030702?v=4"
      />
    </Flex>
  );
}
