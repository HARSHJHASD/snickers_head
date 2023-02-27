import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SuccessfullRegistration from './SuccessfullRegistration/SuccessfullRegistration' ;
const EmailVerification = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  useEffect(() => {
    console.log("email verification is under  process in useeffect");
    //  console.log("email verification is under  process in useeffect", window.location.search.slice(1,).split('&'));
    // const tokenAndId = window.location.search.slice(1,).split('&').map((item) => {
    //   return item.split('=')[1] 
    // })
    const verificationLink = window.location.href;
    console.log("window location search" ,window.location.search);
    console.log('full link you clicked is :',verificationLink);
    const verificationToken = verificationLink.split('/').slice(-1)[0];
    const  verificationId = verificationLink.split('/').slice(-2)[0];
    console.log("VerificationToken : ",{verificationToken});
    console.log("Verification id:",{verificationId});
    if (verificationLink.includes('/api/v1/verify/') && verificationToken) {
      //In the code snippet provided, it's possible that the axios.post method is
      // not returning a promise,
      axios.get(`/api/v1/verify/${verificationId}${verificationToken}`)
      console.log(`/api/v1/verify/${verificationId}${verificationToken}`)
        .then(() =>
        {
          setIsVerified(true);
          console.log("axios.post ka then run nahi kar gya")
          console.log("then block chala ,is_verified ki value true ho gy")
        })
        .catch(()=>{
          console.log("catch block chala")
         setIsVerified(false)
        })
        .finally(() => 
        {setIsLoading(false)
          console.log("finallly block chala")
        });
    } else {
      console.log("axios.post run  nahi kara")
      setIsLoading(false);
    }

  }, []);

  if (isLoading) {
    console.log("value of isloadihng was true and now it is",{isLoading})
    return <div>...</div>;
  }

  if (isVerified) {
    console.log("value of isverified  was false and now it is",{isVerified})
    return <div><SuccessfullRegistration/></div>;
  }

  return <div>Email address verification failed. Please try again later.</div>;
};

export default EmailVerification;
