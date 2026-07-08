
import React from 'react'
// import img1Family from './assets/images/wmremove-transformed.jpeg'
import img1Family from "../assets/images/Frame 427320688(1).png";
import Navbar from '../components/Navbar'
import Selector from '../components/Selector'
import CardHeader from '../components/CardHeader'
import { cards } from '../Data'
export default function Header() {
  return (

    <header className='w-screen h-screen'>
      <div className="relative">
        <img
          src={img1Family}
          className="w-full h-[80vh] object-cover rounded-b-4xl"
          alt=""
        />

        <div className="absolute inset-0 z-50">
          <Navbar />

          <div className="mt-20 flex justify-center">
            <h1 className="text-4xl text-white max-md:text-2xl">
              در <span className="text-[#0D6EFD] ">رنتی فای</span> دنبال چه ملکی هستید
            </h1>
          </div>

          <Selector />
        </div>
      </div>

      <div className="container mx-auto   -mt-24 sm:-mt-32  md:-mt-40  lg:-mt-52 xl:-mt-64 2xl:-mt-72   max-md:-mt-100 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10%]">
          {cards.map((card) => (
            <CardHeader
              key={card.title}
              image={card.image}
              title={card.title}
              count={card.count}
            />
          ))}
        </div>
      </div>
    </header>

  )
}
