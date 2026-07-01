import React from 'react'
// import img1Family from './assets/images/wmremove-transformed.jpeg'
import img1Family from './assets/images/Frame 427320688(1).png'
import Navbar from './Navbar'
import Selector from './Selector'
import CardHeader from './CardHeader'
import cards from './Data'
export default function Header() {
  return (

    <header >


      <div className='w-screen h-screen'>


        <div className='bakimg ' >
{/* style={{ filter: "brightness(0.07)", opacity: 0.8 }} */}
          <img className='w-full h-[80vh] object-fill rounded-b-4xl '  src={img1Family} alt="" />

          <div className='absolute top-0 left-0 w-full z-10'>

            <Navbar />

            <div className="title">

              <div className='flex justify-center mt-20'>

                <h1 className='text-white text-4xl'>در <span className='text-[#0D6EFD]'>رنتی فای </span> دنبال چه ملکی هستید </h1>

              </div>

            </div>





            <Selector />

     

{


cards.map((card) => {
  return (
    <CardHeader
      key={card.title}
      image={card.image}
      title={card.title}
      count={card.count}
    />
  );
})

}




          </div>




        </div>

        <div>fdsdf</div>
        <div>dfsd</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>
        <div>fdsfsf</div>

      </div>



    </header>


  )
}
