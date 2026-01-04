import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { FaBone, FaBook, FaSearch, FaBandAid } from 'react-icons/fa'
import { GiStethoscope } from 'react-icons/gi'

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: MdOutlineDashboard },
  { key: 'tumors', label: 'Tumors', icon: FaBone },
  { key: 'anatomy', label: 'Anatomy', icon: GiStethoscope },
  { key: 'arthritis', label: 'Arthritis', icon: FaBook },
    { key: 'casting', label: 'Casting & Splinting', icon: FaBandAid },
  { key: 'revision', label: 'Revision Papers', icon: FaBook },
  { key: 'past', label: 'Past Papers', icon: FaBook },
  { key: 'reference', label: 'Reference Library', icon: FaBook },
  { key: 'quick', label: 'Quick Search', icon: FaSearch }
]

export default function Sidebar({ onNavigate, collapsed = false }){
  return (
    <nav className={`h-full flex flex-col ${collapsed ? 'items-center' : ''} p-6`}>
      <div className="mb-8 w-full">
        {!collapsed ? (
          <div className="text-xl font-bold text-[#0B63C9]">OrthoNexus</div>
        ) : (
          <div className="text-center text-[#0B63C9] font-bold">ON</div>
        )}
      </div>

      <ul className={`space-y-2 ${collapsed ? 'w-full' : ''}`}>
        {items.map((it) => {
          const Icon = it.icon
          const isActive = it.key === 'dashboard'
          return (
            <li key={it.key}>
              <a
                href="#"
                title={collapsed ? it.label : undefined}
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(); }}
                className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3 px-3 py-2'} rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 ${isActive ? 'bg-sky-500 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className="text-xl" />
                <span className={`font-medium transition-all duration-300 ${collapsed ? 'opacity-0 max-w-0 ml-0 overflow-hidden' : 'opacity-100 ml-3'}`}>{it.label}</span>
              </a>
            </li>
          )
        })}
      </ul>

      <div className="mt-auto text-sm text-gray-400">© OrthoNexus</div>
    </nav>
  )
}
