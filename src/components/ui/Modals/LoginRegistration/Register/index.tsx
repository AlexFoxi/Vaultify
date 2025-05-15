import PassIco from 'assets/icons/PassIco'
import UserIco from 'assets/icons/UserIco'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Input from '@/components/ui/Input'

import styles from './styles.module.scss'

type FormData = {
  email: string
  password: string
  confirmPassword: string
}

interface ModalProps {
  onRegistration: () => void
  hideRegistration: () => void
}

const RegisterModal = ({ onRegistration, hideRegistration }: ModalProps) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleRegistration = () => {
    if (username && password) {
      onRegistration()
    }
  }

  const {
    register: formRegistration,
    handleSubmit,
    reset,
    getValues,
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
          {...formRegistration('email', {
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
          {...formRegistration('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Min length 6 numbs'
            },
            validate: value =>
              /^[a-zA-Z0-9]*$/.test(value) || 'Only numbers and letters'
          })}
          type={'password'}
          id='password'
          title='Password:'
          defaultValue={''}
          toggleType
          icon={<PassIco />}
          error={errors.password?.message}
        />
        <div className={styles.group}>
          <Input
            {...formRegistration('confirmPassword', {
              required: 'Confirm password is required',
              validate: value =>
                value === getValues('password') || 'Passwords do not match'
            })}
            type={'password'}
            id='confirmPassword'
            title='Confirm Password:'
            defaultValue={''}
            toggleType
            icon={<PassIco />}
            error={errors.confirmPassword?.message}
          />
        </div>
      </form>
      <div className={styles.buttons}>
        <button
          className={styles.loginBtn}
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </button>
        <button onClick={hideRegistration} className={styles.registration}>
          Back to Login
        </button>
      </div>
    </div>
  )
}

export default RegisterModal
