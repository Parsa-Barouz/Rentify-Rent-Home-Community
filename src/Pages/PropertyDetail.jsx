import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProperties } from "../services/propertyService";
import PropertiesNavbar from "../Properties/PropertiesNavbar";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import {
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import "swiper/css";
import "swiper/css/pagination";

function PropertyDetail() {
  const { id } = useParams();

  const [property, setProperty] = useState(null);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    getProperties()
      .then((data) => {
        const foundProperty = data.find(
          (item) => Number(item.id) === Number(id)
        );

        setProperty(foundProperty || null);
      })
      .catch((error) => {
        console.error("Error fetching property:", error);
        setProperty(null);
      });
  }, [id]);

  const shareUrl = window.location.href;

  if (!property) {
    return (
      <>
        <div className="container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
          <PropertiesNavbar />
        </div>

        <div
          dir="rtl"
          className="flex min-h-[60vh] items-center justify-center"
        >
          <p className="text-lg text-gray-500">
            در حال بارگذاری اطلاعات ملک...
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <PropertiesNavbar />
      </div>

      <main
        dir="rtl"
        className="min-h-screen bg-white mt-10"
      >
        <div className="container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

          <section className="pt-10">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {property.images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={property.title}
                    className="w-full h-[400px] object-cover rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>

          <section className="grid grid-cols-12 gap-6 mt-8">

            <div className="col-span-12 lg:col-span-8">

              <div className="flex items-center justify-between gap-4">

                <h1 className="text-2xl font-bold">
                  {property.title}
                </h1>

                <div className="relative">

                  <button
                    type="button"
                    onClick={() => setShowShare((prev) => !prev)}
                    className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12Z"
                        fill="black"
                      />

                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4ZM14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6Z"
                        fill="black"
                      />

                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14Z"
                        fill="black"
                      />

                      <path
                        d="M15.4741 7.88008L8.97408 11.3801L8.02588 9.61914L14.5259 6.11914L15.4741 7.88008Z"
                        fill="black"
                      />

                      <path
                        d="M14.5259 17.8801L8.02588 14.3801L8.97408 12.6191L15.4741 16.1191L14.5259 17.8801Z"
                        fill="black"
                      />
                    </svg>
                  </button>

                  {showShare && (
                    <div className="absolute top-12 left-0 z-50 bg-white shadow-xl rounded-xl p-4 flex gap-3">

                      <TelegramShareButton url={shareUrl}>
                        <TelegramIcon size={40} round />
                      </TelegramShareButton>

                      <WhatsappShareButton url={shareUrl}>
                        <WhatsappIcon size={40} round />
                      </WhatsappShareButton>

                      <FacebookShareButton url={shareUrl}>
                        <FacebookIcon size={40} round />
                      </FacebookShareButton>

                      <TwitterShareButton url={shareUrl}>
                        <TwitterIcon size={40} round />
                      </TwitterShareButton>

                      <LinkedinShareButton url={shareUrl}>
                        <LinkedinIcon size={40} round />
                      </LinkedinShareButton>

                    </div>
                  )}

                </div>
              </div>

              <div className="mt-3 space-y-5">

                <div className="flex items-center gap-2">
                  {/* <span className="font-semibold">
                    موقعیت:
                  </span> */}

                  <span className="text-gray-600">
                    {property.location}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold">
                    رهن
                  </span>

                  <span className=" text-4xl">
                    {property.Mortgage}
                  </span>
                <span className="text-gray-600">  تومان</span>    

                </div>

                <div className="flex items-center gap-2">
                  <span className="font-semibold">
                    اجاره
                  </span>

                  <span className=" text-4xl">
                   {property.Rent} 
                    
                  </span>
                <span className="text-gray-600">  تومان</span>    
                </div>

              </div>
            </div>

            <div className="col-span-12 lg:col-span-4">

              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm">

                <h2 className="text-xl font-bold mb-5">
                  درخواست بازدید
                </h2>

                <div className="space-y-4">

                  <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
                  />

                  <input
                    type="tel"
                    placeholder="شماره تماس"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
                  />

                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-black"
                  />

                  <button
                    type="button"
                    className="w-full rounded-xl bg-[#0D6EFD] text-white py-3 font-semibold hover:bg-gray-800 transition"
                  >
                    درخواست بازدید
                  </button>

                </div>

              </div>

            </div>



          </section>
<div className="reportsection flex justify-between items-center  border-t-1 text-gray-600 mt-5">
<div className="text-gray-600 mt-5 ">
 <span >شناسه آگهی :2245689</span>

</div>

<div className="Report  flex items-center mt-5 cursor-pointer">
<div className="iconreport ">

<svg width="30px" height="30px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 12.5538H6.25C6.25 12.5713 6.25061 12.5888 6.25183 12.6062L7 12.5538ZM7.782 13.2398V12.4898C7.76683 12.4898 7.75167 12.4903 7.73653 12.4912L7.782 13.2398ZM17.217 13.2398L17.3055 12.4951C17.2761 12.4916 17.2466 12.4898 17.217 12.4898V13.2398ZM17.8805 12.9231L18.5153 13.3225V13.3225L17.8805 12.9231ZM17.879 12.1878L18.5121 11.7858C18.5046 11.7739 18.4967 11.7622 18.4885 11.7508L17.879 12.1878ZM15.943 9.48782L16.5526 9.05075L16.5467 9.04282L15.943 9.48782ZM15.943 8.75682L16.5468 9.20187L16.5525 9.19386L15.943 8.75682ZM17.879 6.05682L18.4885 6.49386C18.4967 6.48242 18.5046 6.47075 18.5121 6.45887L17.879 6.05682ZM17.8805 5.32159L18.5153 4.92214L18.5153 4.92214L17.8805 5.32159ZM17.217 5.00482V5.75482C17.2466 5.75482 17.2761 5.75307 17.3055 5.74958L17.217 5.00482ZM7.782 5.00482L7.73653 5.75344C7.75167 5.75436 7.76683 5.75482 7.782 5.75482V5.00482ZM7 5.69082L6.25183 5.63841C6.25061 5.65586 6.25 5.67334 6.25 5.69082H7ZM7.75 12.5538C7.75 12.1396 7.41421 11.8038 7 11.8038C6.58579 11.8038 6.25 12.1396 6.25 12.5538H7.75ZM6.25 19.0048C6.25 19.419 6.58579 19.7548 7 19.7548C7.41421 19.7548 7.75 19.419 7.75 19.0048H6.25ZM6.25183 12.6062C6.30892 13.4212 7.01201 14.038 7.82747 13.9884L7.73653 12.4912C7.73632 12.4912 7.73688 12.4912 7.73797 12.4913C7.73901 12.4915 7.74008 12.4917 7.74107 12.4921C7.74295 12.4927 7.74396 12.4935 7.74445 12.4939C7.74494 12.4943 7.74581 12.4952 7.7467 12.497C7.74718 12.498 7.74758 12.499 7.74786 12.5C7.74815 12.5011 7.74818 12.5016 7.74817 12.5014L6.25183 12.6062ZM7.782 13.9898H17.217V12.4898H7.782V13.9898ZM17.1285 13.9846C17.6798 14.0501 18.2196 13.7924 18.5153 13.3225L17.2457 12.5236C17.2585 12.5034 17.2818 12.4922 17.3055 12.4951L17.1285 13.9846ZM18.5153 13.3225C18.811 12.8526 18.8098 12.2545 18.5121 11.7858L17.2459 12.5899C17.233 12.5697 17.233 12.5439 17.2457 12.5236L18.5153 13.3225ZM18.4885 11.7508L16.5525 9.05079L15.3335 9.92486L17.2695 12.6249L18.4885 11.7508ZM16.5467 9.04282C16.5816 9.09009 16.5816 9.15455 16.5467 9.20183L15.3393 8.31182C14.984 8.79376 14.984 9.45088 15.3393 9.93283L16.5467 9.04282ZM16.5525 9.19386L18.4885 6.49386L17.2695 5.61979L15.3335 8.31979L16.5525 9.19386ZM18.5121 6.45887C18.8098 5.99018 18.811 5.39204 18.5153 4.92214L17.2457 5.72104C17.233 5.70078 17.233 5.67499 17.2459 5.65478L18.5121 6.45887ZM18.5153 4.92214C18.2196 4.45224 17.6798 4.19454 17.1285 4.26007L17.3055 5.74958C17.2818 5.75241 17.2585 5.7413 17.2457 5.72104L18.5153 4.92214ZM17.217 4.25482H7.782V5.75482H17.217V4.25482ZM7.82747 4.2562C7.01201 4.20667 6.30892 4.82344 6.25183 5.63841L7.74817 5.74323C7.74818 5.74303 7.74815 5.74359 7.74786 5.74465C7.74758 5.74566 7.74718 5.74669 7.7467 5.74762C7.74581 5.7494 7.74494 5.7503 7.74445 5.75073C7.74396 5.75116 7.74295 5.75191 7.74107 5.75257C7.74008 5.75291 7.73901 5.75317 7.73797 5.75332C7.73688 5.75347 7.73632 5.75343 7.73653 5.75344L7.82747 4.2562ZM6.25 5.69082V12.5538H7.75V5.69082H6.25ZM6.25 12.5538V16.2987H7.75V12.5538H6.25ZM6.25 16.2987V19.0048H7.75V16.2987H6.25Z" fill="gray"/>
</svg>

</div>
<div className="">

<span className="reportI">گزارش</span>
</div>

</div>


  
</div>


        </div>
      </main>
    </>
  );
}

export default PropertyDetail;