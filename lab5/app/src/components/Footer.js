import React from "react";

const Footer = () => {
  const footerComponent = [
    {
      title: "Turn your dreams of owning a home into a reality.",
      subtitle:
        "Contact us today to learn more about our services and how we can assist you in all your real estate needs.",
      address: "address",
      telephone: "telephone",
      image1: "assets/footer 1.jpg",
      image2: "assets/footer 2.jpg",
    },
  ];

  const footerComponentDisplay = footerComponent.map((f) => (
    <>
      <footer id="contact">
        <div className="call-to-action-section">
          <h3 className="footer-header">{f.title}</h3>
          <p>{f.subtitle}</p>
          <button className="btn footer-btn">Email us!</button>
        </div>
        <div className="footer-background-section">
          <div className="footer-background"></div>
          <div className="footer-images">
            <div type="footer" className="footer-el">
              <img className="footer-img" src={f.image1} />
            </div>
            <div type="footer" className="footer-el footer-el">
              <img className="footer-img" src={f.image2} />
            </div>
            <div type="footer" className="footer-el footer-details">
              <div>
                <svg
                  className="footer-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 96 960 960"
                  width="40"
                >
                  <path d="M479.956 571.268q31.03 0 53.337-22.097 22.308-22.097 22.308-53.127 0-31.029-22.166-53.337-22.166-22.308-53.293-22.308-31.128 0-53.269 22.166t-22.141 53.293q0 31.127 22.097 53.269 22.097 22.141 53.127 22.141ZM480 987.443Q314.413 846.254 232.753 726.386q-81.659-119.867-81.659-222.335 0-154.447 99.183-245.869t229.715-91.422q130.531 0 229.889 91.5 99.359 91.5 99.359 245.712 0 102.482-81.827 222.382Q645.587 846.254 480 987.443Z" />
                </svg>
              </div>
              <p className="footer-icon-name">
                <a href="#">{f.address}</a>
              </p>
            </div>
            <div type="footer" className="footer-el footer-details">
              <div>
                <svg
                  className="footer-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40"
                  viewBox="0 96 960 960"
                  width="40"
                >
                  <path d="M791.232 943.841q-124.37 0-246.185-59.652T326.616 728.192q-96.617-96.344-156.436-218.264-59.818-121.921-59.818-245.914 0-24.572 16.916-41.489 16.917-16.917 41.49-16.917h142.478q24.74 0 40.642 13.145 15.902 13.145 21.374 37.899l26.478 118.014q3.884 20.747-.939 37.167-4.822 16.421-17.743 28.022l-100.536 94.899q47.565 77.333 107.261 136.163 59.695 58.829 134.376 102.242l98.536-98.551q14.254-14.355 30.631-19.663 16.377-5.308 35.892-.569l110.333 24.681q24.652 6.015 38.37 22.508 13.717 16.493 13.717 41.435v141.87q0 24.949-16.916 41.96-16.917 17.011-41.49 17.011Z" />
                </svg>
              </div>
              <p className="footer-icon-name">
                <a href="#">{f.telephone}</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  ));

  return <div>{footerComponentDisplay}</div>;
};

export default Footer;
