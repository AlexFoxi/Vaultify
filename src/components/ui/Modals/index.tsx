'use client'

import CloseIco from 'assets/icons/CloseIco'
import cn from 'clsx'
import { ReactNode, useRef } from 'react'

import Portal from '../Portal'

import styles from './styles.module.scss'

type ModalVariant = 'w30' | 'w40' | 'w50' | 'full'
interface ModalProps {
  children: ReactNode
  variant: ModalVariant
  onClose: () => void
}

const Modal = ({ children, variant, onClose }: ModalProps) => {
  const mouseDownTarget = useRef<EventTarget | null>(null)

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    mouseDownTarget.current = e.target
  }

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      mouseDownTarget.current === e.currentTarget &&
      e.target === e.currentTarget
    ) {
      onClose()
    }
  }
  return (
    <Portal>
      <div
        className={styles.modalOverlay}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      >
        <div className={cn(styles.modal, styles[variant])}>
          {children}
          <CloseIco className={styles.close} onClick={() => onClose()} />
        </div>
      </div>
    </Portal>
  )
}

export default Modal
