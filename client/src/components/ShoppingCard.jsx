import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const ShoppingCard = () => {
  const [cart, setCart] = useState([]);

  const selector = useSelector((state) => state.cart.cartItem);
  
  const formatter = new Intl.NumberFormat('il-IL', {
    style: 'currency',
    currency: 'ILS',
  })

  const sortCartSelector = () => {
    const sortCart = [];
    for (let i = 0; i < selector.length; i++) {
      const obj = selector[i];
      let storesNames = sortCart.map((n) => n.storeName);

      const iProduct = sortCart.findIndex(
        (product) => product.storeName === obj.storeName
      );
      if (iProduct >= 0) {
        sortCart[iProduct].products.push(obj);
      }

      if (!storesNames.includes(obj.storeName)) {
        sortCart.push({ storeName: obj.storeName, products: [obj] });
      }
      console.log({ iProduct });
    }
    setCart(sortCart);
  };

  useEffect(() => {
    sortCartSelector();
  }, []);

  return (
    <>
      <div class="pointer-events-auto w-0 md:w-4/12 invisible md:visible">
        <div class="flex grow h-7/12 flex-col overflow-y-scroll bg-white shadow-xl">
          <div class="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div class="border-b-2 py-2">
              <h2 class="text-lg font-medium text-gray-900 text-center">
                עגלת קניות
              </h2>
            </div>

            <div class="mt-8">
              <div class="flow-root">
                <ul role="list" class="-my-6 divide-y divide-gray-200">
                  {selector &&
                    cart.map((store) => (
                      <>
                        <h2 className="p-5 text-right shadow-lg mt-4">
                          {store.storeName}
                        </h2>
                        {store?.products.map(product=>
                        <li class="flex py-6">
                          <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img
                              src={product.img}
                              alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                              class="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div class="ml-4 flex flex-1 flex-col">
                            <div>
                              <div class="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href="#">Throwback Hip Bag</a>
                                </h3>
                                <p class="ml-4">{formatter.format(product.price)}</p>
                              </div>
                              <p class="mt-1 text-sm text-gray-500">{product.description}</p>
                            </div>
                            <div class="flex flex-1 items-end justify-between text-sm">
                              <p class="text-gray-500">Qty {product.cartQuantity}</p>

                              <div class="flex">
                                <button
                                  type="button"
                                  class="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>)}
                      </>
                    ))}
               
                </ul>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div class="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
              {/*total price*/}
            </div>
            <p class="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div class="mt-6">
              <a
                href="#"
                class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Checkout
              </a>
            </div>
            <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  class="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
