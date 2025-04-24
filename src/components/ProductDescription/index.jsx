import { Card } from '../Card'
import { Col } from '../Col'
import { CURRENCIES } from '../../constants'

export function ProductDescription(props = {}) {
  const descriptionValues = [
    { title: 'Marca', value: props.brand },
    { title: 'Modelo', value: props.model },
    { title: 'Precio', value: `${props.price} ${CURRENCIES.EUR}` },
    { title: 'CPU', value: props.cpu },
    { title: 'RAM', value: props.ram },
    { title: 'Sistema Operativo', value: props.os },
    { title: 'Resolución de pantalla', value: props.displayResolution },
    { title: 'Batería', value: props.battery },
    { title: 'Cámara Principal', value: props.primaryCamera?.join(' ') },
    { title: 'Cámara Secundaria', value: props.secondaryCmera },
    { title: 'Dimensiones', value: props.dimentions },
    { title: 'Peso', value: props.weight },
  ]

  return (
    <Card className="gap-4">
      <h1 className="font-extrabold text-xl">Descripción</h1>

      <Col className="gap-1">
        {descriptionValues.map(({ title, value }) => (
          <span key={title} className="font-bold italic">
            {title}: <span className="font-light not-italic">{value}</span>
          </span>
        ))}
      </Col>
    </Card>
  )
}
