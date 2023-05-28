import React from "react";

let FilterProperties = (props) => {
  function onFilterValueChanged(e) {
    props.filterValueSelected(e.target.value);
  }

  return (
    <div className="specific-filter-area" onChange={onFilterValueChanged}>
      <select className="bedrooms-list filter-select" name="bedCount">
        <option value="-">how many bedrooms?</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
  );
};

export default FilterProperties;
