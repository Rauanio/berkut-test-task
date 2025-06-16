import { type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const Input = ({ className, ...rest }: InputProps) => {
  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        className={clsx(
          'w-full py-5 pr-6 pl-4 border color-black placeholder:text-black placeholder:text-2xl bg-white outline-none border-none',
          className
        )}
        {...rest}
      />

      <svg
        className="w-6 h-6 text-black absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14z"
        />
      </svg>
    </div>
  )
}
