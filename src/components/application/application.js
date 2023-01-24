import React, { useState } from "react";
import Navbar from "../navbar/navbar";
import CenterSection from "../centerSection/centerSection"
import Footer from "../footer/footer"

const Application = () => {
  const [showLogin, setshowLogin] = useState(false);
  const [isLogin, setIsLogin] = useState(false)

  
  return (
    <div role='app-container'>
      <Navbar setshowLogin={setshowLogin} isLogin={isLogin} setIsLogin={setIsLogin} />
      <CenterSection showLogin={showLogin} setIsLogin={setIsLogin} isLogin={isLogin}/>
      <Footer />
    </div>
  );
};

export default Application;
