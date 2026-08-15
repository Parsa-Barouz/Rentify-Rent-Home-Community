import { React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProperties } from "../services/propertyService";
import PropertiesNavbar from '../Properties/PropertiesNavbar';
import { Swiper, SwiperSlide } from 'swiper/react';
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


  const [showShare, setshowShare] = useState(false)
  console.log(showShare);

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


                <div className="like&shere relative" >

                  <div className="iconshowshere" onClick={() => { setshowShare(!showShare) }}>

                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10ZM2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12Z" fill="black" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4ZM14 6C14 3.79086 15.7909 2 18 2C20.2091 2 22 3.79086 22 6C22 8.20914 20.2091 10 18 10C15.7909 10 14 8.20914 14 6Z" fill="black" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16ZM14 18C14 15.7909 15.7909 14 18 14C20.2091 14 22 15.7909 22 18C22 20.2091 20.2091 22 18 22C15.7909 22 14 20.2091 14 18Z" fill="black" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4741 7.88008L8.97408 11.3801L8.02588 9.61914L14.5259 6.11914L15.4741 7.88008Z" fill="black" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5259 17.8801L8.02588 14.3801L8.97408 12.6191L15.4741 16.1191L14.5259 17.8801Z" fill="black" />
                    </svg>


                  </div>
                  {showShare && (
                    <div className="absolute top-10 right-0 z-50 bg-white shadow-lg rounded-xl p-4 flex gap-3">


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