import React from 'react'
import { cards } from '../data/cards'
import Card from './Card'

export default function HubGrid(){
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((c) => (
          <Card key={c.id} {...c} />
        ))}
      </div>
    </section> 
  )
}
