const Order = require("../models/orderModel");
const Product =require('../models/productModel');

// exports.addOrders = async (req,res) => {
//     try {
//     //   let orders = arr.map(async (obj) => {
//     //     const order = new Order(obj);
//     //     // const orderId = order.id;
//     //     // const storeId = obj.storeId;
//     //     // await updateStoreOrders(storeId,orderId)
//     //     console.log(order);
//     //     await order.save();
//     //     return order;
//     //   });
  
//       orders = Promise.all(orders);
  
//       return orders;
//     } catch (err) {
//       throw `Err : ${err}`;
//     }
    
//   };
exports.addOrders = async (obj) => {
    try {
      const newOrder = new Order(obj);
      updateProduct(obj.productId,obj.quantity)
       await newOrder.save();
      res.status(200).json(savedOrder);
    } catch (error) {
      throw error
    }
  };
const updateProduct=async(productId,qty)=>{
    try {
        await Product.findByIdAndUpdate(productId,{$push:{qty}})
    } catch (error) {
        throw error
    }

}

