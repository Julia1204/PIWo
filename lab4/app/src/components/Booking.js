import React, { useState, useEffect } from "react";
import axios from "axios";
import Property from "./Property";
import AddProperty from "./AddProperty";
import FilterProperties from "./FilterProperties";

function Booking() {
  const bookingComponent = [
    {
      title: "Book a house tour to find your dream place!",
    },
  ];
  const defaultProperties = [
    {
      id: 1,
      imgSource: "assets/house 1.jpg",
      bedsCount: "4",
      address: "123 Main St",
      description: "This beautiful house features a spacious interior with modern design elements. Enjoy the stunning views of the nearby park and relax in the tranquil ambiance.",
      price: "65000",
    },
    {
      id: 2,
      imgSource: "assets/house 2.jpg",
      bedsCount: "3",
      address: "456 Elm Ave",
      description: "Step into luxury with this exquisite home. Impeccable craftsmanship and attention to detail make this property a true gem. Experience elegance and comfort like never before.",
      price: "890000",
    },
    {
      id: 3,
      imgSource: "assets/house 3.jpg",
      bedsCount: "4",
      address: "789 Oak Rd",
      description: "Indulge in the ultimate living experience. This magnificent house offers breathtaking panoramic views, expansive living spaces, and top-of-the-line amenities. Truly a dream come true.",
      price: "770000",
    },
    {
      id: 4,
      imgSource: "assets/house 4.jpg",
      bedsCount: "3",
      address: "101 Paradise Ln",
      description: "Escape to paradise with this stunning modern home. Surrounded by lush greenery and boasting a sleek design, this property combines luxury, serenity, and privacy in one perfect package.",
      price: "75000",
    },
  ];

  const [properties, setProperties] = useState(defaultProperties);

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("records.json")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //FILTER BY NUMBER OF BEDS

  function onFilterValueSelected(filterValue) {
    updateSelectFilter(filterValue);
  }

  let [selectFilterValue, updateSelectFilter] = useState("all");

  let selectFilteredProperties = posts.filter((property) => {
    if (selectFilterValue === "1") {
      return property.bedsCount === "1";
    } else if (selectFilterValue === "2") {
      return property.bedsCount === "2";
    } else if (selectFilterValue === "3") {
      return property.bedsCount === "3";
    } else if (selectFilterValue === "4") {
      return property.bedsCount === "4";
    } else {
      return property;
    }
  });

  //FILTER BY ADDRESS OR DESCRIPTION
  const onInputFilterChange = (e) => {
    updateInputFilter(e.target.value);
  };

  const [inputFilterValue, updateInputFilter] = useState("");

  const InputFilreredProperties = posts.filter((property) => {
    if (inputFilterValue.toLowerCase() === "") {
      return property;
    } else if (property.address.toLowerCase().includes(inputFilterValue)) {
      return property.address.toLowerCase().includes(inputFilterValue);
    } else if (property.description.toLowerCase().includes(inputFilterValue)) {
      return property.description.toLowerCase().includes(inputFilterValue);
    }
  });

  // INSERTION OF BOTH FILTERS
  const filteredProperties = InputFilreredProperties.filter((value) =>
    selectFilteredProperties.includes(value)
  );

  const handleAddProperty = (newProperty) => {
    setProperties((prevState) => [...prevState, newProperty]);
  };

  const [sortOption, setSortOption] = useState("bestMatch");
  const lowestFirstSort = [...posts].sort((property1, property2) => {
    property1 = property1.price;
    property2 = property2.price;

    if (property1 < property2) {
      return -1;
    }
    if (property1 > property2) {
      return 1;
    }
    return 0;
  });

  // INSERTION OF FILTERS AND LOWEST FIRST
  const filteredLowestSortedProperties = lowestFirstSort.filter((value) =>
    filteredProperties.includes(value)
  );

  const highestFirstSort = [...posts].sort((property1, property2) => {
    property1 = property1.price;
    property2 = property2.price;

    if (property1 > property2) {
      return -1;
    }
    if (property1 < property2) {
      return 1;
    }
    return 0;
  });

  // INSERTION OF FILTERS AND HIGHEST FIRST
  const filteredHighestSortedProperties = highestFirstSort.filter((value) =>
    filteredProperties.includes(value)
  );

  const propertiesListDisplay = posts.map((p) => <Property property={p} />);

  const filteredPropertiesDisplay = filteredProperties.map((p) => (
    <Property property={p} />
  ));

  const lowestFirstSortedPropertiesDisplay = filteredLowestSortedProperties.map(
    (p) => <Property property={p} />
  );

  const highestFirstSortedDisplay = filteredHighestSortedProperties.map((p) => (
    <Property property={p} />
  ));

  const postsDisplay = posts.map((p) => {
    <Property property={p} key={p.id} />;
  });

  const bookingComponentDisplay = bookingComponent.map((b) => (
    <div>
      <section id="house-tours" className="booking-section">
        <section className="booking-section-title">
          <h3>{b.title}</h3>
        </section>
        <div className="filter-area">
          <input
            className="filter-input"
            onChange={onInputFilterChange}
            placeholder="type to filter properties"
          ></input>
          <FilterProperties filterValueSelected={onFilterValueSelected} />
          <select
            className="bedrooms-list filter-select"
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
          >
            <option value="bestMatch">best match</option>
            <option value="lowestFirst">price (lowest first)</option>
            <option value="highestFirst">price (highest first)</option>
          </select>
        </div>
        <section className="house-section">
          {sortOption === "bestMatch"
            ? filteredPropertiesDisplay
            : sortOption === "lowestFirst"
            ? lowestFirstSortedPropertiesDisplay
            : sortOption === "highestFirst"
            ? highestFirstSortedDisplay
            : filteredPropertiesDisplay}
          {/* {postsDisplay} */}
        </section>
      </section>
      <AddProperty onAddProperty={handleAddProperty} />
    </div>
  ));

  return <>{bookingComponentDisplay}</>;
}

export default Booking;
