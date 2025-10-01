import React from 'react'
import '../style/catagoriesCards.css'

function CatagoriesCards({ icon, title }) {
  return (
    <div className="category-card">
      <div className="card-content">
        <i className={icon}></i>
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default CatagoriesCards
