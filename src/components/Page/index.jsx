import { twMerge } from 'tailwind-merge'

import { Col } from '../Col'
import { Spinner } from '../Spinner'

export function Page({ className, children, isLoading, ...rest }) {
  return (
    <Col className={twMerge('gap-6 p-8', className)} {...rest}>
      {isLoading ? <Spinner /> : children}
    </Col>
  )
}
