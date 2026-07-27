import React, { useState } from 'react'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import { Button } from "flowbite-react";
const FilterBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>

      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>
      <h1>sdfsdf</h1>


      <div className="filterpropertis">

        <div className="filter">



          <button onClick={() => setOpen(true)}>
            فیلتر
          </button>

          {open && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-white p-5 rounded-lg ">
                <h3>فیلتر ها</h3>
                <button onClick={() => setOpen(false)}>

                  close

                </button>


                <div className="accordion bg-white w-[700px] overflow-y-auto rounded-xl p-5">



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
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                          has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the
                          <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                          </a>
                          based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>


                    <AccordionPanel>
                      <AccordionTitle>رهن</AccordionTitle>
                      <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                          has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the
                          <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                          </a>
                          based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>



                    <AccordionPanel>
                      <AccordionTitle>اجاره</AccordionTitle>
                      <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                          has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the
                          <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                          </a>
                          based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>




                    <AccordionPanel>
                      <AccordionTitle>متراژ</AccordionTitle>
                      <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                          has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the
                          <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                          </a>
                          based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>



                    <AccordionPanel>
                      <AccordionTitle>تعداد اتاق</AccordionTitle>
                      <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                          has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the
                          <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                          </a>
                          based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>




                    <AccordionPanel>
                      <AccordionTitle>امکانات</AccordionTitle>
                      <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                          has a design equivalent in our Figma file.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          Check out the
                          <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            Figma design system
                          </a>
                          based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                      </AccordionContent>
                    </AccordionPanel>




                    <AccordionPanel>
                      <AccordionTitle>امکانات تصویری آگهی</AccordionTitle>
                      <AccordionContent>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                          Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                          components, whereas Tailwind UI offers sections of pages.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                          However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                          technical reason stopping you from using the best of two worlds.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                          <li>
                            <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                              Flowbite Pro
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://tailwindui.com/"
                              rel="nofollow"
                              className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                              Tailwind UI
                            </a>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionPanel>
                  </Accordion>




                  <div className="flex  justify-between mt-5  gap-2">

                    <Button className="bg-[#0D6EFD]">جستوجوی نتایج</Button>
                    <Button className="text-[#0D6EFD]">حذف همه</Button>

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