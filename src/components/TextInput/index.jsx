import { twMerge } from 'tailwind-merge'

import { Row } from '../Row'

export function TextInput({
  type = 'text',
  startAdornment = null,
  value,
  onChange,
  placeholder,
  autoComplete = 'off',
  disabled,
  endAdornment = null,
  className,
}) {
  return (
    <Row
      className={twMerge(
        'items-center p-2 gap-4 border rounded-xl bg-white border-slate-400 hover:border-sky-800 focus-within:border-sky-800',
        className
      )}
    >
      {startAdornment}

      <input
        className="w-full border-0 p-0 focus:outline-none"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
      />

      {endAdornment}
    </Row>
  )
}
