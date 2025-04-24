import { useParams } from 'react-router-dom'

import { Page } from '../../components/Page'
import { Col } from '../../components/Col'
import { ProductDescription } from '../../components/ProductDescription'
import { ProductActions } from '../../components/ProductActions'
import { useGetProductDetails } from '../../hooks/useGetProductDetails'
import { useAddToCart } from '../../hooks/useAddToCart'

export function ProductDetailsView() {
  const { id } = useParams()

  const { productDetails, isLoading } = useGetProductDetails(id)
  const { addToCart, isLoading: isAddingToCart } = useAddToCart()

  return (
    <Page className="md:flex-row justify-center gap-10" isLoading={isLoading}>
      <img
        className="w-64 h-64 rounded-xl self-center md:self-auto"
        src={productDetails.imgUrl}
        alt={productDetails.id}
      />

      <Col className="gap-4">
        <ProductDescription {...productDetails} />

        <ProductActions
          {...productDetails.options}
          id={productDetails.id}
          addToCart={addToCart}
          isAddingToCart={isAddingToCart}
        />
      </Col>
    </Page>
  )
}
