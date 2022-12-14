import React from 'react'
import MainPage from '../Pages/mainPage'


export default function Cart() {
  return (
    <div className='container mt-10'>
<div class="bg-gray-100 container">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-20 py-10">
        <div class="flex justify-between border-b pb-6 container">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">3 Items</h2>
        </div>
        <div class="flex mt-10 mb-5 container  ">
          <h3 class="font-semibold text-gray-600 text-xs  uppercase w-2/4 container">Product Details</h3>
          <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/4 text-center">Quantity</h3>
          <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/4 text-center">Price</h3>
          <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/4 text-center">Total</h3>
        </div>
        

        <a href={<MainPage/>} class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </a>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm uppercase">Items 3</span>
          <span class="font-semibold text-sm">590$</span>
        </div>
      
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>$600</span>
          </div>
          <button class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  </div>


    </div>
  )
}



