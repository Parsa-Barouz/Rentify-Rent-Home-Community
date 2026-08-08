import React from 'react'
import Header from '../components/Header'
// import { Footer, Navbar } from 'flowbite-react'
import Footer from '../components/Footer/Footer'
import PropertyCard from '../components/PropertyCard'
import Selector from '../components/Selector'
import ServicesSection from '../components/ServicesSection'

function HomePage() {

return (
    <>
<Header/>
<div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8">
  <PropertyCard  showLoadMore={false}/>
  <ServicesSection />
  <Footer />
</div>

    </>


  )
}

export default HomePage