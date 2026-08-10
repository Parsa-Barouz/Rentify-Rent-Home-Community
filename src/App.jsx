import react from 'react'
import './App.css'
import Header from './components/Header'
import PropertyCard from './components/PropertyCard';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer/Footer';
import PropertiesPage from './Properties/PropertiesPage';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from './Pages/HomePage';
import PropertyDetail from './Pages/PropertyDetail';
function App() {


  return (

    <BrowserRouter>




<Routes>
<Route path='/' element={<HomePage/>}/>
<Route path='/properties/:id' element={<PropertyDetail/>}/>
<Route path='/properties' element={<PropertiesPage/>}/>

</Routes>


</BrowserRouter>

  )

}

export default App
