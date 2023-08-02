export const onPasswordChange = (
  { target },
  setErrorMessage,
  setState,
  state
) => {
  setErrorMessage(null)
  target.name === 'password'
    ? setState({ ...state, password: target.value })
    : setState({ ...state, repeatPassword: target.value })
}
