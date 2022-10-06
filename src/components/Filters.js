import React from "react";
import { useFilterContext } from "../store/context/FilterContext";
import { FaCheck } from "react-icons/fa";
import "../Styles/Filter.css";

const Filters = () => {
  const {
    clearFilters,
    updateFilters,
    filters: {
      text,
      company,
      color,
      category,
      minPrice,
      maxPrice,
      shipping,
      price,
    },
    allProducts,
  } = useFilterContext();

  const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);

    if (type === "colors") {
      unique = unique.flat();
    }

    return ["all", ...new Set(unique)];
  };

  const categories = getUniqueValues(allProducts, "category");
  const companies = getUniqueValues(allProducts, "company");
  const colors = getUniqueValues(allProducts, "colors");

  const setPrice = (prices) => {
    return Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "USD",
    }).format(prices / 100);
  };

  return (
    <section className="mainFilterBar">
      <div className="mainFilter">
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Search */}
          <div className="Formcontrol">
            <input
              type="text"
              name="text"
              placeholder="search"
              className="searchInput"
              value={text}
              onChange={updateFilters}
            />
          </div>

          {/* category */}
          <div className="formControl">
            <h4>Category</h4>

            <div className="category">
              {categories.map((c, idx) => (
                <button
                  className={`${
                    category === c ? "activeFilters" : "nonActive"
                  }`}
                  key={idx}
                  onClick={updateFilters}
                  name="category"
                  type="button"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* company */}
          <div className="formControl">
            <h4>Company</h4>

            <div className="company">
              <select name="company" value={company} onChange={updateFilters}>
                {companies.map((com, idx) => {
                  return (
                    <option value={com} key={idx}>
                      {com}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          {/* color */}

          <div className="formControl">
            <h4>Color</h4>

            <div className="color">
              {colors.map((c, idx) => {
                if (c === "all") {
                  return (
                    <button
                      key={idx}
                      name="color"
                      onClick={updateFilters}
                      data-color="all"
                      className={`activeColor ${
                        color === c ? "activeFilters" : null
                      }`}
                    >
                      All
                    </button>
                  );
                }

                return (
                  <button
                    key={idx}
                    name="color"
                    style={{ background: c }}
                    data-color={c}
                    onClick={updateFilters}
                  >
                    {color === c ? (
                      <FaCheck className="filterCheckIcon" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="formControlP">
            <h4>Price</h4>

            <div className="price">
              <p>{setPrice(price)}</p>
              <input
                type="range"
                name="price"
                onChange={updateFilters}
                min={minPrice}
                max={maxPrice}
                value={price}
              />
            </div>
          </div>

          <div className="formControlC">
            <label htmlFor="shipping">Free Shipping</label>
            <input
              type="checkbox"
              name="shipping"
              id="shipping"
              onClick={updateFilters}
              checked={shipping}
            />
          </div>
        </form>

        <div className="clearButton">
          <button type="button" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </section>
  );
};

export default Filters;
