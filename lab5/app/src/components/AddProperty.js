import React, { useState } from "react";

const AddProperty = ({ onAddProperty }) => {
  const addPropertyComponent = [
    {
      title: "Add new property",
      button: "Submit",
      image: "/assets/house 5.jpeg",
    },
  ];

  const [newProperty, setNewProperty] = useState({
    imgSource: "assets/new house.jpg",
    bedsCount: "",
    address: "",
    description: "",
    price: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProperty((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProperty(newProperty);
    setNewProperty({
      bedsCount: "",
      address: "",
      description: "",
      price: "",
    });
  };

  const bedroomCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const form = ["Address", "Price", "Bedrooms", "Description"];

  const bedrooms = bedroomCount.map((count) => (
    <option key={count} value={count}>
      {count}
    </option>
  ));

  const formFields = form.map((field) => (
    <div key={field} className="form-field">
      <label>{field}</label>
      {field === "Bedrooms" ? (
        <select
          className="bedrooms-list"
          name="bedsCount"
          value={newProperty.bedsCount}
          onChange={handleInputChange}
        >
          {bedrooms}
        </select>
      ) : field === "Description" ? (
        <textarea
          placeholder="Tell more about your house"
          name="description"
          value={newProperty.description}
          onChange={handleInputChange}
        ></textarea>
      ) : (
        <input
          type={field === "Price" ? "number" : "text"}
          placeholder={field === "Price" ? "$" : `Enter ${field}`}
          name={field.toLowerCase()}
          value={newProperty[field.toLowerCase()]}
          onChange={handleInputChange}
        />
      )}
    </div>
  ));

  const addPropertyComponentDisplay = addPropertyComponent.map((a) => (
    <div id="add-new" className="add-property-section">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="add-title">{a.title}</h3>
        {formFields}
        <button type="submit" className="btn submit-btn">
          {a.button}
        </button>
      </form>
      <div>
        <img className="add-property-img" src={a.image} />
      </div>
    </div>
  ));

  return <>{addPropertyComponentDisplay}</>;
};

export default AddProperty;
