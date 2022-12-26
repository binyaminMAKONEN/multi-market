import React from 'react'

function Team() {
  return (
    <div className="sm:flex-wrap md:flex md:flex-row md:justify-evenly  ">
   <h1 className="text-center text-9xl">The Team</h1>
      <div className="min-h-screen  flex justify-center items-center py-20">
        <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">FullStack Developer</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src="https://media.licdn.com/dms/image/D4D35AQHTCuVVr6quBw/profile-framedphoto-shrink_400_400/0/1648582857595?e=1672621200&v=beta&t=3-i1mBF3cgsetBJTr_XGNzenp0PBIX_w5NJCONBXp5E" alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">CHEN WASSI</h1>
            <div className="my-4">
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>1:34:23 Minutes</p>
              </div>
              <div className="flex space-x-1">
                <span>
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </span>
                <a href="https://www.linkedin.com/in/chen-wassi-2b93b2233/" target="_blank"><u>Linkdin</u></a>
              </div>
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <a href="https://github.com/chenwassi" target="_blank"><u>GitHub </u></a>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">FullStack Developer</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src="https://media.licdn.com/dms/image/C4E03AQGjYrXxxo_15A/profile-displayphoto-shrink_100_100/0/1655192367060?e=1677715200&v=beta&t=M0EGlnnEjkTv83c_BebvnqLPHFdPIYU2UpeTOdEorFs" alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">WUBET ZAMALA</h1>
            <div className="my-4">
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>1:34:23 Minutes</p>
              </div>
              <div className="flex space-x-1">
                <span>
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </span>
                <a href="https://www.linkedin.com/in/wubet-zemele-a3522621a/" target="_blank"><u>Linkdin</u></a>
              </div>
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <a href="https://github.com/wubet777" target="_blank" ><u>GitHub </u></a>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Start Watching Now</button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">FullStack Developer</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src="https://media.licdn.com/dms/image/D4E35AQFsjqd3DikaZQ/profile-framedphoto-shrink_400_400/0/1666527415570?e=1672621200&v=beta&t=7OcDLV-bp0T9L9O46gzLIG5LbYyohsBkukFgBPslAZs" alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">BINYAMIN MEKONEN</h1>
            <div className="my-4">
              <div className="flex space-x-1 ">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>1:34:23 Minutes</p>
              </div>
              <div className="flex space-x-1">
                <span>
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </span>
                <a href="https://www.linkedin.com/in/binyamin-makonen/" target="_blank"><u>Linkdin</u></a>
              </div>
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <a href="https://github.com/binyaminMAKONEN" target="_blank"><u>GitHub </u></a>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">FullStack Developer</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src="https://media.licdn.com/dms/image/C4D03AQG8ZTXuyphqgg/profile-displayphoto-shrink_400_400/0/1662477973859?e=1677715200&v=beta&t=Yrt9o6AtT78BG2AcSrtddOEE05qugAg6v5NYeHkBxNM" alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">AMIR NAGAT</h1>
            <div className="my-4">
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>1:34:23 Minutes</p>
              </div>
              <div className="flex space-x-1">
                <span>
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </span>
                <a href="https://www.linkedin.com/in/aviv-adga-3b0b51234/" target="_blank"><u>Linkdin</u></a>
              </div>
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <a href="https://github.com/amirnagat" target="_blank"><u>GitHub </u></a>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">FullStack Developer</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src="https://media.licdn.com/dms/image/C4D03AQEYCtN755MDNw/profile-displayphoto-shrink_400_400/0/1658905598853?e=1677715200&v=beta&t=fZAqw20F_r0lWA0xEErAUk41s5yiC8VFeCFTddE3EWg" alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">AVIV ADGA</h1>
            <div className="my-4">
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>1:34:23 Minutes</p>
              </div>
              <div className="flex space-x-1">
                <span>
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </span>
                <a href="https://www.linkedin.com/in/aviv-adga-3b0b51234/" target="_blank"><u>Linkdin</u></a>
              </div>
              <div className="flex space-x-1">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <a href="https://github.com/AvivAdga" target="_blank"><u>GitHub </u></a>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
            </div>
          </div>

          <div className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">FullStack Developer</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7gjz_tqhCGxPjl-J099B6Ll8LDZAkNqXpvo6gXoc-3dTYzCf4lvxx1T_lJa7BFP1G2g&usqp=CAU" alt="Colors" />
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">MEIR AMARA</h1>
            <div className="my-4">
              <div className="flex space-x-1 ">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>1:34:23 Minutes</p>
              </div>
              <div className="flex space-x-1">
                <span>
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                </span>
                <a href="https://www.linkedin.com/in/meir-amara-a713b4233/" target="_blank"><u>Linkdin</u></a>
              </div>
              <div className="flex space-x-1 ">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <a href="https://github.com/Meir-Amara" target="_blank"><u>GitHub </u></a>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team