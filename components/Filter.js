import React, { useState, useEffect } from "react";

const Filter = ({ onChange, movies }) => {
  let regions = [];
  movies.map((movie) => {
    regions.push(movie.region);
  });
  let uniqueRegions = [...new Set(regions)];

  return (
    <>
      <select name="" id="" onChange={onChange}>
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
      <style jsx>{`
        select {
          margin-top: 30px;
          width: 200px;
          height: 42px;
        }
      `}</style>
    </>
  );
};

export default Filter;