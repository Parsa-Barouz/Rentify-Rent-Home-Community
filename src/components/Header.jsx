// import React from 'react'
// // import img1Family from './assets/images/wmremove-transformed.jpeg'
// import img1Family from "../assets/images/Frame 427320688(1).png";
// import Navbar from '../components/Navbar'
// import Selector from '../components/Selector'
// import CardHeader from '../components/CardHeader'
// import { cards } from '../Data'
// export default function Header() {
//   return (

//     <header >


//       <div className='w-screen h-screen'>
//           <img className='w-full h-[80vh] object-fill rounded-b-4xl ' src={img1Family} alt="" />


//         <div className='bakimg ' >
//           {/* style={{ filter: "brightness(0.07)", opacity: 0.8 }} */}

//           <div className='absolute top-0 left-0 w-full z-10'>

//             <Navbar />

//             <div className="title">

//               <div className='flex justify-center mt-20'>

//                 <h1 className='text-white text-4xl'>در <span className='text-[#0D6EFD]'>رنتی فای </span> دنبال چه ملکی هستید </h1>

//               </div>

//             </div>





//             <Selector />



//             <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mt-10">
//               {cards.map((card) => (
//                 <CardHeader
//                   key={card.title}
//                   image={card.image}
//                   title={card.title}
//                   count={card.count}
//                 />
//               ))}
//             </div>




//           </div>




//         </div>

//         <div>fdsdf</div>
//         <div>dfsd</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>
//         <div>fdsfsf</div>




        

//       </div>



//     </header>


//   )
// }
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

    {/* فقط این بخش روی عکس */}
    <div className="absolute inset-0 z-10">
      <Navbar />

      <div className="mt-20 flex justify-center">
        <h1 className="text-4xl text-white">
          در <span className="text-[#0D6EFD]">رنتی فای</span> دنبال چه ملکی هستید
        </h1>
      </div>

      <Selector />
    </div>
  </div>

  {/* کارت‌ها بیرون از absolute */}
  <div className="container mx-auto -mt-20 px-4 relative z-20">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
