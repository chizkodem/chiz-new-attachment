import "./App.css";
import {useEffect, useState} from "react";
import Header from "./components/Header.jsx";
import Weapons from "./components/Weapons.jsx";
import Lightbox, {functionTest} from "./components/Lightbox.jsx";

const weaponListAr = {
  list: [
    "Peacekeeper",
    "EM2",
    "HVK-30",
    "KN-44",
    "BP-50",
    "AK-47",
    "AK-117",
    "ICR-1",
    "MADDOX",
  ],
  type: "AR",
  split: true,
};

const weaponListSmg = {
  list: ["MSMC", "HG 40"],
  type: "SMG",
  split: true,
};

const weaponListSG = {
  list: ["KRM", "ARGUS", "STRIKER"],
  type: "SG",
  split: false,
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
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

  const [lightboxImage, setLightboxImage] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = (gunName, attachSrc) => {
    const imageVariations = [
      `${attachSrc}${gunName}.jpg`,
      `${attachSrc}${gunName}1.jpg`,
      `${attachSrc}${gunName}2.jpg`,
    ];
    functionTest(imageVariations);
    document.addEventListener("click", (event) => {
      const lightBoxCon = document.getElementById("lightbox");

      if (
        !event.target.id.includes("img") ||
        (!event.target.id.includes("img-icon") &&
          !event.target.id.includes("img-btn"))
      ) {
        if (lightBoxCon) {
          setIsLightboxOpen(false);
        }
      }
    });
    setImgSrc(attachSrc);
    setLightboxImage(gunName);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <>
      <Lightbox
        gunName={lightboxImage}
        attachSrc={imgSrc}
        isOpen={isLightboxOpen}
      />
      <Header />

      <main className="main">
        <div className="home-container" id="HOME"></div>
        <section className="AR hidden" id="AR">
          <div className="attach">
            <h2>Assault Rifles</h2>
            <Weapons gunList={weaponListAr} openLightbox={openLightbox} />
          </div>
        </section>
        <section className="SMG hidden" id="SMG">
          <div className="attach">
            <h2>Submachine Gun</h2>
            <Weapons gunList={weaponListSmg} openLightbox={openLightbox} />
          </div>
        </section>
        <section className="SG hidden" id="SG">
          <div className="attach">
            <h2>Shot Gun</h2>
            <Weapons gunList={weaponListSG} openLightbox={openLightbox} />
          </div>
        </section>
        <section className="MM hidden" id="MM">
          <div className="attach"></div>
        </section>
        <section className="SR hidden" id="SR">
          <div className="attach"></div>
        </section>
        <section className="LMG hidden" id="LMG">
          <div className="attach"></div>
        </section>
        <section className="2ND hidden" id="2ND">
          <div className="attach"></div>
        </section>
      </main>
    </>
  );
}

export default App;
