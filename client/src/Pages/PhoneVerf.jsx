import React from 'react'
import { useState } from 'react';
import firebase from '../firebase-config';
import {authentication} from '../firebase-config';
import {RecaptchaVerifier,signInWithPhoneNumber} from 'firebase/auth'
import { configureStore } from '@reduxjs/toolkit';
function PhoneVerf() {
   const countryCode = '+972';
   const [phoneNumber,setPhoneNumber] = useState(countryCode);
   const [expandForm,setExpandForm] = useState(false);
   const [OTP,setOTP] = useState('');

  
  const generateRecaptcha = ()=>{
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{
         'size': 'invisible',
         'callback': (response)=>{
              // reCAPTCHA solved, allow signInWithPhoneNumber.
            }
          },authentication);
  }
  
   const requestOTP =(e) =>{
    e.preventDefault();
    if (phoneNumber.length >= 13) {
        setExpandForm(true)
        generateRecaptcha()
        let appVerifer = window.recaptchaVerifier
        signInWithPhoneNumber(authentication,phoneNumber,appVerifer)
        .then(confirmationResult=>{
            window.confirmationResult = confirmationResult;
        }).catch((error)=>{
            console.log(error);

        })
        }
        
    }

    const verifyOTP = (e)=>{
        let otp = e.target.value
        setOTP(otp)
        if (otp.length === 6) {
            console.log(otp);
            
        }
    }


    return (
        <div >
          <h2>Login Form</h2>
          <form onSubmit={requestOTP}>
            <label htmlFor="phoneNumberInput">Phone number</label>
            <input
                  onChange={(e)=>setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  name="password"
                  id="form-control" 
                  type="tel"
                  placeholder="הזן מספר טלפון"
                  className="m-3"
                />
            {/* <input    /> */}
            <div id="phoneNumberHelp"> plaese enter phone number</div>
            {expandForm === true ? 
            <>
            <div>
                <label htmlFor="otpInput">OTP</label>
                <input
                  onChange={verifyOTP}
                  value={OTP}
                  id="otpInput"
                  type="number" 
                  placeholder="הזן קוד"
                  className="m-3"
                />
                {/* <input   /> */}
                <div id="otpHelp">please enter the one time pin sent to your phone</div>
            </div>
            </>:null}{expandForm === false ?
            <button type="submit" class="bg-lime-600 hover:bg-lime-500 text-white font-bold py-2 px-4 rounded">
                   שלח קוד 
          </button>
           :null}
            <div id="recaptcha-container"></div>
          </form>
        </div>
      )
   }

  



export default PhoneVerf
