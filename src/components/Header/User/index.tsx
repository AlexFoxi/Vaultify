import cn from 'clsx'
import Image from 'next/image'
import { useRef, useState } from 'react'

import LoginRegisterModal from '@/components/ui/Modals/LoginRegistration'

import styles from './styles.module.scss'
import useClickOutside from '@/helpers/clickOutside'

const User = () => {
  const [open, setOpen] = useState(false)
  const userBoxRef = useRef<HTMLDivElement | null>(null)
  useClickOutside(userBoxRef, () => setOpen(false))

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [toggleModal, setToggleModal] = useState(false)

  const handleToggleUser = () => {
    if (isLoggedIn) {
      setOpen(!open)
    } else {
      setToggleModal(true)
    }
  }

  const handleLogin = () => {
    console.log('log')
    // setIsLoggedIn(true)
    // setShowLoginModal(false)
  }

  const handleRegistration = () => {
    console.log('reg')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setOpen(false)
  }

  return (
    <div className={styles.UserBox} ref={userBoxRef}>
      <button className={styles.avatarBtn} onClick={handleToggleUser}>
        <Image
          width='40'
          height='40'
          src='/userTest.jpg'
          alt='Avatar'
          className={styles.avatar}
        />
      </button>

      {isLoggedIn && (
        <div className={cn(styles.dropdown, open && styles.show)}>
          <button className={styles.option}>Profile</button>
          <button className={styles.option}>Settings</button>
          <button className={styles.option} onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
      {toggleModal && (
        <LoginRegisterModal
          onLogin={handleLogin}
          onRegistration={handleRegistration}
          onClose={() => setToggleModal(false)}
        />
      )}
    </div>
  )
}

export default User
