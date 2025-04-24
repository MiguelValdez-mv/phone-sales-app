import { useNavigate } from 'react-router-dom'

import { Card } from '../Card'
import { Row } from '../Row'
import { Col } from '../Col'
import { CURRENCIES } from '../../constants'

export function ProductItemList({ id, brand, model, price, imgUrl }) {
  const navigate = useNavigate()

  const goToProductDetails = () => navigate(`/${id}`)

  return (
    <Card className="gap-4 cursor-pointer" onClick={goToProductDetails}>
      <img className="w-48 h-48 self-center rounded-xl" src={imgUrl} alt={id} />

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
