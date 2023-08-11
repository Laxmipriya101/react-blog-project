import React from "react";
import { Footer, Logo, LogoMobile, TopNavigation } from "../../Components";
import FitArticleList from "./FitArticleList";
import FitTopPost from "./FitTopPost";
import Store from "../../Utility/ContextStore.js/contextAPI";

const Fitness = () => {
  return (
    <>
      <div className="LMobile">
        <LogoMobile />
      </div>
      <div className="LLocal">
        <Logo />
        <TopNavigation />
      </div>
      <div className="mainContainer">
        <div className="subContainer">
          <div className="BollywoodContainer">
            <Store>
              <FitArticleList />
              <FitTopPost />
            </Store>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Fitness;
