import { Card } from '../Card'
import { Button } from '../Button'
import { Select } from '../Select'

export function ProductActions({ colors = [], storages = [] }) {
  return (
    <Card className="gap-4">
      <h1 className="font-extrabold text-xl">Acciones</h1>

      <Select id="color" label="Color" options={colors} />

      <Select id="storage" label="Almacenamiento" options={storages} />

      <Button className="self-end">Añadir al carrito</Button>
    </Card>
  )
}
