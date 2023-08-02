import { REGEXP_PASS, REGEXP_EMAIL } from '../constants.js'
import { SendData } from '../send-data.js'

export const onSubmit = (e, setErrorMessage, state) => {
  e.preventDefault()
  const { email, password, repeatPassword } = state
  let error = null

  if (!REGEXP_EMAIL.test(email) || email === '') {
    error = 'Неверный адрес электронной почты.'
  } else if (!REGEXP_PASS.test(password) || password === '') {
    error =
      'Неверный пароль. Пароль должен содержать от 3 до 10 символов, в нем можно использовать только цифры и любые буквы латинского алфавита.'
  } else if (!REGEXP_PASS.test(repeatPassword) || repeatPassword === '') {
    error =
      'Неверный пароль. Пароль должен содержать от 3 до 10 символов, в нем можно использовать только цифры и любые буквы латинского алфавита.'
  } else if (password !== repeatPassword) {
    error = 'Пароли не совпадают'
  }
  if (!error) {
    SendData(state)
  }
  setErrorMessage(error)
}
