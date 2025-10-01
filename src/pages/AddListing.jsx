import React, { useState } from "react";
import "../style/addlisting.css";

function AddListing() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    price: "",
    country: "",
    category: "",
    location: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create FormData for file upload
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // You can send this to your backend (Express API)
    fetch("http://localhost:3000/listing", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Listing added:", result);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8 offset-2">
          <h2 className="mb-4 text-center">New Data</h2>
          <form
            onSubmit={handleSubmit}
            className="needs-validation"
            encType="multipart/form-data"
          >
            {/* Title */}
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="form-control"
                placeholder="Enter Title"
                required
                value={formData.title}
                onChange={handleChange}
              />
              <div className="valid-feedback">Title Looks good!</div>
            </div>

            {/* Description */}
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
                value={formData.description}
                onChange={handleChange}
              />
              <div className="invalid-feedback">
                Please enter short description!
              </div>
            </div>

            {/* Upload Image */}
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                className="form-control"
                required
                onChange={handleChange}
              />
            </div>

            {/* Price + Country */}
            <div className="row">
              <div className="mb-3 col-md-4">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  className="form-control"
                  placeholder="Enter Price"
                  required
                  value={formData.price}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">Price should be valid!</div>
              </div>

              <div className="mb-3 col-md-8">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="form-control"
                  placeholder="Enter Country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  Country name should be valid!
                </div>
              </div>
            </div>

            {/* Category */}
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <div className="input-group">
                <button type="button" className="btn btn-outline-secondary">
                  Category
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu" id="categoryDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setFormData({ ...formData, category: "Trending" })
                      }
                    >
                      Trending
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setFormData({ ...formData, category: "Room" })
                      }
                    >
                      Room
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() =>
                        setFormData({ ...formData, category: "Mountains" })
                      }
                    >
                      Mountains
                    </a>
                  </li>
                  {/* Add more categories like in your HTML */}
                </ul>
                <input
                  type="text"
                  id="category"
                  name="category"
                  className="form-control"
                  placeholder="Enter category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">Category should be valid!</div>
              </div>
            </div>

            {/* Location */}
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="form-control"
                placeholder="Enter Location"
                required
                value={formData.location}
                onChange={handleChange}
              />
              <div className="invalid-feedback">Location should be valid!</div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddListing;
