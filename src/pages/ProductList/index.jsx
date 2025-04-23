import { Page } from '../../components/Page'
import { ProductItemList } from '../../components/ProductItemList'
import { TextInput } from '../../components/TextInput'
import { Col } from '../../components/Col'
import { useGetProducts } from '../../hooks/useGetProducts'
import { useProductSearch } from '../../hooks/useProductSearch'

export function ProductListView() {
  const { products, isLoading } = useGetProducts()
  const { filteredProducts, searchParam, setSearchParam } =
    useProductSearch(products)

  return (
    <Page isLoading={isLoading}>
      <TextInput
        className="w-full self-end max-w-96"
        value={searchParam}
        onChange={(event) => setSearchParam(event.target.value)}
        placeholder="Buscar producto..."
      />

      <Col className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductItemList key={product.id} {...product} />
        ))}
      </Col>
    </Page>
  )
}
