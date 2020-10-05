import React from "react";

const Filter = ({ onChange, movies }) => {
  let regions = [];
  movies.map((movie) => {
    regions.push(movie.region);
  });
  let uniqueRegions = [...new Set(regions)];

  return (
    <select name="Select Movie Region" id="" onChange={onChange}>
      <option value="">Select All</option>
      {uniqueRegions &&
        uniqueRegions.map((region) => {
          return (
            <option key={region} value={region}>
              {region.toUpperCase()}
            </option>
          );
        })}
    </select>
  );
};

export default Filter;
