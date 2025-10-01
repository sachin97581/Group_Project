import React from 'react'
import CatagoriesCards from './CatagoriesCards'
import '../style/catagories.css'

function Catagories() {
  // array of icons + titles <i class="fa-solid fa-bed">
  const categoriesData = [
    { icon: "fa-solid fa-person-swimming", title: "Swimming" },
    { icon: "fa-solid fa-fire", title: "Trending" },
    { icon: "fa-solid fa-bed", title: "Rooms" },
    { icon: "fa-solid fa-mountain", title: "Mountains" },
    { icon: "fa-brands fa-fort-awesome", title: "Castles" },
    { icon: "fa-solid fa-campground", title: "Camping" },
    { icon: "fa-solid fa-cow", title: "Farms" },
    { icon: "fa-solid fa-snowflake", title: "Arctic" },
    { icon: "fa-solid fa-igloo", title: "Domes" },
    { icon: "fa-solid fa-ship", title: "Boats" },
    // { icon: "fa-solid fa-laptop-code", title: "Coding" }
  ]

  return (
    <div className="categories-container">
      {categoriesData.map((cat, index) => (
        <CatagoriesCards key={index} icon={cat.icon} title={cat.title} />
      ))}
    </div>
  )
}

export default Catagories
