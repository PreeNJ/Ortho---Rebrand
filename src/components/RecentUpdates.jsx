import React from 'react'

const updates = [
  'New casting techniques for pediatric fractures',
  'Updated arthritis treatment protocols',
  'Added 2024 revision papers'
]

export default function RecentUpdates(){
  return (
    <section className="bg-white rounded-lg border p-6">
      <h4 className="text-lg font-semibold">Recent Updates</h4>
      <p className="text-sm text-gray-500 mb-4">Latest additions to the knowledge base.</p>

      <ul className="space-y-2">
        {updates.map((u, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-2 w-2 rounded-full bg-green-500 flex-shrink-0" />
            <span className="text-sm text-gray-800 leading-tight">{u}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
