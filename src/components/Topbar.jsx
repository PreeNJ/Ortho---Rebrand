import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenu, HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi'

export default function Topbar({onMenuClick, collapsed, onCollapseToggle}){
  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex items-center gap-4">
        {/* Menu button for small screens */}
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" onClick={onMenuClick} aria-label="Open menu">
          <HiOutlineMenu size={22} />
        </button>

        {/* Collapse toggle for desktop */}
        <button className="hidden md:inline-flex p-2 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" onClick={onCollapseToggle} aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'} aria-pressed={collapsed}>
          {collapsed ? <HiChevronDoubleRight size={18} /> : <HiChevronDoubleLeft size={18} />}
        </button>
      </div>

      {/* Search on the right-top corner */}
      <div className="fixed top-4 right-4 z-50">
        <div className="flex items-center bg-white border rounded-lg shadow-sm px-3 py-2 w-[220px] sm:w-[300px] md:w-[380px] transition-all duration-200">
          <BiSearch className="text-gray-400" size={18} />
          <input type="search" placeholder="Search..." aria-label="Global search" className="ml-3 outline-none w-full text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded" />
        </div>
      </div>
    </>
  )
}
