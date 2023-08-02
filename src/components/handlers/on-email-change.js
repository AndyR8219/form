export const onEmailChange = (e, setErrorMessage, setState, state) => {
  setErrorMessage(null)
  setState({ ...state, email: e.target.value })
}
