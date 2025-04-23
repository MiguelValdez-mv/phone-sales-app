import { twMerge } from 'tailwind-merge'

import { Col } from '../Col'

export function Card({ children, className }) {
  return (
    <Col className={twMerge('bg-white rounded-xl p-4 shadow-md', className)}>
      {children}
    </Col>
  )
}
