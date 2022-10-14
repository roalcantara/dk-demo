import { ChakraProvider, VStack, theme } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { Tasks } from './tasks/Tasks'

export const App = () => (
  <ChakraProvider theme={theme}>
    <VStack spacing={8}>
      <Header />
      <Tasks />
    </VStack>
  </ChakraProvider>
)
