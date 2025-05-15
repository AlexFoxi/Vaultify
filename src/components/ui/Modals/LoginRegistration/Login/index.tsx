import PassIco from 'assets/icons/PassIco'
import UserIco from 'assets/icons/UserIco'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Input from '../../../Input'

import styles from './styles.module.scss'

interface LoginModalProps {
  onLogin: () => void
  showRegistration: () => void
}

type FormData = {
  email: string
  password: string
}

const LoginModal = ({ onLogin, showRegistration }: LoginModalProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (username && password) {
      onLogin()
    }
  }

  const {
    register: formLogin,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange'
  })

  const onSubmit: SubmitHandler<FormData> = (data, event) => {
    event?.preventDefault()
    console.log(errors.email, data)
  }

  useEffect(() => {
    reset()
  }, [])

  return (
    <div>
      <form className={styles.form}>
        <Input
          {...formLogin('email', {
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Please enter valid email'
            }
          })}
          id='login'
          title='Login:'
          type='text'
          defaultValue={''}
          error={errors.email?.message}
          icon={<UserIco />}
        />
        <Input
          {...formLogin('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Min length 6 numbs'
            },
            validate: value =>
              /^[a-zA-Z0-9]*$/.test(value) || 'Only numbers and letters'
          })}
          type='password'
          id='password'
          title='Password:'
          defaultValue={''}
          error={errors.password?.message}
          icon={<PassIco />}
        />
      </form>

      <div className={styles.buttons}>
        <button
          className={styles.loginBtn}
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          Log in
        </button>
        <button onClick={showRegistration} className={styles.registration}>
          Register
        </button>
      </div>
    </div>
  )
}

export default LoginModal
