import { useParams } from 'react-router-dom'

import { Page } from '../../components/Page'

export function ProductDetailsView() {
  const { id } = useParams()

  return <Page></Page>
}
