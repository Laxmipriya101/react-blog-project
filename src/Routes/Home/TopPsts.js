import React, { useContext } from "react";
import { Header } from "../../Components";
import Advertisement from "./Advertisement";
import "../../App.css";
import { AppData } from "../../Utility";
import { DateExt } from "../../Components";
import { useNavigate } from "react-router-dom";

function TopPots() {
  const [data] = useContext(AppData);
  const navi = useNavigate();

  const handleImage = (d) => {
    navi(`/${d.cat}/${d.id}`, { state: d });
  };
  return (
    <div className="TopPstsPar">
      <Advertisement />
      <div className="topPostCon">
        <div className="heading">
          <Header headerText={"Top Posts"} />
        </div>

        {data
          .filter((item) => item.sp === "home-Toplist")
          .map((d, index) => (
            <div className="topPostMedia" key={d.id}>
              <img
                onClick={() => handleImage(d)}
                alt="No Network"
                className="topPostImg hov"
                src={d.img}
              />
              <div className="topTextMedia">
                <h2 onClick={() => handleImage(d)} className="h2Height">
                  {d.title}
                </h2>
                <p className="paraHeight">
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          ))}

        {data
          .filter((item) => item.sp === "home-ToplistA")
          .map((d, index) => (
            <div key={d.id}>
              <div className="spacer">
                <hr className="commonHr" />
              </div>
              <div className="TopPostsSmallCon">
                <img
                  onClick={() => handleImage(d)}
                  alt="No Network"
                  className="topPostImgSmall hov"
                  src={d.img}
                />
                <div className="h4">
                  <h4 onClick={() => handleImage(d)} className="h3Height">
                    {d.title}
                  </h4>
                  <p className="paraHeightSmall">
                    <span className="genericDateTravel">{d.cat}</span>
                    <DateExt dateExt={`  / ${d.date} `} />
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TopPots;
