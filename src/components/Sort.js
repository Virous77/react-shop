import React from "react";
import "../Styles/Sort.css";
import { FiGrid } from "react-icons/fi";
import { MdFormatListBulleted } from "react-icons/md";
import { useFilterContext } from "../store/context/FilterContext";

const Sort = ({ products }) => {
  const {
    filteredProducts,
    sort,
    gridView,
    setGridView,
    setListView,
    updateSort,
  } = useFilterContext();

  return (
    <section className="mainSortSection">
      <div className="gridList">
        <div className={gridView ? "activeView" : null} onClick={setGridView}>
          <FiGrid className="gridIcon" />
        </div>

        <div className={!gridView ? "activeView" : null} onClick={setListView}>
          <MdFormatListBulleted className="listIcon" />
        </div>

        <p className="totalProducts">
          {filteredProducts.length} Products found
        </p>
      </div>

      {/* <div className="lines"></div> */}

      <div className="sortByValues">
        <select name="sort" id="sort" value={sort} onChange={updateSort}>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </div>
    </section>
  );
};

export default Sort;
