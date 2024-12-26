import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const LoginScreen = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen font-lato">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default LoginScreen;
