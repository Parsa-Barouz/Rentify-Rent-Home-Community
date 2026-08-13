import {React , useEffect, useState} from 'react'
import { useParams  } from 'react-router-dom'
import { getProperties } from "../services/propertyService";
import PropertiesNavbar from '../Properties/PropertiesNavbar';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

function PropertyDetail() {

const {id} = useParams();
const [property, setProperty] = useState()
useEffect(() => {
  getProperties().then((data) => {


    setProperty(
data.find(property => property.id === id)


);
  });
}, []);



  return (


    <>
    
<div className="container mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">

<PropertiesNavbar/>

</div>


<div className="section bg-white mt">

<div className="slider">



      <Swiper
        slidesPerView={5}
        spaceBetween={3}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

{

property?.images.map((image)=>{
    console.log("IMAGE:", image);
return(


  <SwiperSlide> 
          <img src={image} alt="" />

        </SwiperSlide>
)
          


})


}

    
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>


</div>



</div>



<h1>{property?.title}</h1>    
    </>
  )
}

export default PropertyDetail