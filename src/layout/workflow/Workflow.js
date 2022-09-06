import Phases from "../../components/phases/Phases";

const Workflow = () => {
  return (
    <section className="workflow" id="process">
      <div className="title-content">
        <h1 className="section-title">Design Process</h1>
        <p className="section-text">
          Take a look at the steps I follow to build your dream site
        </p>
      </div>
      <Phases />
    </section>
  );
};

export default Workflow;
