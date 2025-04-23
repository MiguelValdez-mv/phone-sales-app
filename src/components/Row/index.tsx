import { twMerge } from 'tailwind-merge'

import { Box } from '../Box'

export function Row({ className, children, ...rest }) {
  return (
    <Box className={twMerge('flex flex-row', className)} {...rest}>
      {children}
    </Box>
  )
}
