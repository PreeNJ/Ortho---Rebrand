import React from 'react'
import { MdOutlineDashboard } from 'react-icons/md'
import { FaBone, FaBook, FaSearch, FaBandAid, FaPills, FaAnchor, FaCogs, FaDna } from 'react-icons/fa'
import { GiStethoscope, GiSkeleton } from 'react-icons/gi' 
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

const items = [
  { key: 'dashboard', label: 'Dashboard', icon: MdOutlineDashboard, color: 'text-sky-500' },
  { key: 'tumors', label: 'Tumors', icon: FaBone, color: 'text-rose-500' },
  { key: 'anatomy', label: 'Anatomy', icon: GiStethoscope, color: 'text-emerald-500' },
  { key: 'arthritis', label: 'Arthritis', icon: GiSkeleton, color: 'text-amber-500' },
  { key: 'casting', label: 'Casting & Splinting', icon: FaBandAid, color: 'text-slate-500' },
  { key: 'revision', label: 'Biomechanics', icon: FaCogs, color: 'text-sky-500' },
  { key: 'past', label: 'Physiology', icon: FaDna, color: 'text-slate-500' },
  { key: 'traction', label: 'Traction', icon: FaAnchor, color: 'text-emerald-500' },
  { key: 'pharmacology', label: 'Pharmacology', icon: FaPills, color: 'text-amber-500' }
]

export default function Sidebar({ onNavigate, collapsed = false, onCollapseToggle }){
  return (
    <nav className={`h-full flex flex-col ${collapsed ? 'items-center' : ''} p-6`}>
      <div className="mb-8 w-full flex items-center justify-between">
        {!collapsed ? (
          <div className="text-xl font-bold text-[#0B63C9]">OrthoNexus</div>
        ) : (
          <div className="text-center text-[#0B63C9] font-bold">ON</div>
        )}

        {/* Collapse toggle placed beside the logo on md+ */}
        <button
          onClick={onCollapseToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="hidden md:inline-flex p-1 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
        >
          {collapsed ? <HiChevronDoubleRight size={18} /> : <HiChevronDoubleLeft size={18} />}
        </button>
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
                className={`group flex items-center ${collapsed ? 'justify-center' : 'gap-3 px-3 py-2'} rounded-md transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 ${isActive ? 'bg-sky-500 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon className={`text-xl transition-transform transition-colors duration-150 ${isActive ? 'text-white' : `${it.color} group-hover:scale-105`}`} />
                {!collapsed && (
                  <span className={`font-medium transition-all duration-300 opacity-100 ml-3`}>{it.label}</span>
                )}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
