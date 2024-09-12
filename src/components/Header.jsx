import {useState, useRef} from "react";
import "./Header.css";

const Header = ({onToggleLightbox}) => {
  const [isChecked, setIsChecked] = useState(false);
  const collapseRef = useRef(null);

  document.addEventListener("click", (event) => {
    // console.log(event.target);

    if (
      (!event.target.classList.contains("lightbox-content") &&
        event.target.classList.contains("toggle") &&
        event.target.id.includes("checkbox")) ||
      event.target.id.includes("lightbox-cover")
    ) {
      unCheck();
    }
  });

  const handleIsDarkCheckBox = (element) => {
    if (element.target.checked) {
      document.documentElement.style.setProperty(
        "--header-background-color",
        "rgba(73, 73, 73, 0.584)"
      );
      document.documentElement.style.setProperty(
        "--header-border-color",
        "rgba(0, 0, 0, 0.753)"
      );
      document.documentElement.style.setProperty(
        "--header-shadow-color",
        "rgba(133, 133, 133, 0.308)"
      );
      document.documentElement.style.setProperty(
        "--plschange-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--plschange-color-2",
        "rgb(0, 0, 0)"
      );
      document.documentElement.style.setProperty(
        "--common-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--body-color",
        "rgba(0, 0, 0, 0.507)"
      );
      document.documentElement.style.setProperty(
        "--attach-color",
        "rgba(99, 99, 99, 0.781)"
      );
      document.documentElement.style.setProperty(
        "--navbar-img",
        "invert(100%)"
      );
      document.documentElement.style.setProperty(
        "--light-box-background",
        "rgba(54, 54, 54, 0.929)"
      );
      document.documentElement.style.setProperty(
        "--active-img-btn-color",
        "rgba(62, 170, 76, 0.671)"
      );
      document.documentElement.style.setProperty(
        "--top-glow-color",
        "rgb(233, 75, 233)"
      );
      document.documentElement.style.setProperty(
        "--bottom-glow-color",
        "rgb(0, 255, 213)"
      );
      document.documentElement.style.setProperty(
        "--top-text-glow-color",
        "#00a5ce"
      );
      document.documentElement.style.setProperty(
        "--bottom-text-glow-color",
        "#a10aa1"
      );
    } else {
      document.documentElement.style.setProperty(
        "--header-background-color",
        "rgba(255, 255, 255, 0.384)"
      );
      document.documentElement.style.setProperty(
        "--header-border-color",
        "rgba(255, 255, 255, 0.753)"
      );
      document.documentElement.style.setProperty(
        "--header-shadow-color",
        "rgba(53, 53, 53, 0.308)"
      );
      document.documentElement.style.setProperty("--plschange-color", "black");
      document.documentElement.style.setProperty(
        "--plschange-color-2",
        "white"
      );
      document.documentElement.style.setProperty(
        "--common-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--body-color",
        "rgba(255, 255, 255, 0)"
      );
      document.documentElement.style.setProperty(
        "--attach-color",
        "rgba(255, 255, 255, 0.644)"
      );
      document.documentElement.style.setProperty("--navbar-img", "invert(0)");
      document.documentElement.style.setProperty(
        "--light-box-background",
        "rgba(212, 212, 212, 0.774)"
      );
      document.documentElement.style.setProperty(
        "--active-img-btn-color",
        "rgba(62, 170, 76, 0.671)"
      );
      document.documentElement.style.setProperty(
        "--top-glow-color",
        "rgb(233, 75, 233)"
      );
      document.documentElement.style.setProperty(
        "--bottom-glow-color",
        "rgb(0, 255, 213)"
      );
      document.documentElement.style.setProperty(
        "--top-text-glow-color",
        "#59ceeb"
      );
      document.documentElement.style.setProperty(
        "--bottom-text-glow-color",
        "#e65ee6"
      );
    }
  };

  const unCheck = () => {
    setIsChecked(false);
    if (collapseRef.current) {
      collapseRef.current.classList.remove("reveal");
    }
    onToggleLightbox(false);
  };

  const handleCheckboxChange = (element) => {
    setIsChecked(element.target.checked);
    if (element.target.checked) {
      onToggleLightbox(true);

      collapseRef.current?.classList.add("reveal");
    } else {
      collapseRef.current.classList.remove("reveal");
      onToggleLightbox(false);
    }
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="#HOME">Chiz</a>
        <label aria-checked="false" role="switch" className="switch">
          <input type="checkbox" onChange={handleIsDarkCheckBox} />
          <span className="slider">
            <span className="slider-inner"></span>
          </span>
        </label>
      </div>
      <nav className="navbar">
        <ul>
          <li className="ar-hide">
            <a href="#AR">
              <img src="/nav icons/AR.png" alt="" />
            </a>
          </li>

          <div className="collapse" ref={collapseRef} onClick={unCheck}>
            <li>
              <a href="#AR" className="ar-sub">
                <img src="/nav icons/AR.png" alt="" />
                <span>AR</span>
              </a>
            </li>
            <li>
              <a href="#SMG">
                <img src="/nav icons/SMG.png" alt="" />
                <span>SMG</span>
              </a>
            </li>
            <li>
              <a href="#SG">
                <img src="/nav icons/SG.png" alt="" />
                <span>SG</span>
              </a>
            </li>
            <li>
              <a href="#MM">
                <img src="/nav icons/MM.png" alt="" />
                <span>MM</span>
              </a>
            </li>
            <li>
              <a href="#SR">
                <img src="/nav icons/SR.png" alt="" />
                <span>SR</span>
              </a>
            </li>
            <li>
              <a href="#LMG">
                <img src="/nav icons/LMG.png" alt="" />
                <span>LMG</span>
              </a>
            </li>
            <li>
              <a href="#2ND">
                <img src="/nav icons/Secondary.png" alt="" />
                <span>2ND</span>
              </a>
            </li>
            <li className="extras">
              <a href="#EXTRAS">
                <img src="icons/extras.png" alt="" />
                <span>extras</span>
              </a>
            </li>
          </div>
          <li>
            <a href="#MORE">
              <input
                id="checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <label className="toggle" htmlFor="checkbox">
                <div id="bar1" className="bars"></div>
                <div id="bar2" className="bars"></div>
                <div id="bar3" className="bars"></div>
              </label>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
