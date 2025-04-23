import { twMerge } from 'tailwind-merge'

import { Col } from '../Col'

export function Card({ children, className, ...rest }) {
  return (
    <Col
      className={twMerge('bg-white rounded-xl p-4 shadow-md', className)}
      {...rest}
    >
      {children}
    </Col>
  )
}
