import { useEffect, useState } from "react";
import { getServiceCards, getsteps } from "../services/propertyService";
import loan from "../assets/images/loan.png"
function ServicesSection() {


  const [services, setServices] = useState([]);
  useEffect(() => {
    getServiceCards().then((data) => {
      setServices(data);
    });
  }, []);


  const [steps, Setsteps] = useState([]);

  useEffect(() => {
    getsteps().then((data) => {
      Setsteps(data);
    });
  }, []);

  return (
    <>

      <div className="titleservice">

        <div className="mt-20 flex justify-center">
          <h1 className="text-4xl text-black max-md:text-2xl">
            با خدمات <span className="text-[#0D6EFD] ">رنتی فای</span>    آشنا شوید
          </h1>
        </div>


      </div>


      <div className="ServicesSectionCard grid grid-cols-3 gap-35">
        {
          services.map((item) => {



            return (

              <div className="bg-neutral-primary-soft block max-w-sm p-6 bg-white mt-10 rounded-md   ">
                <a href="#">
                  <img className="rounded-base" src={item.img} alt="" />
                </a>
                <a href="#" className="flex justify-center items-center">
                  <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading ">{item.title}</h5>
                </a>
                <p className="mb-6 mt-3 text-body text-right text-gray-500 ">{item.prograph}</p>
                <a href="#" className="flex items-center   justify-center  bg-[#0D6EFD] text-body box-border text-white  hover:bg-neutral-tertiary-medium hover:text-heading  shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{item.textbtn}    </a>
              </div>


            )



          })
        }

      </div>




      <div className="container mx-auto px-5 py-20">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold max-md:text-2xl">
            <span className="text-[#0D6EFD]">رنتی فای</span> چگونه کار می‌کند
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition"
            >
              <div className="shrink-0">
                <img


                  src={step.icon}
                  alt={step.title}
                  className="w-28 h-auto"
                />

              </div>

              <div className="text-right">
                <h3 className="text-xl font-bold text-black">
                  {step.title}
                </h3>

                <p className="text-gray-500 mt-2 text-sm leading-7">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>



      <div className="boxLoan  bg-gray-800 rounded-2xl">


        <div className="loan w-full grid grid-cols-2 items-center">


          <div className="imageloan">

            <img src={loan} alt="loan" />


          </div>

          <div className="text text-white flex flex-col items-end mr-15">
            <div className="textinformation">

              <h3 className="text-4xl bold">برای دریافت وام رهن خانه کلیک کنید</h3>

              <p className="mt-5 text-gray-500 text-end ">دریافت وام با کمترین بهره و سریع ترین زمان ممکن</p>

            </div>

            <div className="btn">
              <button className="moreinformation bg-[#0D6EFD] mt-15 px-12 cursor-pointer rounded-2xl py-4"> اطلاعات بیشتر ... </button>
            </div>
          </div>


        </div>

      </div>

    </>
  )
}

export default ServicesSection