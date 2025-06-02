'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

import { PassIco, UserIco } from '@/assets/icons'

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
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: ''
    }
  })

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(errors.email, data)
    onRegistration()
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
            type={'password'}
            id='password'
            title='Password:'
            toggleType
            variant='bg'
            placeholder='******'
            icon={<PassIco />}
            error={errors.password?.message}
          />
          <Input
            {...register('confirmPassword', {
              required: 'Confirm password is required',
              validate: value =>
                value === getValues('password') || 'Passwords do not match'
            })}
            type={'password'}
            id='confirmPassword'
            title='Confirm Password:'
            toggleType
            variant='bg'
            placeholder='******'
            icon={<PassIco />}
            error={errors.confirmPassword?.message}
          />
        </div>
        <div className={styles.buttons}>
          <Button variant='bordered' type='submit'>
            Register
          </Button>
          <Button variant='bordered' onClick={hideRegistration}>
            Back to Login
          </Button>
        </div>
      </form>
    </>
  )
}

export default RegisterModal
