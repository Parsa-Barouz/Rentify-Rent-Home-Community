import React, { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";

function PropertyCard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getProperties().then((data) => {
      setProperties(data);
    });
  }, []);

const [favorites, setFavorites] = useState([]);

const toggleFavorite = (id) => {
  if (favorites.includes(id)) {
    setFavorites(favorites.filter((item) => item !== id));
  } else {
    setFavorites([...favorites, id]);
  }
};
 
  return (
    <>
    
    
    
    <div className="more flex items-center justify-between flex-row-reverse mb-5">

<h2 className="text-2xl font-bold">
  پربازدیدترین‌های هفته گذشته
</h2>

<div className="morebtn ">

<button className="flex items-center gap-1.5 cursor-pointer">
  

<svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.5 5.20703H11V3.20703H1.5V5.20703Z" fill="#0D6EFD"/>
<path fillRule="evenodd" clipRule="evenodd" d="M2.41414 4.20711L5.20703 1.41421L3.79282 0L0.292818 3.5C-0.0977063 3.89052 -0.0977063 4.52369 0.292818 4.91421L3.79282 8.41421L5.20703 7L2.41414 4.20711Z" fill="#0D6EFD"/>
</svg>

<span className="text-[#0D6EFD]">
  مشاهده همه
</span>

</button>


</div>

    </div>
  
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
      {properties.map((item) => (
        <div
          key={item.id}
          className= " relative bg-white max-w-sm border border-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="w-full h-56 object-cover"
            src={item.image}
            alt={item.title}            
          />

<button
  onClick={() => toggleFavorite(item.id)}
  className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md hover:scale-110 transition"  
>
  {favorites.includes(item.id) ? "❤️" : "🤍"}
</button>







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


            <h5 className="mt-4 text-sm font-bold text-gray-800">
              {item.title}
            </h5>

<div className="mt-5 flex rounded-xl bg-gray-100 p-2">

  <div className="flex-1 rounded-lg bg-white p-3 text-center shadow-sm">
    <p className="text-xs text-gray-500">رهن</p>
    <p className="mt-1 text-lg font-bold text-gray-900">
      {item.Mortgage}
    </p>
    <span className="text-xs text-gray-400">تومان</span>
  </div>

  <div className="w-2"></div>

  <div className="flex-1 rounded-lg bg-white p-3 text-center shadow-sm">
    <p className="text-xs text-gray-500">اجاره</p>
    <p className="mt-1 text-lg font-bold text-blue-600">
      {item.Rent}
    </p>
    <span className="text-xs text-gray-400">تومان</span>
  </div>

</div>

          </div>
        </div>
      ))}
    </div>
    </>
      
  );
}

export default PropertyCard;