import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function QuickSearch(){
  return (
    <article className="bg-white rounded-lg shadow-sm border p-6">
      <div className="flex items-center gap-4">
        <div className="text-2xl text-gray-500"><FaSearch /></div>
        <div>
          <h4 className="font-semibold">Quick Search</h4>
          <p className="text-sm text-gray-500">Search across all categories and topics</p>
        </div>
      </div>
    </article>
  )
}
