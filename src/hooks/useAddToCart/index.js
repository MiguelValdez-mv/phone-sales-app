import { useState } from 'react'
import axios from 'axios'

import { API_URL, LOCAL_STORAGE_KEYS } from '../../constants'
import { saveExpiringItem, loadExpiringItem } from '../../utils/storage'

export function useAddToCart() {
  const [isLoading, setIsLoading] = useState(false)

  const addToCart = async ({ id, colorCode, storageCode }) => {
    try {
      setIsLoading(true)

      const response = await axios.post(`${API_URL}/api/cart`, {
        id,
        colorCode,
        storageCode,
      })

      saveExpiringItem(
        LOCAL_STORAGE_KEYS.CART_ITEMS_COUNT,
        loadExpiringItem(LOCAL_STORAGE_KEYS.CART_ITEMS_COUNT) +
          response.data.count
      )

      window.location.reload()
    } catch (e) {
      console.error(e)
    } finally {
      setIsLoading(false)
    }
  }

  return { addToCart, isLoading }
}
