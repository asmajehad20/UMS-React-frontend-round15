import React from 'react'

export default function Card({data}) {
  return (
    <div className="col-md-4">
      <div className="card user py-4">
        <img src={data.imageUrl} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
        </div>
      </div>
    </div>
  )
}
