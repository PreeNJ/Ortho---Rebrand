import React from 'react'

export default function KneeIcon(props){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Distal femur with condyles */}
      <path d="M17 6 C15.5 8 14 10 12.2 12" />
      <path d="M15.5 7.5 C14.3 9 13.3 10.5 12.4 12" />

      {/* Tibial plateau (slight curve) */}
      <path d="M8 14 C10.5 13.2 13.5 13.2 16 14" />

      {/* Tibia shaft */}
      <path d="M11.8 14.2 L9 18.5" />

      {/* Fibula hint (lateral) */}
      <path d="M14.5 15.5 L16.5 18" />

      {/* Patella (anterior) */}
      <circle cx="13.5" cy="11" r="1.3" fill="currentColor" />
    </svg>
  )
}
