import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProperties } from "../services/propertyService";
import PropertiesNavbar from '../Properties/PropertiesNavbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TelegramShareButton, TelegramIcon } from "react-share";

import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

function PropertyDetail() {

  const { id } = useParams();
  const [property, setProperty] = useState()
  useEffect(() => {
    getProperties().then((data) => {


      setProperty(
        data.find(property => property.id === id)


      );
    });
  }, []);

  const shareUrl = window.location.href;

  return (


    <>

      <div className="container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

        <PropertiesNavbar />

      </div>
      <div className="bg-white min-h-screen mt-10">

        <div className="container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

          <div className="section bg-white pt-10">

            <div className="slider">



              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >

                {

                  property?.images.map((image) => {
                    return (


                      <SwiperSlide>
                        <img src={image} alt="" className="w-full h-[400px] object-cover rounded-xl" />

                      </SwiperSlide>
                    )



                  })


                }



              </Swiper>


            </div>

            <div className="information">


              <div className="Maininformation">

                <div className="title">
                  <h2>{property?.title}</h2>

                </div>


                <div className="like&shere">


                  <TelegramShareButton url={shareUrl}>
                    <TelegramIcon size={40} round />
                  </TelegramShareButton>



                </div>


                <div className="location">

                  <span>{property?.location}</span>

                </div>

                <div className="Mortgage">

                  <span> رهن{property?.Mortgage} تومان</span>


                </div>
                <div className="Rent">

                  <span> اجاره{property?.Rent} تومان</span>


                </div>


              </div>


            </div>

          </div>
        </div>
      </div>



      {/* <h1>{property?.title}</h1> */}
    </>
  )
}

export default PropertyDetail