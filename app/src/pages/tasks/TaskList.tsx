import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  VStack,
  StackDivider,
  List,
  ListIcon,
  ListItem
} from '@chakra-ui/react'
import { Task } from '../../app/services/TaskService'

type TaskListProps = {
  tasks: Task[]
  onDone: (id: string) => Promise<void>
}

export const TaskList = ({ tasks, onDone }: TaskListProps) => (
  <VStack
    divider={<StackDivider />}
    borderColor="gray.100"
    borderWidth="2px"
    p="4"
    borderRadius="lg"
    w="100%"
    maxW={{ base: '40vw', md: '50vw', lg: '60vw', xl: '70vw' }}
    alignItems="stretch"
  >
    <List spacing={3}>
      {tasks.map(item => (
        <ListItem key={item.id}>
          <ListIcon
            onClick={() => onDone(item.id)}
            as={CheckCircleIcon}
            color="green.500"
          />
          {item.title}
        </ListItem>
      ))}
    </List>
  </VStack>
)
