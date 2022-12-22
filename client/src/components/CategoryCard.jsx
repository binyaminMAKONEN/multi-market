import React from 'react'
import { Link } from "react-router-dom";
function CategoryCard({data}) {
  return (
    
    <div>
      <Link to={`/storeli`}>
         <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src={data.image.logo} alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">{data.storeType}</h5>
          </div>
        </div>
      </div>
      </Link>
    </div>
    
  )
}

export default CategoryCard