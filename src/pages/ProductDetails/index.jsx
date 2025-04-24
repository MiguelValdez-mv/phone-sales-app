import { useParams } from 'react-router-dom'

import { Page } from '../../components/Page'
import { Col } from '../../components/Col'
import { ProductDescription } from '../../components/ProductDescription'
import { ProductActions } from '../../components/ProductActions'
import { useGetProductDetails } from '../../hooks/useGetProductDetails'

export function ProductDetailsView() {
  const { id } = useParams()

  const { productDetails, isLoading } = useGetProductDetails(id)

  return (
    <Page className="md:flex-row justify-center gap-10" isLoading={isLoading}>
      <img
        className="w-64 h-64 rounded-xl self-center md:self-auto"
        src={productDetails.imgUrl}
      />

      <Col className="gap-4">
        <ProductDescription {...productDetails} />

        <ProductActions {...productDetails.options} />
      </Col>
    </Page>
  )
}
