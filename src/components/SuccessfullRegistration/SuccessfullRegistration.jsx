
import './SuccessfullRegistration.css';
// import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import './SuccessfullRegistration.css';

const  SuccessfullRegistration = () => {
  const history = useNavigate();
  const [remainingTime, setRemainingTime] = useState(3);

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prevTime => prevTime - 1);
    }, 1000);

    if (remainingTime === 0) {
      clearInterval(timer);
      history("/");
    }
    return () => clearInterval(timer);
  }, [history, remainingTime]);

  return (
    <div className='center'>
      <p>You will be redirected to another page in {remainingTime} seconds...</p>
    </div>
  );
}

export default SuccessfullRegistration


