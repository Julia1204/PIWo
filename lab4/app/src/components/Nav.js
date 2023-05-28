import React, { useContext, useEffect } from "react";
import UserContext from "./service/UserContext";

const Nav = () => {
  const { user } = useContext(UserContext);

  const navComponent = [
    {
      home: "Home",
      about: "About",
      houseTours: "House tours",
      contact: "Contact",
      addNew: "Add new",
    },
  ];

  

  const toggleSwitch = React.useRef(null);
 
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");


    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);

      if (currentTheme === "dark") {
        toggleSwitch.current.checked = true;
      } else {
        const hour = new Date().getHours();

        if (hour < 6 || hour >= 22) {
          document.documentElement.setAttribute("data-theme", "dark");
          toggleSwitch.current.checked = true;
          localStorage.setItem("theme", "dark");
        } else {
          document.documentElement.setAttribute("data-theme", "light");
          toggleSwitch.current.checked = false;
          localStorage.setItem("theme", "light");
        }
      }
    }
  }, []);

  function switchTheme(e) {
    
    const theme = e.target.checked ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }

  const navComponentDisplay = navComponent.map((n) => (
    <>
      <ul className="menu">
        <li>
          <a className="menu-item" href="#home">
            {n.home}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#about">
            {n.about}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#house-tours">
            {n.houseTours}
          </a>
        </li>
        <li>
          <a className="menu-item" href="#contact">
            {n.contact}
          </a>
        </li>
        <li>
          <a className="add-new btn" href="#add-new">
            {n.addNew}
          </a>
        </li>
      </ul>
    </>
  ));

  return (
    <div>

      <nav className="navbar">
        <div className="header">
        <div className="logo-user-container">
          <svg
            className="logo"
            width="111"
            height="42"
            viewBox="0 0 111 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="21" cy="21" r="21" fill="#FFC044" />
            <path
              d="M28.424 20.624H39.208V24.656H28.424V20.624ZM28.808 29.84H41V34H23.656V11.6H40.584V15.76H28.808V29.84ZM49.2885 34L42.0565 16.784H47.2085L53.2245 31.6H50.6645L56.9045 16.784H61.7045L54.4405 34H49.2885ZM63.7415 34V16.784H68.7335V34H63.7415ZM66.2375 14.384C65.3202 14.384 64.5735 14.1173 63.9975 13.584C63.4215 13.0507 63.1335 12.3893 63.1335 11.6C63.1335 10.8107 63.4215 10.1493 63.9975 9.616C64.5735 9.08267 65.3202 8.816 66.2375 8.816C67.1548 8.816 67.9015 9.072 68.4775 9.584C69.0535 10.0747 69.3415 10.7147 69.3415 11.504C69.3415 12.336 69.0535 13.0293 68.4775 13.584C67.9228 14.1173 67.1762 14.384 66.2375 14.384ZM73.3665 34V10.256H78.3585V34H73.3665ZM82.9915 34V10.256H87.9835V34H82.9915ZM103.177 34V30.64L102.857 29.904V23.888C102.857 22.8213 102.526 21.9893 101.865 21.392C101.225 20.7947 100.233 20.496 98.8885 20.496C97.9712 20.496 97.0645 20.6453 96.1685 20.944C95.2938 21.2213 94.5472 21.6053 93.9285 22.096L92.1365 18.608C93.0752 17.9467 94.2058 17.4347 95.5285 17.072C96.8512 16.7093 98.1952 16.528 99.5605 16.528C102.185 16.528 104.222 17.1467 105.673 18.384C107.123 19.6213 107.849 21.552 107.849 24.176V34H103.177ZM97.9285 34.256C96.5845 34.256 95.4325 34.032 94.4725 33.584C93.5125 33.1147 92.7765 32.4853 92.2645 31.696C91.7525 30.9067 91.4965 30.0213 91.4965 29.04C91.4965 28.016 91.7418 27.12 92.2325 26.352C92.7445 25.584 93.5445 24.9867 94.6325 24.56C95.7205 24.112 97.1392 23.888 98.8885 23.888H103.465V26.8H99.4325C98.2592 26.8 97.4485 26.992 97.0005 27.376C96.5738 27.76 96.3605 28.24 96.3605 28.816C96.3605 29.456 96.6058 29.968 97.0965 30.352C97.6085 30.7147 98.3018 30.896 99.1765 30.896C100.009 30.896 100.755 30.704 101.417 30.32C102.078 29.9147 102.558 29.328 102.857 28.56L103.625 30.864C103.262 31.9733 102.601 32.816 101.641 33.392C100.681 33.968 99.4432 34.256 97.9285 34.256Z"
              fill="#3B3B3B"
            />
          </svg>
          <div>
          {user ? (
                <div className="user-container">
              <img className="user-icon" src="./assets/person.svg" /> Hello, {user.name} {user.lastName}
                </div>
              ) : (<div></div>)}
          </div>
          </div>
          <div className="theme-switch-wrapper">
            <em>
              <svg
                className="mode-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="M479.765 716Q538 716 579 675.235q41-40.764 41-99Q620 518 579.235 477q-40.764-41-99-41Q422 436 381 476.765q-41 40.764-41 99Q340 634 380.765 675q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280 576q0-83 58.5-141.5T480 376q83 0 141.5 58.5T680 576q0 83-58.5 141.5T480 776ZM70 606q-12.75 0-21.375-8.675Q40 588.649 40 575.825 40 563 48.625 554.5T70 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170 606H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790 546h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890 606H790ZM479.825 296Q467 296 458.5 287.375T450 266V166q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 166v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720q-12.825 0-21.325-8.62-8.5-8.63-8.5-21.38V886q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510 886v100q0 12.75-8.675 21.38-8.676 8.62-21.5 8.62ZM240 378l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217 270 226 279l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5 774q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743 882 734 873Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786 313 777 322l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897 873.103q-8.897-8.896-8.897-21.5Q174 839 183 830l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291 783 291 795t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480 576Z" />
              </svg>
            </em>
            <label className="theme-switch" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                ref={toggleSwitch}
                onChange={switchTheme}
              />
              <div className="slider round"></div>
            </label>
            <em>
              <svg
                className="mode-icon"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                viewBox="0 96 960 960"
                width="48"
              >
                <path d="M480 936q-150 0-255-105T120 576q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480 936Zm0-60q109 0 190-67.5T771 650q-25 11-53.667 16.5Q688.667 672 660 672q-114.689 0-195.345-80.655Q384 510.689 384 396q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180 576q0 125 87.5 212.5T480 876Zm-4-297Z" />
              </svg>
            </em>
          </div>
        </div>
        {navComponentDisplay}
      </nav>
    </div>
  );
};

export default Nav;
