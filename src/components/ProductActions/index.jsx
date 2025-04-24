import { useEffect } from 'react'

import { Card } from '../Card'
import { Button } from '../Button'
import { Select } from '../Select'
import { useState } from 'react'

export function ProductActions({
  id,
  colors = [],
  storages = [],
  addToCart,
  isAddingToCart,
}) {
  const [colorCode, setColorCode] = useState(undefined)
  const [storageCode, setStorageCode] = useState(undefined)

  const onChangeSelectValue = (cb) => (e) => cb(Number(e.target.value))

  useEffect(() => {
    if (colors.length) setColorCode((prev) => prev || colors[0].code)
  }, [colors])

  useEffect(() => {
    if (storages.length) setStorageCode((prev) => prev || storages[0].code)
  }, [storages])

  return (
    <Card className="gap-4">
      <h1 className="font-extrabold text-xl">Acciones</h1>

      <Select
        id="color"
        label="Color"
        value={colorCode}
        onChange={onChangeSelectValue(setColorCode)}
        options={colors}
      />

      <Select
        id="storage"
        label="Almacenamiento"
        value={storageCode}
        onChange={onChangeSelectValue(setStorageCode)}
        options={storages}
      />

      <Button
        className="self-end"
        onClick={() => addToCart({ id, colorCode, storageCode })}
        isLoading={isAddingToCart}
      >
        Añadir al carrito
      </Button>
    </Card>
  )
}
