import { Button, FormControl, HStack, Input } from '@chakra-ui/react'
import { FormEventHandler, useState } from 'react'

type TaskAddProps = {
  onCreate: (title: string) => Promise<void>
}

export const TaskAdd = ({ onCreate }: TaskAddProps) => {
  const [title, setTitle] = useState('')
  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onCreate(title)
    setTitle('')
  }

  return (
    <form onSubmit={onSubmit}>
      <HStack>
        <FormControl isRequired>
          <Input
            name="title"
            variant="filled"
            placeholder="Todo.."
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="pink" px="8" type="submit">
          Add
        </Button>
      </HStack>
    </form>
  )
}
