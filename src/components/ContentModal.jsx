import React from 'react'
import { FaTimes } from 'react-icons/fa'

export default function ContentModal({ title, content, onClose }) {
  if (!content) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-sky-50 to-blue-50">
          <h2 className="text-2xl font-bold text-[#0B63C9]">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            aria-label="Close modal"
          >
            <FaTimes className="text-gray-600" />
          </button>
        </div>
        
        <div className="overflow-y-auto px-6 py-6 flex-1">
          {content.sections && content.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                {section.title}
              </h3>
              
              <div className="space-y-6">
                {section.topics.map((topic, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-lg text-sky-700 mb-2">{topic.title}</h4>
                    <div className="text-gray-700 whitespace-pre-line text-sm leading-relaxed">
                      {topic.notes}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="px-6 py-4 border-t bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
