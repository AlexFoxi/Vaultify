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
  const [isToggle, setIsToggle] = useState(false)

  return (
    <Modal onClose={onClose}>
      <h2 className={styles.title}>{isToggle ? 'Enter' : 'Registration'}</h2>
      <div>
        {isToggle ? (
          <RegisterModal
            hideRegistration={() => setIsToggle(!isToggle)}
            onRegistration={onRegistration}
          ></RegisterModal>
        ) : (
          <LoginModal
            showRegistration={() => setIsToggle(!isToggle)}
            onLogin={onLogin}
          ></LoginModal>
        )}
      </div>
    </Modal>
  )
}

export default LoginRegisterModal
