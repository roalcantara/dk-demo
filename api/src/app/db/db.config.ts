import { ConnectOptions } from 'mongoose'

export const {
  DB_USR,
  DB_PWD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
} = process.env;

export const url = `mongodb://${DB_USR}:${DB_PWD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

/**
 * Mongoose connection options
 */
export const options: ConnectOptions = {
  bufferCommands: true, /** Set to false to [disable buffering](http://mongoosejs.com/docs/faq.html#callback_never_executes) on all models associated with this connection. */
  dbName: DB_NAME, /** The name of the database you want to use. If not provided, Mongoose uses the database name from connection string. */
  user: DB_USR, /** username for authentication, equivalent to `options.auth.user`. Maintained for backwards compatibility. */
  pass: DB_PWD, /** password for authentication, equivalent to `options.auth.password`. Maintained for backwards compatibility. */
  autoIndex: true, /** Set to false to disable automatic index creation for all models associated with this connection. */
  autoCreate: true /** Set to `true` to make Mongoose automatically call `createCollection()` on every model created on this connection. */
}