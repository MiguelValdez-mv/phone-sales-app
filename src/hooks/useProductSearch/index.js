import { useState, useMemo } from 'react'

export function useProductSearch(products) {
  const [searchParam, setSearchParam] = useState('')

  const filteredProducts = useMemo(() => {
    if (searchParam) {
      return products.filter(
        (p) =>
          p.brand.toLowerCase().includes(searchParam.toLowerCase()) ||
          p.model.toLowerCase().includes(searchParam.toLowerCase())
      )
    }

    return products
  }, [products, searchParam])

  return { filteredProducts, searchParam, setSearchParam }
}
