
import React, { useEffect, useState } from 'react'
import PropertiesNavbar from './PropertiesNavbar'
import FilterBar from './FilterBar'
import PropertyCard from "../components/PropertyCard"
import PropertySortTabs from './PropertySortTabs'
import Footer from '../components/Footer/Footer'
import { getProperties } from "../services/propertyService"


function PropertiesPage() {


  const [properties, setProperties] = useState([]);

  const [sort, setSort] = useState("پربازدیدترین");


  useEffect(() => {

    getProperties().then((data) => {
      setProperties(data);
    });

  }, []);



  let sortedProperties = [...properties];


  if (sort === "ارزان‌ترین") {

    sortedProperties.sort((a, b) => a.Rent - b.Rent);

  }


  if (sort === "جدیدترین") {

    sortedProperties.sort((a, b) => a.createdAt - b.createdAt);

  }
  if (sort === "پربازدیدترین") {

    sortedProperties.sort((a, b) => a.views - b.views);

  }


  return (

    <>

      <div className="container mx-auto">


        <PropertiesNavbar />

        <FilterBar />


        <PropertySortTabs setSort={setSort} />


        <PropertyCard
          properties={sortedProperties}
          title="رهن و اجاره آپارتمان در تهران"
          showButton={false}
          showLoadMore={false}
        />


        <div className="search mt-20">

          <PropertyCard
            title="جستوجو های مشابه"
            showButton={false}
            showLoadMore={true}
          />

        </div>


        <Footer />


      </div>

    </>

  )
}


export default PropertiesPage