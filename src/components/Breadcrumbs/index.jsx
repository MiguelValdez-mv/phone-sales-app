import { useLocation, useNavigate } from 'react-router-dom'

import { Row } from '../Row'

export function Breadcrumbs() {
  const location = useLocation()
  const navigate = useNavigate()

  const pathSegments = location.pathname.split('/').filter(Boolean)

  return (
    <Row className="gap-2">
      <span className="cursor-pointer" onClick={() => navigate('/')}>
        Inicio
      </span>

      {pathSegments.map((segment, index) => {
        const path = '/' + pathSegments.slice(0, index + 1).join('/')

        return (
          <Row className="gap-2">
            <span>/</span>

            <span
              key={path}
              className="cursor-pointer"
              onClick={() => navigate(path)}
            >
              {segment}
            </span>
          </Row>
        )
      })}
    </Row>
  )
}
