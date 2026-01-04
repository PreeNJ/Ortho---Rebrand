import React from 'react'
import HubLayout from './components/HubLayout'
import HubGrid from './components/HubGrid'
import RecentUpdates from './components/RecentUpdates'

export default function App(){
  return (
    <HubLayout>
      <div className="px-8 py-12 max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B63C9] font-display tracking-tight">OrthoNexus <span className="text-sky-500">Hub</span></h1>
          <p className="mt-2 text-gray-500 max-w-3xl mx-auto">Your comprehensive orthopedics and trauma knowledge resource.</p>
        </header>

        <HubGrid />

        <div className="mt-10">
          <RecentUpdates />
        </div>
      </div>
    </HubLayout>
  )
}
