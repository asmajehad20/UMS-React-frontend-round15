import React from 'react'

export default function CardLoader() {
  return (
    <div className="card" aria-hidden="true">
        <img src="..." className="card-img-top" alt="..."/>
        <div className='card-body'>
            <h2 className='card-title placeholder-glow'>
                <span className='placeholder col-6'></span>
            </h2>
        </div>
    </div>
  )
}
