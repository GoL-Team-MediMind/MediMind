import React, { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ScrollToTop from "../../components/ui/ScrollToTop";
import ArrayFilter from "../../components/ui/ArrayFilter";
import diseases_a from "../../components/data/Diseases_A";
import diseases_b from "../../components/data/Diseases_B";
import diseases_c from "../../components/data/Diseases_C";
import diseases_d from "../../components/data/Diseases_D";
import diseases_e from "../../components/data/Diseases_E";
import "./service.css"
import {FaArrowLeft} from "react-icons/fa"
import { NavLink } from "react-router-dom"

const alphabets = [
  {
    id: 1,
    letter: "a",
    diseases: diseases_a,
  },
  {
    id: 2,
    letter: "b",
    diseases: diseases_b,
  },
  {
    id: 3,
    letter: "c",
    diseases: diseases_c,
  },
  {
    id: 4,
    letter: "d",
    diseases: diseases_d,
  },
  {
    id: 5,
    letter: "e",
    diseases: diseases_e,
  },

];
const handleClick =( ) =>{
  ('/')
}
const Services = () => {
  const [enterDiseaseName, setEnterDiseaseName] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  let listOfDiseases = useRef(null);

  useEffect(() => {
    let length = listOfDiseases.current.children.length;
    if (length === 0) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, []);
  return (
    <>
    <NavLink to="/">
    <FaArrowLeft  onClick={handleClick}/>
    </NavLink>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    className="mt-10"
  >
    <path
      fill="rgb(10, 124, 139)"
      fill-opacity="0.9"
      d="M0,288L60,266.7C120,245,240,203,360,186.7C480,171,600,181,720,176C840,171,960,149,1080,149.3C1200,149,1320,171,1380,181.3L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
    ></path>
  </svg>
      {/* bgimage */}
      <section>
        <div
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(10, 124, 139,0.3) 70%,rgba(10, 124, 139,0.5) 100%),
            url(/images/services/supply.png)`,
          }}
          className="mt-10 w-full bg-cover bg-no-repeat bg-center min-h-max saturate-150 h-[600px]"
        >
          <div className="max-w-[1200px] mx-auto h-full flex items-center justify-end">
            <div className="hidden lg:block py-8 px-6 w-96 float-right bg-white rounded-xl">


            </div>
          </div>
        </div>
      </section>




      {/* filter disease from list */}
      <section className="max-w-[1200px] mx-auto px-2 mt-10">
        {/* input box */}
        <div
          className="w-full relative flex items-center gap-x-4"
          id="all_services"
        >
          <i className="absolute pl-4">
            <BsSearch size="25px" fill="grey" />
          </i>
          <input
            type="text"
            name="disease"
            id="disease"
            onChange={(e) => setEnterDiseaseName(e.target.value)}
            value={enterDiseaseName}
            placeholder="Filter By Keyword"
            className="w-full pl-16 py-4 text-gray-600 border-2 border-gray-600 text-xl font-poppins focus:outline-primary"
          />
        </div>

        {/* list of all diseases */}

        {/* alphabets */}
        <p className="text-center pt-8 flex flex-wrap justify-center gap-y-4">
          {alphabets.map((alphabet) => (
            <a
              key={alphabet.id}
              href={`#${alphabet.letter}`}
              className="uppercase text-xl text-primary font-medium underline px-2"
            >
              {alphabet.letter}
            </a>
          ))}
        </p>
        {showMessage && (
          <p className="py-2 md:py-6 text-center text-gray-600 text-2xl">
            Sorry, no results were found.
          </p>
        )}

        {/* list of diseases */}
        <ul ref={listOfDiseases}>
          {alphabets.map((alphabet) => (
            <ArrayFilter
              arr={alphabet.diseases}
              userValue={enterDiseaseName}
              letter={alphabet.letter}
              key={alphabet.id}
              id={`${alphabet.letter}`}
            />
          ))}
        </ul>
      </section>
      <ScrollToTop />
    </>
  );
};

export default Services;
