import { createSlice } from "@reduxjs/toolkit";
console.log(sessionStorage.getItem("token"));
const initialState = {
  user:sessionStorage.getItem("user")?JSON.parse(sessionStorage.getItem("user")): null,
  token:sessionStorage.getItem("token")?sessionStorage.getItem("token"):null,
  // googleUser: null
};

const authSlice = createSlice({
  name: "authJWT",
  initialState,
  reducers: {
    setCredentials:(state,action)=>{
      const token=action.payload.token
      const user=action.payload.user
      console.log(action.payload);
      state.token=token
      state.user=user
    },
    setGoogleUser:(state,action)=>{
      const user=action.payload.user
      console.log(action.payload);
      state.user=user
    },
    logOut:(state,action)=>{ 
      sessionStorage.clear()
      state.token = null
      state.user = null
    }
  }
});

export const { setCredentials,logOut,setGoogleUser} = authSlice.actions;
export default authSlice.reducer  ;

export const selectCurrentUser=(state)=>state.auth.user
export const selectCurrentToken=(state)=>state.auth.token
