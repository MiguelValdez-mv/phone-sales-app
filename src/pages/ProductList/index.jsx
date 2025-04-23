import { Page } from '../../components/Page'
import { ProductItemList } from '../../components/ProductItemList'
import { useGetProducts } from '../../hooks/useGetProducts'

export function ProductListView() {
  const { products, isLoading } = useGetProducts()

  return (
    <Page
      isLoading={isLoading}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
    >
      {products.map((product) => (
        <ProductItemList key={product.id} {...product} />
      ))}
    </Page>
  )
}
