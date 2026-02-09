import React from 'react'
import { Link } from "react-router-dom";

export default function Card({data}) {

  return (
    <div className="col-md-4">
      <div className="card user py-4">
        <img src={data.imageUrl} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <Link to={`/users/${data.id}`} className="btn btn-outline-info">Details</Link>
        </div>
      </div>
    </div>
  )
}
