import React, { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";

function PropertyCard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
    });
  }, []);

  return (
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {properties.map((item) => (
        <div
          key={item.id}
          className="bg-white max-w-sm border border-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="w-full h-56 object-cover"
            src={item.image}
            alt={item.title}
          />

          <div className="p-6 text-center ">

<div className="grouptypelocation flex justify-center items-center gap-3.5">
     <p className=" text-gray-500">
                       {item.location}
                     </p>


       <span className="inline-flex items-center bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              <svg
                className="w-3 h-3 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"
                />
              </svg>

              {item.type}
            </span>

       




</div>
     

            <h5 className="mt-4 text-xl font-bold text-gray-800">
              {item.title}
            </h5>

         
            <p className="mt-3 text-2xl font-bold text-blue-600">
              {item.price}
            </p>

            <a
              href="#"
              className="inline-flex items-center mt-6 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              مشاهده ملک

              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PropertyCard;