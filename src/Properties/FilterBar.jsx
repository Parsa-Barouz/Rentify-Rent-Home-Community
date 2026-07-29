import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { Button } from "flowbite-react";
import Select from "react-select";
import { cities } from "../Data";
import { facilities } from "../Data";
import { areaOptions } from "../Data";
import Slider from "@mui/material/Slider";
import { NumericFormat } from "react-number-format";
const FilterBar = () => {
  const [open, setOpen] = useState(false);

  const [minMortgage, setMinMortgage] = useState("");
  const [maxMortgage, setMaxMortgage] = useState("");

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");



  const [rooms, setRooms] = useState(null);

const selectStyles = {
  container: (base) => ({
    ...base,
    width: "220px",
  }),

  control: (base) => ({
    ...base,
    minHeight: "40px",
    height: "40px",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    boxShadow: "none",
    cursor: "pointer",
  }),

  valueContainer: (base) => ({
    ...base,
    height: "40px",
    padding: "0 10px",
  }),

  indicatorsContainer: (base) => ({
    ...base,
    height: "40px",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    padding: "4px",
  }),

  menuPortal: (base) => ({
    ...base,
    zIndex: 99999,
  }),

  menu: (base) => ({
    ...base,
    zIndex: 99999,
  }),
};
  return (
    <>



      <div className="filterpropertis mt-10">

        <div className="filter bg-white py-3 flex justify-end items-center  ">


<div className="filterbtn pr-5">


          <button onClick={() => setOpen(true)}>


        <span className="inline-flex items-center justify-start cursor-pointer bg-blue-100 text-blue-700 text-xs font-semibold px-5 py-2 rounded-full">
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

                         فیلتر

                </span>


          </button>

</div>

          {open && (
            <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
              <div className="bg-white p-5 rounded-lg ">
                <div className="btnclose flex items-center justify-between flex-row-reverse">

   <h3>فیلتر ها</h3>
                <button onClick={() => setOpen(false)}>

   
<svg className='cursor-pointer' width="20px" height="20px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"/></svg>

                </button>

                </div>
             


                <div className="accordion  bg-white w-[700px] overflow-y-auto rounded-xl p-5"
                  dir='rtl'
                >



                  <Accordion collapseAll>
                    <AccordionPanel>
                      <AccordionTitle>نوع ملک</AccordionTitle>
                      <AccordionContent>


                        <div className="flex flex-col gap-4" dir="rtl">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              value="apartment"
                              className="w-4 h-4 accent-blue-600"
                            />
                            <span>آپارتمان</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              value="villa"
                              className="w-4 h-4 accent-blue-600"
                            />
                            <span>ویلا</span>
                          </label>

                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              value="house"
                              className="w-4 h-4 accent-blue-600"
                            />
                            <span>خانه ویلایی</span>
                          </label>
                        </div>


                      </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel>
                      <AccordionTitle>شهر</AccordionTitle>
                      <AccordionContent>
                        <div className="w-70 flex justify-start">
                          <Select
                            styles={selectStyles}
                            options={cities}
                            placeholder="انتخاب"
                            menuPortalTarget={document.body}
                            menuPosition="fixed"
                            
                          />
                        </div>


                      </AccordionContent>
                    </AccordionPanel>


                    <AccordionPanel>
                      <AccordionTitle>رهن</AccordionTitle>
                      <AccordionContent>



                        <div className="flex flex-col gap-4">

                          <div className="flex items-center gap-3   " dir="rtl">



                            <span className="w-8">از</span>

                            <NumericFormat

                                className="
                                             w-[50%]
                                             h-11
                                             border
                                             border-gray-300
                                             rounded-xl
                                             px-4
                                             text-right
                                             outline-none
                                             focus:border-blue-500
                                           "
                              value={minMortgage}
                              onValueChange={(values) => {
                                setMinMortgage(values.value);
                              }}
                              thousandSeparator=","
                              placeholder="حداقل قیمت"
                            />

                          </div>

                          <div className="flex items-center gap-3">

                            <span className="w-8">تا</span>

                            <NumericFormat
                              className="
                                            w-[50%]
                                            h-11
                                            border
                                            border-gray-300
                                            rounded-xl
                                            px-4
                                            text-right
                                            outline-none
                                            focus:border-blue-500
                                            
                                          "
                              value={maxMortgage}
                              onValueChange={(values) => {
                                setMaxMortgage(values.value);
                              }}
                              thousandSeparator=","
                              placeholder="حداکثر قیمت"
                            />

                          </div>

                        </div>


                      </AccordionContent>
                    </AccordionPanel>



                    <AccordionPanel>
                      <AccordionTitle>اجاره</AccordionTitle>
                      <AccordionContent>
                        <div className="flex flex-col gap-4">

                          <div className="flex items-center gap-3   " dir="rtl">



                            <span className="w-8">از</span>

                            <NumericFormat

                              className="
                                            w-[50%]
                                            h-11
                                            border
                                            border-gray-300
                                            rounded-xl
                                            px-4
                                            text-right
                                            outline-none
                                            focus:border-blue-500
                                          "
                              value={minRent}
                              onValueChange={(values) => {
                                setMinRent(values.value);
                              }}
                              thousandSeparator=","
                              placeholder="حداقل قیمت"
                            />

                          </div>

                          <div className="flex items-center gap-3">

                            <span className="w-8">تا</span>

                            <NumericFormat
                              className="
                                          w-[50%]
                                          h-11
                                          border
                                          border-gray-300
                                          rounded-xl
                                          px-4
                                          text-right
                                          outline-none
                                          focus:border-blue-500
                                          
                                        "
                              value={maxRent}
                              onValueChange={(values) => {
                                setMaxRent(values.value);
                              }}
                              thousandSeparator=","
                              placeholder="حداکثر قیمت"
                            />

                          </div>

                        </div>

                      </AccordionContent>
                    </AccordionPanel>


                    <AccordionPanel>
                      <AccordionTitle>متراژ</AccordionTitle>
                      <AccordionContent>


                        <div className="flex gap-3">
                          <Select
                            options={areaOptions}
                            placeholder="از"
                            styles={selectStyles}
                          />

                          <Select
                            options={areaOptions}
                            placeholder="تا"
                            styles={selectStyles}
                          />
                        </div>

                      </AccordionContent>
                    </AccordionPanel>



                    <AccordionPanel>
                      <AccordionTitle>تعداد اتاق</AccordionTitle>
                      <AccordionContent>
           
                                  <div className="flex gap-2 flex-wrap">
                                  
                                    {[1, 2, 3, 4, "5+"].map((room) => (
                                      <button
                                        key={room}
                                        onClick={() => setRooms(room)}
                                        className={`px-4 py-2 rounded-lg border transition
                                          ${
                                            rooms === room
                                              ? "bg-blue-600 text-white border-blue-600"
                                              : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
                                          }`}
                                      >
                                        {room}
                                      </button>
                                    ))}
                                  
                                  </div>
                    
                      </AccordionContent>
                    </AccordionPanel>




                    <AccordionPanel>
                      <AccordionTitle>امکانات</AccordionTitle>
                      <AccordionContent>
          {



facilities.map((item)=>{
return(
  <label key={item} className="flex items-center gap-2">
    <input type="checkbox" />
    <span>{item}</span>
  </label>

)
})
          }
                      </AccordionContent>
                    </AccordionPanel>

                  </Accordion>

                  <div className="flex  justify-between mt-5  gap-2">

                    <Button className="bg-[#0D6EFD] cursor-pointer">جستوجوی نتایج</Button>
                    <Button className="text-[#0D6EFD] cursor-pointer">حذف همه</Button>

                  </div>




                </div>

              </div>
            </div>
          )}


        </div>
      </div>

    </>


  )
}

export default FilterBar