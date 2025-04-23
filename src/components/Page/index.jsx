import { twMerge } from 'tailwind-merge'
import { Col } from '../Col'

export function Page({ className, children, ...rest }) {
  return (
    <Col className={twMerge('gap-6 p-8', className)} {...rest}>
      {children}
    </Col>
  )
}
