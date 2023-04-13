import PtCard from "./PtCard";
import { useState,useEffect } from "react";
import { propertyCategories } from "../util/options";
import { json } from "react-router-dom";

const Ptcontainer= ()=> {
  const [fullProperties, setFullProperties] = useState([])
  const [properties, setProperties] = useState([])
  const [cities, setCities] = useState([])
  const categories = propertyCategories
  
  function getCitiesList(properties){
    // setCities([])
    let _cities=[]
    properties.map((p,i)=>{
      if(!_cities.includes(p.address.city)){
        // setCities([...cities, p.address.city])
        _cities.push(p.address.city)
      }
    })
    setCities(_cities)
  }

  function getPropsByCity(city){
    if(!city || !city.length){
      setProperties(fullProperties)
      return
    }
    const propertiesByCity = fullProperties.filter( p =>{
      return p.address.city == city
    })
    setProperties(propertiesByCity)
  }

  function getPropsByCategory(categoryId){
    if(!categoryId){
      setProperties(fullProperties)
      return
    }
    const propertiesByCat = fullProperties.filter( p =>{
      return p.category == categoryId
    })
    setProperties(propertiesByCat)
  }

  useEffect(() => { //should not make this upper funtion async coz of obvious reason
    
       const fetchProperties = async () => {
      //so making this on async
       const response =  await fetch('http://localhost:4000/api/properties') //This will output the response object, which includes properties such as status, statusText, headers, and body.
       const json = await response.json();  //parsing the response to an array of the data comming from the body
       
       if( response.ok){
          setFullProperties(json)
          setProperties(json)  
          getCitiesList(json)
       }
       
    }
    fetchProperties()
    console.log(properties)
  },[]) //fire once coz [] empty array
  
 
  return (
      <div class="hh-catalogue">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="hh-form">
                <h4 class="form-label hh-uppercase">
                  Select by city
                </h4>
                <select class="form-control" onChange={evt =>{getPropsByCity(evt.target.value)} }>
                  <option value="">Show all</option>
                  {cities.map((c,i)=>
                    <option value={c}>{c}</option>
                  )}
                </select>
                

              </div>
            </div>
            <div class="col">
              <div class="hh-form">
                <h4 class="form-label hh-uppercase">
                  Select by property type
                </h4>
                <select class="form-control" onChange={evt =>{getPropsByCategory(evt.target.value)} }>
                  <option value="">Show all</option>
                  {categories.map((c,i)=>
                    <option value={c.id}>{c.label}</option>
                  )}
                </select>
                

              </div>
            </div>

          </div>

        </div>

       <div className="wrapper-grid">
             {properties &&  properties.map((property) => (
        <PtCard
          key={property._id}
          id={property._id}
          feature_img={property.feature_img}
          category ={property.category}
         bedrooms={property.bedrooms}
         bathrooms={property.bathrooms}
         address={property.address}
         furnishing={property.furnishing}
         carpet_area={property.carpet_area}
         move_in_date={property.move_in_date}
         tags={property.tags}
         landlord_user_id={property.landlord_user_id}
         lease_terms={property.lease_terms}
         imgs={property.imgs}
         rent={property.rent}
         desc={property.desc}
         property={property}
        />
      ))}
    </div>
    </div>
  );
};
export default Ptcontainer;
