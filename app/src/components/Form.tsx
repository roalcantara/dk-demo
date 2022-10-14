import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { FormContainer } from './FormContainer'

export const Form = () => (
  <FormContainer>
    <FormControl isRequired>
      <FormLabel>First name</FormLabel>
      <Input name="" placeholder="First name" />
    </FormControl>
  </FormContainer>
)
