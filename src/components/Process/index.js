import "./index.css";

const processData = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep diving into your brand goals and user needs.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Crafting a roadmap for technical and visual success.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Executing design and code with surgical precision.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Quality checks and seamless deployment to market.",
  },
];

const Process = () => {
  return (
    <section className="process-section">

      <span className="process-subtitle">
        OUR PROCESS
      </span>

      <h2 className="process-heading">
        Precision-Led Development
      </h2>

      <div className="process-line"></div>

      <div className="process-grid">
        {processData.map((item, index) => (
          <div className="process-card" key={index}>

            <div className="process-circle">
              {item.number}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Process;