import React from "react";

const About = () => {
  const aboutComponent = [
    {
      title: "At Evilla we help you turn the key to the future",
    },
  ];

  const aboutComponentDisplay = aboutComponent.map((a) => (
    <>
      <section id="about" className="about-section">
        <div className="about-container">
          <h3 className="about-text">{a.title}</h3>
        </div>
      </section>
    </>
  ));

  return <>{aboutComponentDisplay}</>;
};

export default About;
