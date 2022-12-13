import React from 'react'
import country from 'country-city'
import translate from "translate";
import { useState } from 'react'
import { useEffect } from 'react'

function SelectCity() {
    const [cites, setCites] = useState([])

    useEffect(() => {
      let israelCites=country.getCities("Israel")
      israelCites=israelCites.map(async (city)=>await translate(city,'he'))
      Promise.all(israelCites).then((values) => {
        setCites(values);
      })
    }, [])
    
  return (
    <div>
        
    </div>
  )
}

export default SelectCity