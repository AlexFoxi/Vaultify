import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  fill?: string
  width?: number
  height?: number
}

const UserIco: React.FC<Props> = ({
  fill = '#000',
  width = 14,
  height = 14,
  ...props
}) => (
  <svg
    viewBox={`0 0 24 24`}
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    fill={fill}
    {...props}
  >
    <path
      d='M22.4337 23.8412H1.53942V23.3144C1.53942 17.5538 6.22597 12.8672 11.9866 12.8672C17.7471 12.8672 22.4337 17.5538 22.4337 23.3144V23.8412ZM2.60765 22.7875H21.3652C21.0915 17.852 16.9892 13.921 11.9866 13.921C6.98388 13.921 2.88189 17.852 2.60765 22.7875Z'
      fill='inherit'
    />
    <path
      d='M11.9866 11.7155C8.7929 11.7155 6.19488 9.11719 6.19488 5.92354C6.19488 2.73015 8.7929 0.131866 11.9866 0.131866C15.1802 0.131866 17.7782 2.73015 17.7782 5.92354C17.7782 9.11719 15.1802 11.7155 11.9866 11.7155ZM11.9866 1.18562C9.37405 1.18562 7.24863 3.31103 7.24863 5.92354C7.24863 8.53605 9.37405 10.6617 11.9866 10.6617C14.5991 10.6617 16.7245 8.53631 16.7245 5.92354C16.7245 3.31103 14.5991 1.18562 11.9866 1.18562Z'
      fill='inherit'
    />
  </svg>
)

export default UserIco
