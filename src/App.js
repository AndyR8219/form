import styles from './App.module.css'
import { useState, useRef, useEffect } from 'react'
import {
  onEmailChange,
  onPasswordChange,
  onSubmit,
} from './components/handlers'

function App() {
  const [state, setState] = useState({
    email: '',
    password: '',
    repeatPassword: '',
  })
  const [errorMessage, setErrorMessage] = useState(null)
  const submitButtonRef = useRef(null)
  const { email, password, repeatPassword } = state

  useEffect(() => {
    if (repeatPassword === password && password !== '') {
      submitButtonRef.current.focus()
    }
  }, [password, repeatPassword])

  return (
    <div className={styles.app}>
      <form
        className={styles.form}
        onSubmit={(e) => onSubmit(e, setErrorMessage, state)}
      >
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Почта"
          onChange={(e) => onEmailChange(e, setErrorMessage, setState, state)}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Пароль"
          onChange={(e) =>
            onPasswordChange(e, setErrorMessage, setState, state)
          }
        />
        <input
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          placeholder="Повтор пароля"
          onChange={(e) =>
            onPasswordChange(e, setErrorMessage, setState, state)
          }
        />
        <button
          className={styles.button}
          type="submit"
          ref={submitButtonRef}
          disabled={!!errorMessage}
        >
          Зарегистрироваться
        </button>
        {errorMessage && (
          <div className={styles.errorLabel}>{errorMessage}</div>
        )}
      </form>
    </div>
  )
}

export default App
