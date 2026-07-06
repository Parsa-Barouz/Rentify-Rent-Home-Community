import React from "react";

function CardHeader({ image, title, count }) {
  return (





    <div className="relative rounded-base bg-neutral-primary-soft overflow-hidden w-full max-w-sm mx-auto">
   
      <a href="#">
        <img src={image}   alt="ویلا"  className="w-full rounded-t-base object-cover"   />
      </a>

     
      <div className="absolute bottom-2 left-1/2 flex w-[90%] -translate-x-1/2 items-center justify-between rounded-lg bg-white px-5 py-3 shadow-md">
   
        <a  href="#"  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0D6EFD] text-white transition hover:bg-blue-700"   >
          <svg   width="24"   height="24"   viewBox="0 0 24 24"   fill="none"   xmlns="http://www.w3.org/2000/svg" >
            <path   fillRule="evenodd"   clipRule="evenodd"   d="M7.5 13H17V11H7.5V13Z"   fill="white"/>
            <path   fillRule="evenodd"   clipRule="evenodd"   d="M8.41414 12L11.207 9.20711L9.79282 7.79289L6.29282 11.2929C5.90239 11.6834 5.90239 12.3166 6.29282 12.7071L9.79282 16.2071L11.207 14.7929L8.41414 12Z"         fill="white"   />
          </svg>
        </a>
        <div className="text-right">
          <h5 className="text-base font-semibold text-heading">
           {title}
          </h5>
          <p className="text-sm text-gray-500">
           {count}
          </p>
        </div>
      </div>
    </div>













  );
}

export default CardHeader;