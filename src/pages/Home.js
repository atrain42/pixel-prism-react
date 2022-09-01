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
