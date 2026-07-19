import React from 'react'

export default function HamburgerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} width={22} height={18} viewBox="0 0 22 18" fill="none">
      <rect y={0} width={22} height={2.5} rx={1.25} fill="#064e3b" />
      <rect y={7.75} width={22} height={2.5} rx={1.25} fill="#064e3b" />
      <rect y={15.5} width={22} height={2.5} rx={1.25} fill="#064e3b" />
    </svg>
  )
}
