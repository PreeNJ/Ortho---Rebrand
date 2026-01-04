import React from 'react'

export default function Card({ title, description, headerBg, icon: Icon }){
  return (
    <article className="bg-white rounded-lg shadow-sm border flex flex-col justify-between h-full transition-transform duration-150 hover:-translate-y-1 focus-within:shadow-lg">
      <div className={`rounded-t-lg px-6 py-6`} style={{ backgroundColor: headerBg }}>
        <div className="flex items-center gap-3">
          <div className="text-2xl text-[#0B63C9]"><Icon /></div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      </div>

      <div className="px-6 py-4">
        <p className="text-sm text-gray-600 min-h-[48px] overflow-hidden">{description}</p>
      </div>

      <div className="px-6 py-4">
        <div className="flex justify-center">
          <button className="px-6 py-2 rounded-full bg-sky-50 border border-sky-200 text-sky-700 font-medium hover:bg-sky-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">Explore</button>
        </div>
      </div>
    </article>
  )
} 
