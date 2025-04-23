import { Col } from '../Col'

export function Page({ children, ...rest }) {
  return <Col {...rest}>{children}</Col>
}
