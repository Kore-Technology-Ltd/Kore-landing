import React from 'react'

export default function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width={20} height={20} viewBox="0 0 20 20" fill="none">
      <path
        d="M2 2l16 16M18 2L2 18"
        stroke="#064e3b"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
