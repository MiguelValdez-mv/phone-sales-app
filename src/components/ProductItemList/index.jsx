import { Card } from '../Card'
import { Row } from '../Row'
import { Col } from '../Col'
import { CURRENCIES } from '../../constants'

export function ProductItemList({ brand, model, price, imgUrl }) {
  return (
    <Card className="gap-4">
      <img className="w-48 h-48 self-center" src={imgUrl} />

      <Row className="justify-between items-center gap-4">
        <Col>
          <span className="font-bold">{brand}</span>
          <span>{model}</span>
        </Col>

        <span className="italic">
          {price} {CURRENCIES.EUR}
        </span>
      </Row>
    </Card>
  )
}
