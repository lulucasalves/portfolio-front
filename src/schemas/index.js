import * as yup from 'yup'

export const submitSchema = yup.object().shape({
  name: yup.string().required(''),
  email: yup.string().email(),
  cellphone: yup.string()
})
