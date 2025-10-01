import React from "react";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import "../style/listingData.css"; // 👈 import css

function ListingData() {
  const [value, setValue] = React.useState(2);
  const location = useLocation();
  const card = location.state;

  if (!card) {
    return <h2>No data found!</h2>;
  }

  return (
    <div className="listing-container">
      <h2 className="listing-title">{card.title}</h2>
      <img src={card.img} alt="Property" className="listing-img" />

      <div className="listing-details">
        <p><b>Owner:</b> {card.Owned_By}</p>
        <p><b>Description:</b> {card.description}</p>
        <p><b>Price:</b> {card.Price} / Night</p>
        <p><b>Location:</b> {card.Location}</p>
        <p><b>Category:</b> {card.Category}</p>
        <p><b>Country:</b> {card.Country}</p>
      </div>

      <div className="button-group">
        <button type="button" className="btn btn-success">Edit</button>
        <button type="button" className="btn btn-danger">Delete</button>
        <button type="button" className="btn btn-primary">Book Now</button>
      </div>

      <div className="review-section">
        <h3>Leave a Review</h3>
        <Box sx={{ '& > legend': { mt: 2 }, textAlign: "center" }}>
          <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
          />
        </Box>

        <div className="mb-3 w-100 h-100">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            placeholder="Enter Description"
            rows="4"
            required
          />
          <div className="invalid-feedback">
            Please enter short description!
          </div>
        </div>

        <button type="button" className="review-submit">Submit Review</button>
      </div>
    </div>
  );
}

export default ListingData;
