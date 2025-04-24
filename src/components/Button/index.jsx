import { twMerge } from 'tailwind-merge'

import { Spinner } from '../Spinner'

export function Button({
  disabled,
  className,
  type,
  onClick,
  isLoading,
  children,
}) {
  return (
    <button
      className={twMerge(
        'gap-2 flex justify-center items-center rounded-xl font-bold p-2 outline-none active:drop-shadow-surface',
        'text-white bg-gradient-to-r from-sky-800 to-slate-400',
        disabled && 'opacity-25',
        className
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : null}

      {children}
    </button>
  )
}
