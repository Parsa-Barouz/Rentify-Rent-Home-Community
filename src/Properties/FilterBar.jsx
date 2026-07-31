
import { useState } from "react";
import FilterContent from "./FilterContent";

function FilterBar() {
  const [open, setOpen] = useState(false);

  return (

    <div className="filterpropertis mt-10">

      <div className="filter bg-white py-3 flex justify-end items-center">

        <div className="filterbtn pr-5">

          <button onClick={() => setOpen(true)}>

            <span className="
              inline-flex
              items-center
              justify-start
              cursor-pointer
              bg-blue-100
              text-blue-700
              text-xs
              font-semibold
              px-5
              py-2
              rounded-full
            ">

              فیلتر

            </span>

          </button>

        </div>


        {open && (

          <div className="
            fixed
            inset-0
            z-[9999]
            bg-black/50
            flex
            items-center
            justify-center
            p-4
          ">

            <div className="
              bg-white
              rounded-lg
              p-5
              w-full
              max-w-[700px]
              max-h-[90vh]
              overflow-y-auto
            ">

              <div className="
                flex
                items-center
                justify-between
                flex-row-reverse
                mb-5
              ">

                <h3>
                  فیلترها
                </h3>


                <button
                  onClick={() => setOpen(false)}
                  className="cursor-pointer"
                >

                  ✕

                </button>

              </div>


      
              <FilterContent />

            </div>

          </div>

        )}

      </div>

    </div>

  );
}

export default FilterBar;