import React,{useState} from "react";
// import FirstPage from '../src/components/FirstPage'
import RoutesFile from "./components/RoutesFile";
import "bootstrap/dist/css/bootstrap.min.css";

import EmailVerification from "./components/EmailVerification";

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  return (
    <div>
     <RoutesFile isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
     <EmailVerification/>
    </div>
  );
};

export default App;
