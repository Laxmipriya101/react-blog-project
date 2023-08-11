import React, { useContext } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { AppData } from "../../Utility";

function Banner() {
  const [data] = useContext(AppData);
  const navi = useNavigate();
  // console.log(data);
  const Filter1 = data.filter((item) => item.sp === "home-ban");
  const Filter2 = data.filter(
    (item) => item.sp === "home-banner" && item.id === 2
  );

  const handleImage = (d) => {
    navi(`/${d.cat}/${d.id}`, { state: d });
  };

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <div className="imageContainer">
          {Filter2.map((d) => (
            <img
              key={d.id}
              onClick={() => handleImage(d)}
              alt="No Network"
              className="firstImage hov"
              src={d.img}
            />
          ))}
          {Filter1.map((d) => (
            <img
              key={d.id}
              onClick={() => handleImage(d)}
              alt="No Network"
              className="secondImage hov"
              src={d.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Banner;
