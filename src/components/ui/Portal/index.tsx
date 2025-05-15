import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
  children: ReactNode
}

const Portal = ({ children }: PortalProps) => {
  const portalRoot = document.getElementById('portal-root')
  return portalRoot ? createPortal(children, portalRoot) : null
}

export default Portal
