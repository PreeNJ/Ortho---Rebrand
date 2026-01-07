import React from 'react'

export default function ElbowIcon(props){
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {/* Upper arm */}
      <path d="M18 6 L12 12" />
      {/* Forearm */}
      <path d="M12 12 L6 18" />
      {/* Elbow joint */}
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  )
}
