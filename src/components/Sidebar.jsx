import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { FaBone, FaBook, FaSearch } from 'react-icons/fa'
import { GiStethoscope } from 'react-icons/gi'
import { BiBandage } from 'react-icons/bi'

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: MdOutlineDashboard },
  { key: 'tumors', label: 'Tumors', icon: FaBone },
  { key: 'anatomy', label: 'Anatomy', icon: GiStethoscope },
  { key: 'arthritis', label: 'Arthritis', icon: FaBook },
  { key: 'casting', label: 'Casting & Splinting', icon: BiBandage },
  { key: 'revision', label: 'Revision Papers', icon: FaBook },
  { key: 'past', label: 'Past Papers', icon: FaBook },
  { key: 'reference', label: 'Reference Library', icon: FaBook },
  { key: 'quick', label: 'Quick Search', icon: FaSearch }
]

export default function Sidebar({ onNavigate }){
  return (
    <nav className="h-full flex flex-col p-6">
      <div className="mb-8">
        <div className="text-xl font-bold text-[#0B63C9]">OrthoNexus</div>
      </div>

      <ul className="space-y-2">
        {items.map((it) => {
          const Icon = it.icon
          const isActive = it.key === 'dashboard'
          return (
            <li key={it.key}>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(); }}
                className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 ${isActive ? 'bg-sky-500 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="text-xl" />
                <span className="font-medium">{it.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="mt-auto text-sm text-gray-400">© OrthoNexus</div>
    </nav>
  )
}
