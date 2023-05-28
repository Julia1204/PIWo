import React from "react";

const Feature = () => {
  const featureComponent = [
    {
      title: "Expertise",
      text: "Our real estate company has a team of highly skilled professionals who possess extensive knowledge of the real estate market, ensuring that our clients receive the best possible advice and guidance.",
    },
    {
      title: "Personalized Service",
      text: "We understand that each client has unique needs and preferences, which is why we provide personalized service that is tailored to meet individual requirements.",
    },
    {
      title: "Trustworthy",
      text: "We have built a reputation of being a trustworthy real estate company that operates with honesty, transparency, and integrity. Our clients can rely on us to always act in their best interests.",
    },
    {
      title: "Exceptional Results",
      text: "We have a track record of achieving exceptional results for our clients, whether it's finding the perfect home, securing a profitable investment property, or selling a property at the best possible price.",
    },
  ];

  const featureComponentDisplay = featureComponent.map((f) => {
    <>
      <section className="feature-grid">
        <div type="feature" className="feature-box">
          <h2>{f.title}</h2>
          <p>{f.text}</p>
        </div>
        <div type="feature" className="feature-box">
          <h2>{f.title}</h2>
          <p>{f.text}</p>
        </div>
        <div type="feature" className="feature-box">
          <h2>{f.title}</h2>
          <p>{f.text}</p>
        </div>
        <div type="feature" className="feature-box">
          <h2>{f.title}</h2>
          <p>{f.text}</p>
        </div>
      </section>
    </>;
  });

  return <>{featureComponentDisplay}</>;
};

export default Feature;
