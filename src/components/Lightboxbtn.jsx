import React, {useEffect, useRef, useState} from "react";
import {loadingImg} from "./Lightbox";

const changeImg = (src) => {
  const img = document.getElementById("img");
  img.src = src;
};

const callLoadImg = (gunName, attachSrc) => {
  const attachImgLoad = document.querySelector(".attach-img.load");
  const lbImgCon = document.getElementById("lightbox-img-container");
  attachImgLoad.style.height = `0px`;
  attachImgLoad.style.opacity = "0%";

  attachImgLoad.classList.remove("load");
  setTimeout(() => {
    loadingImg(gunName, attachSrc);
  }, 500);
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
      let failedImgs = 0;

      Srcs.forEach((src) => {
        const image = new Image();
        image.src = src;

        image.onload = () => {
          newButtons.push(src);
          processedImages++;

          // Only set the buttons once all images are either loaded or errored
          if (processedImages === Srcs.length) {
            console.log("set buttons");
            setButtons(newButtons);
          }
        };

        image.onerror = () => {
          failedImgs++;
          processedImages++;

          // Only create buttons if there are at least two successfully loaded images
          if (processedImages === Srcs.length && failedImgs < Srcs.length - 1) {
            console.log("set buttons");

            setButtons(newButtons);
          }
        };
      });

      isLoaded.current = true;
    }
  }, [list]); // Add selected to the dependency array

  const renderButtons = () => {
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
        {index}
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
