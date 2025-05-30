import Modal from '..'
import { useState } from 'react'

import LoginModal from './Login'
import RegisterModal from './Register'
import styles from './styles.module.scss'

interface ModalProps {
  onLogin: () => void
  onRegistration: () => void
  onClose: () => void
}

const LoginRegisterModal = ({
  onClose,
  onLogin,
  onRegistration
}: ModalProps) => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <Modal variant={'w40'} onClose={onClose}>
      <h2 className={styles.title}>{isLogin ? 'Registration' : 'Enter'}</h2>
      <div className={styles.box}>
        {isLogin ? (
          <RegisterModal
            hideRegistration={() => setIsLogin(!isLogin)}
            onRegistration={onRegistration}
          />
        ) : (
          <LoginModal
            showRegistration={() => setIsLogin(!isLogin)}
            onLogin={onLogin}
          />
        )}
      </div>
    </Modal>
  )
}

export default LoginRegisterModal
