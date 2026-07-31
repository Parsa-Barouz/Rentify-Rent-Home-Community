import { useState } from "react";
import Select from "react-select";
import { NumericFormat } from "react-number-format";

import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
  Button,
} from "flowbite-react";

import {
  cities,
  facilities,
  areaOptions,
} from "../Data";

function FilterContent() {
  const [minMortgage, setMinMortgage] = useState("");
  const [maxMortgage, setMaxMortgage] = useState("");

  const [minRent, setMinRent] = useState("");
  const [maxRent, setMaxRent] = useState("");

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
    <div dir="rtl">

      <Accordion collapseAll>

        <AccordionPanel>
          <AccordionTitle>نوع ملک</AccordionTitle>

          <AccordionContent>
            <div className="flex flex-col gap-4">

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
            <Select
              styles={selectStyles}
              options={cities}
              placeholder="انتخاب شهر"
              menuPortalTarget={document.body}
              menuPosition="fixed"
            />
          </AccordionContent>
        </AccordionPanel>


        <AccordionPanel>
          <AccordionTitle>رهن</AccordionTitle>

          <AccordionContent>

            <div className="flex flex-col gap-4">

              <div className="flex items-center gap-3">

                <span className="w-8">
                  از
                </span>

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

                <span className="w-8">
                  تا
                </span>

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

              <div className="flex items-center gap-3">

                <span className="w-8">
                  از
                </span>

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

                <span className="w-8">
                  تا
                </span>

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
                  className={`
                    px-4
                    py-2
                    rounded-lg
                    border
                    transition

                    ${
                      rooms === room
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:border-blue-500"
                    }
                  `}
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

            <div className="flex flex-col gap-3">

              {facilities.map((item) => (

                <label
                  key={item}
                  className="flex items-center gap-2 cursor-pointer"
                >

                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                  />

                  <span>
                    {item}
                  </span>

                </label>

              ))}

            </div>

          </AccordionContent>
        </AccordionPanel>

      </Accordion>


      <div className="flex justify-between mt-5 gap-2">

        <Button className="bg-[#0D6EFD] cursor-pointer">
          جستجوی نتایج
        </Button>

        <Button className="text-[#0D6EFD] cursor-pointer">
          حذف همه
        </Button>

      </div>

    </div>
  );
}

export default FilterContent;