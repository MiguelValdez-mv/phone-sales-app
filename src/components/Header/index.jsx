import { useNavigate } from 'react-router-dom'

import { Card } from '../Card'
import { Breadcrumbs } from '../Breadcrumbs'
import { LOCAL_STORAGE_KEYS } from '../../constants'
import { loadExpiringItem } from '../../utils/storage'
import amsIcon from '../../assets/ams-icon.png'

export function Header() {
  const navigate = useNavigate()

  const goToHome = () => navigate('/')

  return (
    <Card className="flex-row mx-4 mt-4 justify-between items-center">
      <img
        src={amsIcon}
        width={150}
        onClick={goToHome}
        className="cursor-pointer"
        alt="AMS Logo"
      />

      <Breadcrumbs />

      <span>
        Carrito:{' '}
        {loadExpiringItem(LOCAL_STORAGE_KEYS.CART_ITEMS_COUNT) ?? 0}{' '}
      </span>
    </Card>
  )
}
