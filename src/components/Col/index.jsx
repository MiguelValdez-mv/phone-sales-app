import { twMerge } from 'tailwind-merge'

import { Box } from '../Box'

export function Col({ className, children, ...rest }) {
  return (
    <Box className={twMerge('flex flex-col', className)} {...rest}>
      {children}
    </Box>
  )
}
