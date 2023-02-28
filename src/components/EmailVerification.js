import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessfullRegistration from "./SuccessfullRegistration/SuccessfullRegistration";
const EmailVerification = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    console.log("email verification is under process in useEffect");
    const verificationLink = window.location.href;
    let verificationToken = verificationLink.split("/").slice(-1)[0];
    let verificationId = verificationLink.split("/").slice(-2)[0];
    console.log("VerificationToken : ", verificationToken);
    console.log("Verification id:", verificationId);
    const verifyEmail = async () => {
      try {
        if (verificationLink.includes("/api/v1/verify/") && verificationToken) {
          const response = await axios.get(
            `http://192.168.11.102:3000/api/v1/verify/${verificationId}/${verificationToken}`
          );
          console.log("data is ", response.data);
          setIsVerified(true);
          verificationToken="";
          verificationId=""
          console.log("axios.post ka then run kar gya");
          console.log("then block chala, is_verified ki value true ho gy");
        }
      } catch (error) {
        console.log(error);
        console.log("catch block chala");
        setIsVerified(false);
      } 
      // finally {
      //   setIsLoading(false);
      //   console.log("finally block chala");
      // }
    };

    verifyEmail().then(response => {console.log(response)}).catch(err => {console.log(err)});
    
    // if (verificationLink.includes("/api/v1/verify/") && verificationToken) {
    //   console.log(">>>>>>>>>>>>>>>>>>>>>>>calling");
    //   verifyEmail();
    // } else {
    //   console.log("axios.post run nahi kara");
    //   // setIsLoading(false);
    // }

    
  }, []);





  // if (isLoading) {
  //   console.log("value of isLoading was true and now it is", isLoading);
  //   return <div>...</div>;
  // }
  if (isVerified) {
    console.log("value of isVerified was false and now it is", isVerified);
    return (
      <div>
        <SuccessfullRegistration />
      </div>
    );
  } else {
    return (
      <div>Email address verification failed. Please try again later.</div>
    );
  }
};

export default EmailVerification;
