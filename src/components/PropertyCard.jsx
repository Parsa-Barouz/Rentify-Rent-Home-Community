
import React, { useEffect, useState } from "react";
import { getProperties } from "../services/propertyService";
import { Link } from "react-router-dom";

function PropertyCard({
  title = "پربازدیدترین‌های هفته گذشته",
  showButton = true,
  showLoadMore = true,
  className = "",
  properties: propsProperties
}) {


  const [properties, setProperties] = useState([]);



  useEffect(() => {

    if (propsProperties) {

      setProperties(propsProperties);

    } else {

      getProperties().then((data) => {

        setProperties(data);

      });

    }

  }, [propsProperties]);





  const [favorites, setFavorites] = useState(() => {

    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];

  });



  const [visibleCount, setVisibleCount] = useState(8);





  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);





  const toggleFavorite = (id) => {


    if (favorites.includes(id)) {


      setFavorites(
        favorites.filter((item)=> item !== id)
      );


    } else {


      setFavorites([
        ...favorites,
        id
      ]);


    }


  };






  return (

    <>


      <div className="more flex items-center max-sm:justify-center justify-between flex-row-reverse mb-8 mt-10">


        <h2 className="text-2xl font-bold">

          {title}

        </h2>



        <div className="morebtn">


          {showButton && (


            <button className="flex items-center gap-1.5 cursor-pointer">


              <span className="text-[#0D6EFD]">
               <Link to="/properties">
    مشاهده همه
</Link>
              </span>


            </button>


          )}


        </div>



      </div>





      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">


        {
          properties.slice(0,visibleCount).map((item)=>(


            <div
              key={item.id}
              className="relative bg-white max-w-sm border border-gray-200 rounded-lg overflow-hidden"
            >



              <img

                className="w-full h-56 object-cover"

                src={item.image}

                alt={item.title}

              />





              <button

                onClick={()=>toggleFavorite(item.id)}

                className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow-md hover:scale-110 transition"

              >

                {
                  favorites.includes(item.id)
                  ?
                  "❤️"
                  :
                  "🤍"
                }


              </button>






              <div className="p-6 text-center">


                <div className="flex justify-center items-center gap-3.5">


                  <p className="text-gray-500">

                    {item.location}

                  </p>




                  <span className="inline-flex items-center bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">

                    {item.type}

                  </span>



                </div>



                <h5 className="mt-4 text-sm font-bold text-gray-800">


                  {item.title}


                </h5>


                <div className="mt-5 flex rounded-xl bg-gray-100 p-2">



                  <div className="flex-1 rounded-lg bg-white p-3 text-center shadow-sm">


                    <p className="text-xs text-gray-500">

                      رهن

                    </p>



                    <p className="mt-1 text-lg font-bold text-gray-900">

                      {item.Mortgage}

                    </p>



                    <span className="text-xs text-gray-400">

                      تومان

                    </span>


                  </div>


                  <div className="w-2"></div>


                  <div className="flex-1 rounded-lg bg-white p-3 text-center shadow-sm">


                    <p className="text-xs text-gray-500">

                      اجاره

                    </p>


                    <p className="mt-1 text-lg font-bold text-blue-600">


                      {item.Rent}


                    </p>

                    <span className="text-xs text-gray-400">

                      تومان

                    </span>

                  </div>

                </div>

              </div>

            </div>

          ))

        }


      </div>

      {
        showLoadMore && properties.length > visibleCount && (


          <div className="flex justify-center mt-10">

            <button

              onClick={()=>setVisibleCount(visibleCount + 4)}

              className="bg-[#0D6EFD] px-3 py-3 text-white rounded-md cursor-pointer"

            >

              نمایش بیشتر آگهی‌ها

            </button>

          </div>

        )
      }

    </>

  );


}

export default PropertyCard;