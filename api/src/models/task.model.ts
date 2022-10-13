import { Schema, model } from 'mongoose'

// 1. Create an interface representing a document in MongoDB.
interface ITask {
  title: string
  description?: string
  done?: boolean
}

// 2. Create a Schema corresponding to the document interface.
const todoSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String, required: false },
  done: { type: Boolean, required: false }
}, {  timestamps: true })

todoSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

// 3. Create a Model.
export const Task = model<ITask>('Task', todoSchema)

const seeds: Array<ITask> = [
  { title: "Hit the gym", done: false },
  { title: "Pay Bills", done: false },
  { title: "Buy Eggs", done: false },
  { title: "Read a book", done: false }
]

export const seedDB = async () => {
  const count = await Task.countDocuments()
  if (count === 0) {
    await Task.insertMany(seeds)
  }
}