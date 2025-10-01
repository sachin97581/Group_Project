import React from "react";
// import { useNavigate } from "react-router-dom";
import "../style/card.css";
import image from "../assets/react.svg";




function Cards() {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/newpage"); // 👈 Replace with the route you want
  // };

  return (
    <>
    {/* onClick={handleClick} add this in below div */}
      <div className="card-container">   
        <div className="card">
          <img
            src={image}
            className="card-img"
            alt="Album cover"
          />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card’s content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
