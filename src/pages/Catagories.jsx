import React from 'react'
import CatagoriesCards from './CatagoriesCards'
import '../style/catagories.css'

function Catagories() {
  // array of icons + titles
  const categoriesData = [
    { icon: "fa-solid fa-person-swimming", title: "Swimming" },
    { icon: "fa-solid fa-utensils", title: "Food" },
    { icon: "fa-solid fa-car", title: "Travel" },
    { icon: "fa-solid fa-music", title: "Music" },
    { icon: "fa-solid fa-book", title: "Books" },
    { icon: "fa-solid fa-film", title: "Movies" },
    { icon: "fa-solid fa-gamepad", title: "Gaming" },
    { icon: "fa-solid fa-dumbbell", title: "Fitness" },
    { icon: "fa-solid fa-paw", title: "Pets" },
    { icon: "fa-solid fa-tree", title: "Nature" },
    { icon: "fa-solid fa-laptop-code", title: "Coding" }
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
