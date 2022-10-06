import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Error.css";
import { MdError } from "react-icons/md";

const ErrorPage = () => {
  return (
    <section className="error">
      <h1>
        <MdError className="error-icon" /> <span>404</span>
      </h1>
      <h3>Sorry, the page you tried cannot be found</h3>

      <div className="back-home">
        <Link to={"/"} className="btn">
          BACK HOME
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
