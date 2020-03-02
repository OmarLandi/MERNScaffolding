import mongoose from 'mongoose';
import Joi from '@hapi/joi';
import * as yup from 'yup';

const Schema = mongoose.Schema;

const exampleSchema = new Schema({
  description: String,
  responsible: String,
  priority: String,
  completed: Boolean
});

const validationSchema = function (method) {
  return {
    description: method.string(),
    responsible: method.string(),
    priority: method.string(),
    completed: method.boolean()
  }
}

exampleSchema.methods.serverValidate = function(obj) {
  const JoiSchema = Joi.object().keys(
    validationSchema(Joi)
  )

  return JoiSchema.validate(obj)
}

exampleSchema.methods.clientValidate = function(obj) {
  const YupSchema = yup.object().shape(
    validationSchema(yup)
  )

  return YupSchema.validate(obj)
}

const Example  = mongoose.model('example', exampleSchema)

export default Example
