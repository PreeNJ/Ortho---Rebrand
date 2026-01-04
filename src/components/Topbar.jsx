import React, { useState, useRef, useEffect } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineMenu, HiX } from 'react-icons/hi'

export default function Topbar({onMenuClick}){
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const overlayInputRef = useRef(null)

  useEffect(() => {
    function onKey(e){
      if(e.key === 'Escape' && open){
        setOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  useEffect(() => {
    if(open){
      // focus the overlay input when opened
      setTimeout(() => overlayInputRef.current && overlayInputRef.current.focus(), 0)
    }
  }, [open])

  return (
    <>
      <div className="fixed top-4 left-4 z-50 flex items-center gap-4">
        {/* Menu button for small screens */}
        <button className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300" onClick={onMenuClick} aria-label="Open menu">
          <HiOutlineMenu size={22} />
        </button>
      </div>

      {/* Search on the right-top corner */}
      <div className="fixed top-4 right-4 z-50">
        <div
          className="topbar-search-container flex items-center bg-white border rounded-lg shadow-sm px-3 py-2 transition-all duration-200"
          style={{ maxWidth: 'calc(100% - 3rem)', minWidth: '0px', width: 'auto' }}
        >
          <BiSearch className="text-gray-400" size={18} />
          <input
            ref={inputRef}
            value={query}
            onChange={(e)=>{ setQuery(e.target.value); if(!open) setOpen(true) }}
            onFocus={()=>setOpen(true)}
            type="search"
            placeholder="Search..."
            aria-label="Global search"
            className="ml-3 outline-none w-full text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 rounded"
          />
        </div>
      </div>

      {/* Floating search overlay */}
      {open && (
        <div
          className="fixed inset-0 z-60 flex items-start justify-center pt-20 px-4 sm:px-6"
          aria-modal="true"
          role="dialog"
          onMouseDown={(e)=>{ if(e.target === e.currentTarget) setOpen(false) }}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

          <div className="relative w-full max-w-3xl">
            <div className="mx-auto bg-white rounded-lg shadow-2xl ring-1 ring-black/5 overflow-hidden transform transition-all duration-200 scale-100">
              <div className="flex items-center px-4 py-3">
                <input
                  ref={overlayInputRef}
                  value={query}
                  onChange={(e)=>setQuery(e.target.value)}
                  type="search"
                  placeholder="Search ..."
                  aria-label="Floating search"
                  className="flex-1 px-4 py-3 text-lg outline-none"
                />

                <button className="p-3 text-gray-700" aria-label="Execute search">
                  <BiSearch size={20} />
                </button>

                {query ? (
                  <button
                    className="ml-2 p-2 text-gray-500 hover:text-gray-700"
                    aria-label="Clear search"
                    onClick={() => setQuery('')}
                  >
                    <HiX size={18} />
                  </button>
                ) : null}

                <button
                  className="ml-4 px-3 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
                  onClick={() => { setQuery(''); setOpen(false); }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
