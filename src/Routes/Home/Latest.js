import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components";
import { AppData } from "../../Utility";
import { DateExt } from "../../Components";
import "../../App.css";

const Latest = () => {
  const [data] = useContext(AppData);
  const navi = useNavigate();
  // console.log(data);

  const handleImage = (d) => {
    navi(`/${d.cat}/${d.id}`, { state: d });
  };

  return (
    <div className="mainContainer">
      <div className="subContainer">
        <Header headerText={"The Latest"} />
        <div className="theLatest">
          {data
            .filter((item) => item.sp === "home-latest")
            .map((d, index) => (
              <div key={d.id} className="theLatestbox">
                <img
                  onClick={() => handleImage(d)}
                  alt="No Network"
                  src={d.img}
                  className="TheLatestImg hov"
                />
                <div className="flexProperty cHeight">
                  <div className="bannerContent">
                    <h2 className="TheH2" onClick={() => handleImage(d)}>
                      {d.title}
                    </h2>
                    <p className="bannerMainContent">{d.Overview}</p>
                    <p className="endPara">
                      <span className="genericDateTravel">{d.cat}</span>
                      <DateExt dateExt={`  / ${d.date} `} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
