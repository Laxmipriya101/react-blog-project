import React, { useContext } from "react";
import { Header, DateExt, Advertisement } from "../../Components";
import "../../App.css";
import { AppData } from "../../Utility";
import { useNavigate } from "react-router-dom";

function HollyTopPost() {
  const [data] = useContext(AppData);

  const navi = useNavigate();

  const handleImage = (d) => {
    navi(`/Hollywood/${d.id}`, { state: d });
  };

  const Filter = data.filter(
    (item) => item.cat === "Hollywood" && item.for === "TopList"
  );

  return (
    <div className="TopPostsPar">
      <div className="topPostCon">
        <div className="heading">
          <Header headerText={"Top Posts"} />
        </div>

        {data
          .filter(
            (item) => item.cat === "Hollywood" && item.for === "TheTopList"
          )
          .map((d) => (
            <div className="MtopBox" key={d.id}>
              <img
                onClick={() => handleImage(d)}
                src={d.img}
                alt="No Network"
                className="topPostImg hov"
              />
              <div className="MtoptText">
                <h2 onClick={() => handleImage(d)} className="h2Height TheH2">
                  {d.title}
                </h2>
                <p className="paraHeight">
                  <span className="genericDateTravel">{d.cat}</span>
                  <DateExt dateExt={`  / ${d.date} `} />
                </p>
              </div>
            </div>
          ))}

        {Filter.map((d) => (
          <div key={d.id}>
            <div className="spacer">
              <hr className="commonHr" />
            </div>

            <div className="TopPostsSmallCon">
              <img
                onClick={() => handleImage(d)}
                src={d.img}
                alt="No Network"
                className="topPostImgSmall hov"
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

      <div className="TopPostAd">
        <Advertisement />
      </div>
    </div>
  );
}
export default HollyTopPost;
