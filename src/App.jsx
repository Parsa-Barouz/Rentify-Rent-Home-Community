import react from 'react'
import './App.css'
import Header from './components/Header'
import PropertyCard from './components/PropertyCard';
function App() {


  return(
    <>
<Header/>
    
<div className='mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 '>


<PropertyCard/>


    </div>


    </>




  )

}

export default App
