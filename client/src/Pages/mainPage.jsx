import React from 'react'
// import { TextInput} from 'flowbite-react'

function mainPage() {
  return (
    <div className=' bg-reapeat  bg-cover' style={{backgroundImage:'url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0ICAgNCA0ICAgHBw8ICQcNFREWFhURExMYHSggGBolGxMTITEhMSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDg0NDjcZFRkrLS03Ky0tKysrKy0tLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAGxABAQEAAgMAAAAAAAAAAAAAAAERAqFRcYH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A7LyiStciRyaXFiwAxmxtmgyshIsAIuAM2LFIAEawGUWwgIooJWa3iYDMawxYDK4tiAYuABYmKIAChiKACoggAGCmKEAAMFBmwaqYCaaEgAshICLq4UEtAAEIDSBAFKAgpQEMEADAFAEUAQUwEUAAFEwUBFhpgAUATFAAACgCYoAgLgIKWAmgYCgAGAgAAGBKBhQAAAFAQBQAAVACgAVFAIKAgFBNXEWARUAA0AAAAACgACAioCgAAAogAJSKKBQCIoKJqaDQigMtMgpgaAAAACKGAGCggoCCoCooggqAAAqAAoAgqKEBMBSqmAnjtQAwAAVASxcAAEBRFAVABUAKQIAABoCAQAAAFQAVAAQUUNNBUQBRFAIJoKS/PaKAqAKhUBpKqAAAqAgiqigGGIGmgAipgKAAGAGAKARKCxMUUEUQRQASLUxQVFQBFAABUoAQAABANSrIoRUEAC0AUBBUAIpgIoAyqVNUaEWAFSmgoRQBFoIABBKAoACCwAAAUBAoAACoCCggCoAogCiKDIDQRRKgUwkUAAAACUtEoKIoAAJVgAKIBBFAAAFSgAIAGAAAAAoAMiaVoXRIsBRF1BFZagBRKAUAIAAqAKBAJ0UAAAAQFBAUoACCCgAAoIAozFxRRBRBEsAFkAA0qgIAoAIAABFAAAAASgAAAAAAAKAACAAD/9k=)'}}>
        <div className='text-center mb-4'>
        <h1 className=' text-6xl'>ברוך הבא לעולם החנויות<br/> שלך</h1>
        <input className='mt-12 w-3/5 rounded-md h-12'  type="text" />
        <p className='text-2xl mt-20 mb-8'>קטגרויות שונות</p>
    </div>
    {/* categories section */}
        <div className='storesSection flex flex-wrap   justify-center gap-x-3 gap-y-3'>
 
        {/* <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/13068566/pexels-photo-13068566.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center ">
        <img src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
 
        <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center">
        <img src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div>
      <div className="flex flex-wrap justify-center ">
        <img src="c" className="max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none hover:shadow-xl" alt="" />
      </div> */}
 
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/936094/pexels-photo-936094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">ביגוד ספורט</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/5486163/pexels-photo-5486163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">כולבו</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">משקאות חריפים</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/833052/pexels-photo-833052.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">ביגוד סטייל</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/13068566/pexels-photo-13068566.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">קצבייה</h5>
          
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white max-w-sm">
          <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <img className="rounded-t-lg" src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          </a>
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-2 text-center">סופר</h5>
          
          </div>
        </div>
      </div>

        </div>
{/* brand section  */}
    <div className='brandSection gap-x-4  items-center flex flex-wrap mt-9  justify-center'>   
        <img className='w-30 h-12 pb-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="" />
        <img className='w-30 h-20 p-2' src="https://i.postimg.cc/1XT7XPZY/2022-06-30-221634-removebg-preview-1.png" alt="" />
        <img className='w-30 h-20 pb-2' src="https://pngimg.com/uploads/google/google_PNG19627.png" alt="" />
        <img className='w-30 h-12 pb-2' src="https://assets.stickpng.com/images/58480fd7cef1014c0b5e4943.png" alt="" />
    </div>

    
<div className=' mt-16'>
<div className="text-center bg-no-reapeat  bg-cover " style={{backgroundImage:'url(https://images.pexels.com/photos/952483/pexels-photo-952483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)'}}>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                
                חגיגת מוצרים במולטי מרקט
              </h2>
              <p className="text-base text-indigo-100 md:text-lg">
                תתחילו לבחור במגוון המוצרים החדשים והטריים שאנו מציעים <br />.בפריסה ארצית
              </p>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex bg-lime-600 items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition bg-white duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                תתחילו לקנות
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
    </div>

  )
}

export default mainPage