import react from 'react'
import './App.css'
import Header from './components/Header'
import PropertyCard from './components/PropertyCard';
import ServicesSection from './components/ServicesSection';
function App() {


  return(
    <>
<Header/>
    
<div className='mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 '>


<PropertyCard/>

<ServicesSection/>

    </div>


    </>




  )

}

export default App
