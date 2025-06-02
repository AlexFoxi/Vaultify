'use client'

import PassIco from 'assets/icons/PassIco'
import UserIco from 'assets/icons/UserIco'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(errors.email, data)
    onLogin()
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Please enter valid email'
              }
            })}
            id='email'
            title='Login:'
            type='text'
            variant='bg'
            placeholder='example@mail.com'
            error={errors.email?.message}
            icon={<UserIco />}
          />
          <Input
            {...register('password', {
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
            variant='bg'
            placeholder='******'
            error={errors.password?.message}
            icon={<PassIco />}
          />
        </div>
        <div className={styles.buttons}>
          <Button variant='bordered' type='submit'>
            Log in
          </Button>
          <Button variant='bordered' onClick={showRegistration}>
            Register
          </Button>
        </div>
      </form>
    </>
  )
}

export default LoginModal
