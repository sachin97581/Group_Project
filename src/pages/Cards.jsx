import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/card.css";
import img1 from "../assets/_23x_k098vglfc_1050427044.jpg"
import img2 from "../assets/backpacker-standing.jpg";
import img3 from "../assets/pyrenees-mountain-landscape-with-village (1).jpg";
import img4 from "../assets/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass.jpg";
import img5 from "../assets/woman-hand-holding-camera-standing-top-rock-nature-travel-concept.jpg";
import img6 from "../assets/balloons.jpg";
import img7 from "../assets/cld-sample-2.jpg";
import img8 from "../assets/coffee.jpg";
import img9 from "../assets/cup-on-a-table.jpg";
import img10 from "../assets/pyrenees-mountain-landscape-with-village (1).jpg";

function Cards() {
  const cardData = [
    {img: img1, title: "Seaside Villa", Owned_By: "Shivam", description: "Beautiful villa with sea view.", Price: "₹3,000", Location: "Goa", Category: "ROOM", Country: "India" },
    {img: img2, title: "City Apartment", Owned_By: "Ananya", description: "Modern apartment in city center.", Price: "₹2,500", Location: "Mumbai", Category: "APARTMENT", Country: "India" },
    {img: img3, title: "Cozy Cottage", Owned_By: "Rohit", description: "Cozy cottage in a quiet village.", Price: "₹1,800", Location: "Manali", Category: "COTTAGE", Country: "India" },
    {img: img4, title: "Luxury Mansion", Owned_By: "Priya", description: "Luxury mansion with private pool.", Price: "₹5,500", Location: "Bangalore", Category: "MANSION", Country: "India" },
    {img: img5, title: "Mountain Retreat", Owned_By: "Arjun", description: "Mountain retreat with scenic views.", Price: "₹2,200", Location: "Leh", Category: "HOUSE", Country: "India" },
    {img: img6, title: "Beach House", Owned_By: "Sneha", description: "Beach house just steps from the sand.", Price: "₹3,200", Location: "Kerala", Category: "BEACH HOUSE", Country: "India" },
    {img: img7, title: "Studio Apartment", Owned_By: "Karan", description: "Compact studio apartment.", Price: "₹1,500", Location: "Delhi", Category: "STUDIO", Country: "India" },
    {img: img8, title: "Farmhouse", Owned_By: "Riya", description: "Traditional farmhouse with garden.", Price: "₹2,800", Location: "Punjab", Category: "FARMHOUSE", Country: "India" },
    {img: img9, title: "City Loft", Owned_By: "Vikram", description: "Iconic city loft in downtown.", Price: "₹4,000", Location: "Chennai", Category: "LOFT", Country: "India" },
    {img: img10, title: "Forest Cabin", Owned_By: "Meera", description: "Wooden cabin in the forest.", Price: "₹2,000", Location: "Shimla", Category: "CABIN", Country: "India" },
    {img: img2, title: "Tiny Home", Owned_By: "Aditya", description: "Minimalist tiny home experience.", Price: "₹1,700", Location: "Rishikesh", Category: "TINY HOME", Country: "India" },
    {img: img2, title: "Boat House", Owned_By: "Neha", description: "Unique stay on a boat.", Price: "₹3,500", Location: "Kochi", Category: "BOAT HOUSE", Country: "India" },
    {img: img2, title: "Heritage Villa", Owned_By: "Sahil", description: "Charming villa near famous landmarks.", Price: "₹4,200", Location: "Jaipur", Category: "VILLA", Country: "India" }
  ];

  const navigate = useNavigate();

  function handleClick(card) {
    navigate("/listingData", { state: card }); // 👈 Pass whole card object
  }

  return (
    <div className="cards-wrapper">
      {cardData.map((card, index) => (
        <div className="card" key={index} onClick={() => handleClick(card)}>
          <img src={card.img} alt="Property" className="card-img" />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.Price} / Night</p>
            <p className="card-owner"><b>Owner</b> :- {card.Owned_By}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
