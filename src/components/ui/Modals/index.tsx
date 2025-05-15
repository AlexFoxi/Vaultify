import { ReactNode } from 'react'

import Portal from '../Portal'

import styles from './styles.module.scss'

interface ModalProps {
  children: ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Portal>
      <div className={styles.modalOverlay} onClick={onClose}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </Portal>
  )
}

export default Modal
