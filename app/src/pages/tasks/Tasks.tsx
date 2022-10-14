import { useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Task, getAll, setDone, addTask } from '../../app/services/TaskService'
import { TaskAdd } from './TaskAdd'
import { TaskList } from './TaskList'

export const Tasks = () => {
  const toast = useToast()
  const show = (type: 'success' | 'error', message: string) =>
    toast({
      title: message,
      status: type,
      duration: 1000,
      isClosable: true
    })
  const success = (message: string) => show('success', message)
  const warn = (message: string) => show('error', message)
  const [items, setItems] = useState<Task[]>([])

  useEffect(() => {
    getAll()
      .then(data => setItems(data))
      .catch(err => console.log(err.message))
  }, [setItems])

  const handleDone = async (id: string) => {
    setDone(id)
      .then(() => {
        setItems(items.filter(item => item.id !== id))
        success('Task done!')
      })
      .catch(err => warn(err.message))
  }

  const handleCreate = async (title: string) => {
    addTask(title)
      .then(task => {
        setItems([...items, task])
        success('Task Created!')
      })
      .catch(err => warn(err.message))
  }

  return (
    <>
      <TaskList tasks={items} onDone={handleDone} />
      <TaskAdd onCreate={handleCreate} />
    </>
  )
}
