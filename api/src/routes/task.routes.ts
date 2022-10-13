import { Router } from 'express'
import { taskController as controller } from '../controllers'

export const taskRoutes = Router()
  .post('/', controller.create)
  .get('/', controller.findAllPending)
  .get('/all', controller.findAll)
  .get('/:id', controller.findOne)
  .put('/:id', controller.update)
  .delete('/:id', controller.delete)
  .delete('/', controller.deleteAll)
