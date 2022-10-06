import React from "react";
import PageRoute from "./PageRoute";
import aboutIMG from "../Assets/helena.jpg";
import "../Styles/About.css";

const About = () => {
  return (
    <main>
      <PageRoute title={`About`} />

      <section className="about">
        <div className="image-container">
          <img src={aboutIMG} alt="Team" />
        </div>
        <div className="about-info">
          <h1>About us</h1>
          <h2></h2>
          <p>
            Teamwork is the ability to work together toward a common vision. The
            ability to direct individual accomplishments toward organizational
            objectives. It is the fuel that allows common people to attain
            uncommon results.
            <br />
            Find a group of people who challenge and inspire you, spend a lot of
            time with them, and it will change your life.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
