import { useParams } from 'react-router-dom'

import { Page } from '../../components/Page'
import { ProductDescription } from '../../components/ProductDescription'
import { useGetProductDetails } from '../../hooks/useGetProductDetails'

export function ProductDetailsView() {
  const { id } = useParams()

  const { productDetails, isLoading } = useGetProductDetails(id)

  return (
    <Page isLoading={isLoading}>
      <img className="w-48 h-48 self-center" src={productDetails.imgUrl} />

      <ProductDescription {...productDetails} />
    </Page>
  )
}
