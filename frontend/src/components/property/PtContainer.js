import PtCard from "./PtCard";
import { useState,useEffect } from "react";
export default function Ptcontainer() {

  const [properties1, setProperties] = useState(null)
  useEffect(()=>{ //should not make this upper funtion async coz of obvious reason

    const fetchProperties = async ()=>{  //so making this on async
       const response =  await fetch('http://localhost:4000/api/properties') //This will output the response object, which includes properties such as status, statusText, headers, and body.
       const json = await response.json;  //parsing the response to an array of the data comming from the body
       if( response.ok){
          setProperties(json)
       }
    }

  },[]) //fire once coz [] empty array
  const properties = [
    {
      id: 0,
      image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Independant House",
      specs: "2 Beds,1.5 Baths",
      rent: "2800",
      locality: "Royal Oaks",
      city: "Burnaby",
      province: "BC",
      owner: "Samantha",
      dim: "1250 SqFt",
      furniture: "Semi-furnished",
      dts: " Renting the upstairs portion of the home. At walking distance to the skytrain station"
    },
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
      title: "Private Room",
      specs: "5 Beds, 1.5 Baths",
      rent: "2800",
      locality: "Downtown",
      city: "Vancouer",
      province: "BC",
      owner: "Rayan",
      dim: "1350 SqFt",
      furniture: "Semi-Furnished",
      dts: " Renting the upstairs portion of the home. At walking distance to the skytrain station"
    },

    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80",
      title: "Lake-House",
      specs: "4 Beds,1.5 Baths",
      rent: "2800",
      locality: "Downtown",
      city: "Vancouer",
      province: "BC",
      owner: "Rayan",
      dim: "1350 SqFt",
      furniture: "Semi-Furnished",
      dts: " Renting the upstairs portion of the home. At walking distance to the skytrain station"
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80",
      title: "Independant House",
      specs: "1 Beds,1.5 Baths",
      rent: "1200",
      locality: "Downtown",
      city: "Vancouer",
      province: "BC",
      owner: "Rayan",
      dim: "1350 SqFt",
      furniture: "Semi-Furnished",
      dts: " Renting the upstairs portion of the home. At walking distance to the skytrain station"
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      title: "Private Room",
      specs: "1 Beds, 3 Baths",
      rent: "2800",
      locality: "Downtown",
      city: "Vancouer",
      province:"BC",
      owner: "Rayan",
      dim: "1350 SqFt",
      furniture: "Semi-Furnished",
      dts: " Renting the upstairs portion of the home. At walking distance to the skytrain station"
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1622015663319-e97e697503ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1077&q=80",
      title: "Basement",
      specs: "3 Beds, 1.5 Baths",
      rent: "6800",
      locality: "Downtown",
      city: "Vancouer",
      province: "BC",
      owner: "Rayan",
      dim: "1350 SqFt",
      furniture: "Semi-Furnished",
      dts: " Renting the upstairs portion of the home. At walking distance to the skytrain station"
    }
  ];

  return (
    
    <div className="wrapper-grid">
      {properties.map((property) => (
        <PtCard
          key={property.id}
          image={property.image}
          title={property.title}
          specs={property.specs}
          rent={property.rent}
          locality={property.locality}
          city={property.city}
          province={property.province}
          owner= {property.owner}
          dim= {property.dim}
          furniture ={property.furniture}
          dts= {property.dts}

        />
      ))}
    </div>

  );
}
