import React from "react";
import { Logo, TopNavigation, LogoMobile, Footer } from "../../Components";
import TechArticleList from "./TechArticleList";
import TechTopPost from "./TechTopPost";
import Store from "../../Utility/ContextStore.js/contextAPI";

const Technology = () => {
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
              <TechArticleList />
              <TechTopPost />
            </Store>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Technology;
