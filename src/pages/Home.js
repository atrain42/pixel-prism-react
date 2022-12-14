import React from "react";
import { Header, Workflow, Footer, About } from "../layout";
import SingleAlert from "../components/alert/SingleAlert";
import Questions from "../components/accordion/Questions";

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <About />
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
