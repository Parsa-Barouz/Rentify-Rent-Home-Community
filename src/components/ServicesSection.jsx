import { useEffect, useState } from "react";
import { getServiceCards } from "../services/propertyService";

function ServicesSection() {
  
  
const [services, setServices] = useState([]);
  useEffect(() => {
    getServiceCards().then((data) => {
      setServices(data);
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
services.map((item)=>{



return(






        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs ">
          <a href="#">
            <img className="rounded-base" src={item.img} alt="" />
          </a>
          <a href="#" className="flex justify-center items-center">
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading ">{item.title}</h5>
          </a>
          <p className="mb-6 text-body text-right">{item.prograph}</p>
          <a href="#" className="flex items-center   justify-center  bg-[#0D6EFD] text-body box-border  hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">{item.textbtn}    </a>
        </div>







)



})
}

</div>



    


    </>
  )
}

export default ServicesSection