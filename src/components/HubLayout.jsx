import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function HubLayout({children}){
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Topbar (contains global search & menu button) */}
      <Topbar onMenuClick={() => setDrawerOpen(true)} />

      {/* Overlay drawer for small/medium screens */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-lg p-6">
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:block w-[280px] bg-white border-r">
        <div className="h-full sticky top-0">
          <Sidebar />
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  )
}
