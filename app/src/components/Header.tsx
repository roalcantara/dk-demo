import { Flex, HStack, Text } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'

export const Header = () => (
  <Flex
    as="header"
    w="100%"
    maxW={1120}
    h="20"
    mx="auto"
    p="6"
    bg="gray.800"
    color="white"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <Text fontSize="3xl" fontWeight="extrabold">
      Tasks
    </Text>
    <Flex ml="auto">
      <HStack spacing="4">
        <ColorModeSwitcher />
      </HStack>
    </Flex>
  </Flex>
)
