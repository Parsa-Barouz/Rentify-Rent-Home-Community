import React from 'react'
import Navbar from '../components/Navbar'
import PropertiesNavbar from './PropertiesNavbar'
import FilterBar from './FilterBar'
import PropertyCard from "../components/PropertyCard"
import PropertySortTabs from './PropertySortTabs'
import Footer  from '../components/Footer/Footer'
function PropertiesPage() {
  return (

<>
<div className="container mx-auto ">



<PropertiesNavbar/>
<FilterBar/>
<PropertySortTabs/>
<PropertyCard title='رهن و اجاره آپارتمان در تهران' showButton={false} showLoadMore={false}/>
<div className="search mt-20  ">

<PropertyCard title='جستوجو های مشابه' showButton={false} showLoadMore={true} />

</div>

<Footer/>


</div>

</>

  )
}

export default PropertiesPage 

