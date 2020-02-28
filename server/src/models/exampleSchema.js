import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  description: {
    type: String
  },
  responsible: {
    type: String
  },
  priority: {
    type: String
  },
  completed: {
    type: Boolean
  }
});

const Example = mongoose.model('example', exampleSchema);

export default Example
