import React from 'react'
function Header({categoryDetails}) {
  return (
    <div>
<header>
        <div className="w-full bg-cover bg-center" style={{height:"15rem",backgroundImage:`url(${categoryDetails[0].image.logo})`}}>
          <div className="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
            <div className="text-center">
              <h1 className="text-white text-2xl font-semibold uppercase md:text-3xl font-Raile">קטגורייה{categoryDetails[0]?.storeType}</h1>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header



