import {React , useEffect, useState} from 'react'
import { useParams  } from 'react-router-dom'
import { getProperties } from "../services/propertyService";

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
    


<h1>{property?.title}</h1>    
    </>
  )
}

export default PropertyDetail