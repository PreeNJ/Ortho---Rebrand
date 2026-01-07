import React, {useState} from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Footer from './Footer'

export default function HubLayout({children}){
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Topbar (contains global search, menu button and collapse control) */}
      <Topbar onMenuClick={() => setDrawerOpen(true)} collapsed={collapsed} onCollapseToggle={() => setCollapsed(c => !c)} />

      {/* Overlay drawer for small/medium screens */}
      {drawerOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setDrawerOpen(false)} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-white shadow-lg p-6">
            <Sidebar onNavigate={() => setDrawerOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex flex-1">
        {/* Desktop sidebar (collapsible) with smooth width transition */}
        <aside className={`hidden md:block ${collapsed ? 'w-[72px]' : 'w-[280px]'} bg-white border-r transition-all duration-300 ease-out`}>
          <div className="h-full sticky top-0">
            <Sidebar collapsed={collapsed} onCollapseToggle={() => setCollapsed(c => !c)} />
          </div>
        </aside>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  )
}
