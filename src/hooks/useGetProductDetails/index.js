import axios from 'axios'
import { useEffect, useState } from 'react'

import { API_URL, LOCAL_STORAGE_KEYS } from '../../constants'
import { saveExpiringItem, loadExpiringItem } from '../../utils/storage'

export function useGetProductDetails(productId) {
  const [productDetails, setProductDetails] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  const getProductDetails = async () => {
    try {
      setIsLoading(true)

      const storedProductDetails = loadExpiringItem(
        LOCAL_STORAGE_KEYS.PRODUCT_BY_ID(productId)
      )
      if (storedProductDetails) {
        setProductDetails(storedProductDetails)
      } else {
        const response = await axios.get(`${API_URL}/api/product/${productId}`)

        saveExpiringItem(
          LOCAL_STORAGE_KEYS.PRODUCT_BY_ID(productId),
          response.data
        )

        setProductDetails(response.data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getProductDetails()
  }, [])

  return { productDetails, isLoading }
}
