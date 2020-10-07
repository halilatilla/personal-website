import React from "react";

const Filter = ({ onChange, movies }) => {
  let regions = [];
  movies.map((movie) => {
    regions.push(movie.region);
  });
  let uniqueRegions = [...new Set(regions)];

  return (
    <label>
      Select A Movie Region :
      <select onChange={onChange} id="contentMain" autoComplete="off">
        <option value="">SELECT ALL</option>
        {uniqueRegions &&
          uniqueRegions.map((region) => {
            return (
              <option key={region} value={region}>
                {region.toUpperCase()}
              </option>
            );
          })}
      </select>
    </label>
  );
};

export default Filter;
