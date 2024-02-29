import "./App.css";
import KUTE from "kute.js";
import ButtonUI from "./components/Button";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div className="relative flex flex-col justify-start items-center h-screen w-screen">
      <div className="relative z-20 mx-auto my-9">
        <img
          className="rounded-full max-w-60 max-h-60"
          src="src/assets/PerfilCard.png"
          alt=""
        />
      </div>
      <section className="relative z-20 max-w-lg mx-auto">
        <h2 className="text-center text-4xl font-bold text-white">
          Carla Trindade
        </h2>
        <p className=" text-center text-lg text-gray-400">Lisbon, Portugal</p>
        <h3 className="text-center text-xl mt-5 font-bold text-white">
          Frontend Developer // Graphic Designer
        </h3>
        <h2 className="text-center text-md tracking-wider text-gray-400 mt-1">
          Portuguese // English // Spanish // Galician
        </h2>
        <p className="text-justify text-lg mt-8 pl-9 text-gray-400">
          Collaboration is key to my work ethic. I prioritize fostering a
          culture of respect among teammates and leveraging our collective
          learning potential.
        </p>
        <p className="text-justify text-lg pl-9 text-gray-400 mt-3">
          Fuelled by curiosity, I seek fresh avenues for personal and
          professional growth.
        </p>
        <div className="flex justify-center gap-7 pl-11 mt-14">
          <a href="https://github.com/ca-trindade">
            <ButtonUI>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
              </svg>
            </ButtonUI>
          </a>
          <a href="https://www.linkedin.com/in/ca-trindade-frontendev/">
            <ButtonUI>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 24 24"
              >
                <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
              </svg>
            </ButtonUI>
          </a>
        </div>
      </section>
      <section className="absolute z-10 flex justify-center items-center">
        <svg
          id="visual"
          viewBox="0 0 900 900"
          width="900"
          height="900"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
        >
          <g transform="translate(457.42964031340534 469.5808504833697)">
            <path
              id="blob1"
              d="M259.6 -297.8C326.4 -253.4 363.6 -162 374.6 -70.4C385.6 21.2 370.3 113.1 324.4 182.2C278.4 251.3 201.8 297.6 119.9 325.9C38 354.3 -49.3 364.6 -131.7 342.9C-214.2 321.1 -292 267.3 -325.6 194.9C-359.1 122.5 -348.5 31.5 -328.1 -53.3C-307.7 -138 -277.6 -216.5 -221.3 -262.8C-165 -309.1 -82.5 -323.3 7 -331.6C96.4 -339.9 192.8 -342.3 259.6 -297.8"
              fill="#242424"
            ></path>
          </g>
          <g
            transform="translate(426.57978740589033 439.9439029164279)"
            style={{ visibility: "hidden" }}
          >
            <path
              id="blob2"
              d="M206.6 -245.2C268.3 -194.4 319.3 -129.8 338.8 -54.5C358.3 20.8 346.3 106.9 310.2 188.3C274.2 269.6 214 346.2 135.2 377.5C56.4 408.8 -41 394.7 -115.4 352.3C-189.8 310 -241 239.4 -276.1 165.7C-311.1 92 -329.8 15.3 -319.5 -58.6C-309.1 -132.4 -269.6 -203.3 -211.5 -254.7C-153.4 -306.2 -76.7 -338.1 -2.1 -335.5C72.4 -333 144.8 -295.9 206.6 -245.2"
              fill="#242424"
            ></path>
          </g>
        </svg>
      </section>
    </div>
  );
}

export default App;
