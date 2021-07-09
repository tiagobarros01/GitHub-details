import { Flex } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

export function BackTo() {
  return (
    <Flex
      position="fixed"
      bottom="5"
      left="5"
      width="50px"
      height="50px"
      backgroundColor="purple.500"
      justifyContent="center"
      alignItems="center"
      borderRadius="xl"
      cursor="pointer"
      _hover={{ backgroundColor: "purple.600" }}
      transition="background 200ms"
    >
      <ArrowBackIcon color="white" w={6} h={6} />
    </Flex>
  );
}
