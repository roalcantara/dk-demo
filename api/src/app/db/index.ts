import { url, options } from './db.config'
import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

export const db = {
  log: (...msg: Array<string>) => console.log(`📦 [mongoose]: ${msg.join(" ")}`),
  err: (msg: string, error?: Error) => console.error(`📦 [mongoose]: ${msg}`, error),
  connect: async () => mongoose.connect(url, options).then(
    (instance) => { 
      db.log(`Connected to '${instance.connection.name}'!`)
      return instance
    },
    err => { 
      db.err("Cannot connect to the database!", err);
      throw err 
    }
  )
}