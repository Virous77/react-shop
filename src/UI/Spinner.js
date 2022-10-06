import React from "react";
import { ImSpinner9 } from "react-icons/im";
import "./Spinner.css";

const Spinner = () => {
  return (
    <section className="spinner">
      <ImSpinner9 className="spinnerIcon" />
    </section>
  );
};

export default Spinner;
