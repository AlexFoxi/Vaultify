import React, { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLOrSVGElement> {
  fill?: string
  width?: number
  height?: number
}
const CloseIco: React.FC<Props> = ({
  fill = '#000',
  width = 20,
  height = 20,
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
      d='M1.71249 23.8414C1.30785 23.8414 0.903477 23.687 0.594728 23.3783C-0.0225062 22.7611 -0.0225062 21.7603 0.594728 21.1433L21.1429 0.595158C21.7598 -0.0220758 22.7611 -0.0220758 23.3779 0.595158C23.9954 1.21239 23.9954 2.21319 23.3779 2.83043L2.82973 23.3785C2.52151 23.687 2.11713 23.8414 1.71249 23.8414Z'
      fill='inherit'
    />
    <path
      d='M22.2608 23.8412C21.8564 23.8412 21.4518 23.6869 21.1433 23.3781L0.595156 2.83C-0.0220782 2.21276 -0.0220782 1.21196 0.595156 0.594731C1.21239 -0.0225031 2.21345 -0.0225031 2.83042 0.594731L23.3785 21.1429C23.996 21.7601 23.996 22.7609 23.3785 23.3779C23.0698 23.6869 22.6652 23.8412 22.2608 23.8412Z'
      fill='inherit'
    />
  </svg>
)

export default CloseIco
