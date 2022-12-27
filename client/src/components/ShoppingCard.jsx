import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreaseCart, getTotal, removeFromCart } from "../store/cartSlice";
import {addToOrder} from '../store/orderSlice'
import PayButton from "../payment/PayButton";


const ShoppingCard = ({orderAddress}) => {
  
  const user = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const [cart, setCart] = useState([]);
  dispatch(getTotal());
  const selector = useSelector((state) => state.cart);
  const formatter = new Intl.NumberFormat('il-IL', {
    style: 'currency',
    currency: 'ILS',
  })
  // //////////////
  const x = ()=>{
   const newUser = {
    stores:sortCartOrder(),
    address:orderAddress,
    price:selector.cartItem.cartTotalAmount,
    clientId:user.user.id
  }
  dispatch(addToOrder(newUser))
  }
  
  const sortCartSelector = () => {
    const sortCart = [];

    for (let i = 0; i < selector.cartItem.length; i++) {
      const obj = selector.cartItem[i];
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
    }
    setCart(sortCart);
  };


  const sortCartOrder = () => {
    const sortOrder = [];

    for (let i = 0; i < selector.cartItem.length; i++) {
      const obj = selector.cartItem[i];
      let storesId = sortOrder.map((n) => n.storeId);

      const iProduct = sortOrder.findIndex(
        (product) => product.storeId === obj.storeId
      );
      if (iProduct >= 0) {
        sortOrder[iProduct].products.push(obj._id);
      }

      if (!storesId.includes(obj.storeId)) {
        sortOrder.push({ storeId: obj.storeId, products: [obj._id] });
      }
    }
    return sortOrder;
  };


  useEffect(() => {
    sortCartSelector();
  }, [JSON.stringify(selector.cartItem)]);

  return (
    <>
      <div className="pointer-events-auto w-0 md:w-4/12 invisible md:visible">
        <div className="flex grow h-7/12 flex-col overflow-y-scroll bg-white shadow-xl">
          <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
            <div className="border-b-2 py-2 bg-gray-700">
              <h2 className="text-lg font-medium text-white  text-center">
                עגלת קניות
              </h2>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {selector &&
                    cart.map((store) => (
                      <>
                        <h2 className="p-5 text-right shadow-lg mt-4">
                          {store.storeName}
                        </h2>
                        {store?.products.map((product) => (
                          <li className="flex py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.img}
                                alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                                className="h-full w-full object-cover object-center"
                              />
                            </div>

                            <div className="ml-4 flex flex-1 flex-col">
                              <div>
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    <a href="#">Throwback Hip Bag</a>
                                  </h3>
                                  <p className="ml-4">
                                    {formatter.format(product.price)}
                                  </p>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  {product.description}
                                </p>
                              </div>
                              <div className="flex flex-1 items-end justify-between text-sm">
                                <p className="text-gray-500">
                                  {" "}
                                  Qty{" "}
                                  <span
                                    className="text-red-400 cursor-pointer "
                                    onClick={() => {
                                      dispatch(decreaseCart(product));
                                    }}
                                  >
                                    -
                                  </span>{" "}
                                  {product.cartQuantity}{" "}
                                  <span
                                    className="text-lime-400 cursor-pointer "
                                    onClick={() => {
                                      dispatch(addToCart(product));
                                    }}
                                  >
                                    +
                                  </span>{" "}
                                </p>

                                <div className="flex">
                                  <button
                                    onClick={() => {
                                      dispatch(removeFromCart(product));
                                    }}
                                    type="button"
                                    className="font-medium text-red-500 hover:text-red-700"
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </>
                    ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{formatter.format(selector.cartTotalAmount)}</p>
              {/*total price*/}
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="mt-6 cursor-pointer" onClick={()=>{x()}}>
              <PayButton>
                click hear to pay
              </PayButton>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
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
