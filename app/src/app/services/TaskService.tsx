import { getData, putData, postData, deleteData } from '../helpers/http.helper'

const config = {
  API_HOST: process.env.REACT_APP_API_HOST ?? 'localhost',
  API_PORT: process.env.REACT_APP_API_PORT ?? '3001',
  endpoint: (...sections: Array<string>) =>
    [`http://${config.API_HOST}:${config.API_PORT}/api`, ...sections].join('/')
}

const endpoints = {
  tasks: (...sections: Array<string>) => config.endpoint('tasks', ...sections)
}

export type Task = {
  id: string
  title: string
  description: string
  done: boolean
}

export const getAll = async (): Promise<Task[]> => getData(endpoints.tasks())

export const setDone = async (id: string): Promise<Task> =>
  putData(endpoints.tasks(id), {
    done: true
  })

export const addTask = async (title: string): Promise<Task> =>
  postData(endpoints.tasks(), {
    title,
    done: false
  })

export const deleteTask = async (id: string): Promise<Task> =>
  deleteData(endpoints.tasks(id))
