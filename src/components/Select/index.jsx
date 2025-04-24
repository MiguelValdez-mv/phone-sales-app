import { twMerge } from 'tailwind-merge'

import { Col } from '../Col'

export function Select({ id, label, value, onChange, className, options }) {
  return (
    <Col className="gap-2">
      <label className="font-bold" htmlFor={id}>
        {label}
      </label>

      <select
        id={id}
        className={twMerge(
          'p-2 border rounded-xl bg-white border-slate-400 hover:border-sky-800 focus-within:border-sky-800',
          className
        )}
        value={value}
        onChange={onChange}
      >
        {options?.map((opt) => (
          <option key={opt.code} value={opt.code}>
            {opt.name} (Código - {opt.code})
          </option>
        ))}
      </select>
    </Col>
  )
}
