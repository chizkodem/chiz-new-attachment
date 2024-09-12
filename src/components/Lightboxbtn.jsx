import React, {useEffect, useRef, useState} from "react";
import {loadingImg} from "./Lightbox";
import "./Glitch.css";

const changeImg = (src) => {
  const img = document.getElementById("img");
  img.src = src;
};

const callLoadImg = (gunName, attachSrc) => {
  const attachImgLoad = document.querySelector(".attach-img.load");
  attachImgLoad.style.height = `0px`;
  attachImgLoad.style.opacity = "0%";
  attachImgLoad.classList.remove("load");

  const loadingIcon = document.getElementById("loading-icon");
  loadingIcon.style.display = "block";
  setTimeout(() => {
    loadingImg(gunName, attachSrc);
  }, 500);
};

const getAttachName = (src) => {
  if (src.includes("red-dot-type")) {
    return "red-dot";
  }
  if (src.includes("pin-point")) {
    return "pin-point";
  }
  if (src.includes("ar-type")) {
    return "ar build";
  }
  if (src.includes("burst-type")) {
    return "burst";
  }
  if (src.includes("smg-type")) {
    return "smg-build";
  } else return "main";
};

const Lightboxbtn = ({list, gunName, attachSrc}) => {
  const isLoaded = useRef(false); // Tracks if the effect has run
  const [buttons, setButtons] = useState([]); // State to store buttons
  const [selected, setSelected] = useState(0); // Track the selected button

  useEffect(() => {
    if (!isLoaded.current) {
      const Srcs = list || []; // Ensure Srcs is an array
      const newButtons = [];
      let processedImages = 0;

      Srcs.forEach((src) => {
        const image = new Image();
        image.src = src;

        image.onload = () => {
          newButtons.push(src);
          processedImages++;

          // Only set the buttons once all images are either loaded or errored
          if (processedImages === Srcs.length) {
            // console.log("set buttons");
            setButtons(newButtons);
          }
        };

        image.onerror = () => {
          processedImages++;

          // Only create buttons if there are at least two successfully loaded images
          if (processedImages === Srcs.length) {
            console.log("set buttons");

            setButtons(newButtons);
          }
        };
      });

      isLoaded.current = true;
    }
  }, [list]); // Add selected to the dependency array

  const renderButtons = () => {
    if (buttons.length === 1) return null;

    return buttons.map((src, index) => (
      <button
        className={`img-btns img-btn-${index} ${
          index === selected ? "active" : ""
        }`}
        key={index}
        id={`img-btn-${index}`}
        onClick={() => {
          changeImg(src);
          setSelected(index);
          callLoadImg(gunName, attachSrc);
        }}
      >
        {getAttachName(src)}
      </button>
    ));
  };

  return (
    <>
      <div className="image-buttons" id="image-buttons">
        {renderButtons()}
      </div>
    </>
  );
};

export default Lightboxbtn;
