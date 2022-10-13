import { Response } from 'express'
import { isPromise } from 'util/types'

type On = {
  success?: string
  err?: string
}

type Responses = {
  internalServerError: (msg?: string) => (err: Error) => Response
  notFound: (msg?: string) => Response
  created: (data: any) => Response
  ok: (data: any) => Response
  unprocessableEntity: (msg?: string) => Promise<Response>
  okOr: (msgs: On) => <T>(data: T) => Response
}

export const status = (res: Response): Responses => ({
  internalServerError:
    (msg = 'Some error occurred while retrieving instances!') =>
    (err: Error) =>
      res.status(500).send({ message: err.message || msg }),
  notFound: (msg = 'Resource not found!') =>
    res.status(404).send({ message: msg }),
  created: (data: any) => res.status(201).send(data),
  ok: (data: any) => res.send(data),
  unprocessableEntity: (msg = 'Validation failed!') =>
    Promise.resolve(res.status(422).send({ message: msg })),
  okOr:
    ({ success, err = 'Resource not found!' } : On) =>
    <T>(data: T) => {
      if (data) {
        if (success) return res.status(200).send({ message: success })
        else return res.status(200).send(data)
      } else return status(res).notFound(err)
    }
})

type Block<T> = (response: Responses) => Promise<T>
type Blocky<T> = (response: Responses) => T

const isBlock = <T>(value: any): value is Block<T> => isPromise(value)

const withRes = <T>(res: Response, block: Block<T>) => {
  const response = status(res)

  return block(response).catch(response.internalServerError())
}

export const created = <T>(res: Response, block: Block<T>) =>
  withRes(res, status => block(status).then(status.created))

export const ok = <T>(res: Response, block: Block<T> | Blocky<T>) =>
  isBlock(block) ? withRes(res, status => block(status).then(status.ok))
  : withRes(res, status => Promise.resolve(block(status)).then(status.ok))

export const okOr = <T>(res: Response, block: Blocky<T>, msgs: On) =>
  withRes(res, status => Promise.resolve(block(status)).then(status.okOr(msgs)))
