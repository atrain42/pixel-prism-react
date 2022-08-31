import Design from "../design/Design";

const Workflow = () => {
  return (
    <section className="workflow">
      <div className="title-content">
        <h1 className="section-title">Design Process</h1>
        <p className="section-text">
          Take a look at how I make your website become a reality
        </p>
      </div>
      <Design />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#98ddd4c9"
          fillOpacity="1"
          d="M0,32L48,42.7C96,53,192,75,288,112C384,149,480,203,576,234.7C672,267,768,277,864,282.7C960,288,1056,288,1152,293.3C1248,299,1344,309,1392,314.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Workflow;
