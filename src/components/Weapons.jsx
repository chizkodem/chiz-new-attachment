import React from "react";
import {useEffect} from "react";

const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const soloClass = (type) => {
  if (type !== "AR" && type !== "SMG") {
    return "solo";
  }
};

const getTitle = (type) => {
  if (type === "AR") {
    return <h2>Assault Rifles</h2>;
  }
  if (type === "SMG") {
    return <h2>Submachine Gun</h2>;
  }
  if (type === "SG") {
    return <h2>Shotgun</h2>;
  }
  if (type === "MM") {
    return <h2>Marksman</h2>;
  }
  if (type === "SR") {
    return <h2>Sniper Rifles</h2>;
  }
  if (type === "LMG") {
    return <h2>Light Machine Guns</h2>;
  }
  if (type === "2ND") {
    return <h2>Secondary</h2>;
  }
  if (type === "EXTRAS") {
    return <h2>Extras</h2>;
  }
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

  if (!gunList.split) {
    flexDirection(gunList.type, gunList.split);
  } else {
    flexDirection(gunList.type, gunList.split);
  }

  return (
    <>
      <section className={`${gunList.type} hidden`} id={`${gunList.type}`}>
        <div className="attach">
          {getTitle(gunList.type)}
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
                      className={soloClass(gunList.type)}
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
        </div>
      </section>
    </>
  );
};

export default Weapons;
