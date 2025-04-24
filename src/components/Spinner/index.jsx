import { twMerge } from 'tailwind-merge'

import { IconSpinner } from '../../assets/svgs/IconSpinner'

export function Spinner({ className, ...rest }) {
  return (
    <IconSpinner className={twMerge('animate-spin', className)} {...rest} />
  )
}
