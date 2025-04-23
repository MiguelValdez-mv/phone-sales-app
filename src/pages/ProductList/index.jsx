import { Page } from '../../components/Page'
import { useGetProducts } from '../../hooks/useGetProducts'

export function ProductListView() {
  const { products } = useGetProducts()

  return <Page></Page>
}
