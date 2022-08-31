import React from "react";
import Header from "../layout/header/Header";
import Service from "../components/Service/Service";
import SingleAlert from "../components/alert/SingleAlert";
import Workflow from "../layout/workflow/Workflow";
import Questions from "../components/accordion/Questions";
import Footer from "../layout/footer/Footer";

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <section className="home-section">
        <h1 className="white-title">Enhancement</h1>
        <p className="white-text">
          Here are just a few of the ways that websites can enhance your
          business.
        </p>
        <Service />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f1f37284"
            fillOpacity="0.4"
            d="M0,32L48,69.3C96,107,192,181,288,176C384,171,480,85,576,69.3C672,53,768,107,864,133.3C960,160,1056,160,1152,176C1248,192,1344,224,1392,240L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </section>
      <section className="alert-section">
        <h1 className="white-title">Creating your site</h1>
        <p className="white-text">
          It is important that your site has a memorable UI and is fast.
        </p>
        <SingleAlert />
      </section>
      <Workflow />
      <Questions />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
