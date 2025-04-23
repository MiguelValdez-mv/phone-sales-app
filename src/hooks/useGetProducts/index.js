import axios from 'axios'
import { useEffect, useState } from 'react'

import { API_URL, LOCAL_STORAGE_KEYS } from '../../constants'

export function useGetProducts() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getProducts = async () => {
    try {
      setIsLoading(true)

      const storedProducts = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.PRODUCTS)
      )
      if (storedProducts) {
        setProducts(storedProducts)
      } else {
        const response = await axios.get(`${API_URL}/api/product`)

        localStorage.setItem(
          LOCAL_STORAGE_KEYS.PRODUCTS,
          JSON.stringify(response.data)
        )

        setProducts(response.data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return { products, isLoading }
}
