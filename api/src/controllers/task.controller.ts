import { Request, Response } from 'express'
import { status, created, ok, okOr } from './actions.controller'
import { Task } from '../models/task.model'

export const taskController = {
  /**
   * Create a new instance
   */
  create: (req: Request, res: Response) => {
    // Validate request
    if (!req.body.title) return status(res).unprocessableEntity('Content can not be empty!')

    // Save in database
    return created(res, () =>
      Task.create(
        new Task({
          title: req.body.title,
          description: req.body.description,
          done: req.body.done ?? null
        })
      )
    )
  },
  /**
   * Retrieve all from the database
   */
  findAll: (req: Request, res: Response) => {
    const title = req.query.title?.toString()
    const condition = title
      ? { title: { $regex: new RegExp(title), $options: 'i' } }
      : {}

    return ok(res, () => Task.find(condition))
  },
  /**
   * Find the specified id
   */
  findOne: (req: Request, res: Response) => {
    const id = req.params.id

    return okOr(res, () => Task.findById(id), { err: `Not found instance with id ${id}` })
  },
  /**
   * Update the specified id
   */
  update: (req: Request, res: Response) => {
    const id = req.params.id
    if (!req.body || !id) return status(res).unprocessableEntity('Data to update can not be empty!')

    return okOr(res, () => Task.findByIdAndUpdate(id, req.body, { useFindAndModify: false }), {
      success: `${id} was updated successfully!`,
      err: `Cannot update instance with id=${id}. Maybe instance was not found!`
    })
  },
  /**
   * Delete the specified id
   */
  delete: (req: Request, res: Response) => {
    const id = req.params.id
    if (!id) return status(res).unprocessableEntity('Id can not be empty!')

    return okOr(res, () => Task.findByIdAndRemove(id, { useFindAndModify: false }), {
      success: `${id} deleted successfully.`,
      err: `Cannot delete instance with id=${id}. Maybe instance was not found!`
    })
  },
  /**
   * Delete all from the database.
   */
  deleteAll: (_: Request, res: Response) => {
    return Task.deleteMany({})
      .then(data =>
        status(res).ok(
          `${data.deletedCount} records were deleted successfully!`
        )
      )
      .catch(status(res).internalServerError())
  },
  /**
   * Find all pending
   */
  findAllPending: (_: Request, res: Response) => {
    return ok(res, () => Task.find({ done: false }))
  }
}
