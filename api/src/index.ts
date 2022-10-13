require('dotenv').config()
import { seedDB } from './models'
import { db } from './app/db'
import { setup } from './app/server'

db.connect()
  .then(() => seedDB().then(() => setup()))
  .catch(() => process.exit())