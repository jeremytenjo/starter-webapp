import { object, string, number, array } from 'yup'

const userSchema = object().shape({
  _id: string(),
  displayName: string(),
  phone_number: number(),
  location: string(),
  categories: array(),
  rating: number(),
  photoURL: string(),
  email: string(),
})

const validateAgainstUserSchema = async ({ ...values }) =>
  await userSchema.isValid({
    ...values,
  })

export default validateAgainstUserSchema
