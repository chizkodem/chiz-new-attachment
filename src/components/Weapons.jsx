import React from "react";
import {useEffect} from "react";
import {functionTest} from "./Lightbox";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

function useEffectInstant() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer on component unmount
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}

const flexDirection = (type, split) => {
  const conName = document.getElementById(`${type}-icons`);

  if (conName) {
    conName.style.flexDirection = split ? "row" : "column";
  }
};

const Weapons = ({gunList, openLightbox}) => {
  const imgIconSrc = `img/${gunList.type} icons/`;
  const imgAttachSrc = `attach/${gunList.type} attach/`;
  useEffectInstant();
  const chunkSize = 4;

  const chunks = gunList.split
    ? chunkArray(gunList.list, chunkSize)
    : [gunList.list];
  {
    if (!gunList.split) {
      flexDirection(gunList.type, gunList.split);
    } else {
      flexDirection(gunList.type, gunList.split);
    }
  }

  return (
    <>
      {chunks.map((chunk, index) => (
        <div
          className={`icons-container hidden`}
          key={index}
          id={`${gunList.type}-icons`}
        >
          {chunk.map((rifle) => (
            <div className="icon hidden" key={rifle}>
              <div
                className="img-container"
                id="img-container"
                onClick={() => {
                  openLightbox(rifle, imgAttachSrc);
                }}
              >
                <img
                  src={imgIconSrc + rifle + ".jpg"}
                  alt={rifle}
                  id="img-icon"
                />
                <span>{rifle}</span>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Weapons;
