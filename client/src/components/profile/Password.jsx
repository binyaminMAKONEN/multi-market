import React from 'react'

const Password = () => {
  return (
    <form class="w-full max-w-sm text-right">
      <h1 className='text-xl mb-5'>החלפת סיסמא</h1>
<div class="flex flex-col outline-none items-center  border-b border-teal-500 py-2">
 
  <label  className='text-right w-full '>אימייל
  <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" type="email"  placeholder="Exsampal@gmail.com" />
  </label>
  <label  className='text-right w-full '>סיסמא
  <input class="appearance-none bg-transparent mb-3  text-right border-none w-full text-gray-700 mr-3 py-3 px-2 leading-tight focus:outline-none" type="Password"  placeholder="******" />
  </label>

 
</div>
</form>
  )
}

export default Password