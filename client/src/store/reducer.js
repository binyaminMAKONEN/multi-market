import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    orders:[],
    users:[]
}
export const marketSlice = createSlice({
    name:'market',
    initialState,
    reducers:{
        getOrders:(state)=>{

        }
    }
})
export const {getOrders} = marketSlice.actions
export default  marketSlice.reducer