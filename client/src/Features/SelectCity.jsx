import React from "react";
import country from "country-city";
import translate from "translate";
import { useState } from "react";
import { useEffect } from "react";

function SelectCity() {
  const [cites, setCites] = useState([]);

  useEffect(() => {
    let israelCites = country.getCities("Israel");
    israelCites = israelCites.map(async (city) => await translate(city, "he"));
    Promise.all(israelCites).then((values) => {
      setCites(values);
    });
  }, []);

  return (
    <div>
      <select>
        {cites.map((city,i) => {
          if (city.toLocaleLowerCase().startsWith("a"||"b"||"c"||"d"||"e"||"f"||"g"||"h"||"i"||"j"||"k"||"l"||"m"||"n"||"o"||"p"||"q"||"r"||"s"||"t"||"u"||"v"||"w"||"x"||"y"||"z")){ console.log(city)};
            if (city.startsWith("'" || '"')) {
            city = city.split("")
            city.shift();
            city = city.join("");
          }
          return <option key={i} value={`${city}`}>{city}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectCity;
