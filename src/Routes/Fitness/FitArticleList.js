import React, { useContext } from "react";
import { Header, DateExt } from "../../Components";
import "../../App.css";
import { AppData } from "../../Utility";
import { useNavigate } from "react-router-dom";

function FitArticleList() {
  const [data] = useContext(AppData);

  const navi = useNavigate();

  const handleImage = (d) => {
    navi(`/Fitness/${d.id}`, { state: d });
  };

  return (
    <div className="ArticleList">
      <div className="ArticleListHead">
        <Header headerText={"Fitness"} />
      </div>

      <div className="ArticleListSpace">
        {data
          .filter(
            (item) => item.cat === "Fitness" && item.for === "ArticleList"
          )
          .map((d, index) => (
            <div key={d.id}>
              <div className="LatestArtBlock">
                <div>
                  <img
                    onClick={() => handleImage(d)}
                    src={d.img}
                    alt="No Network"
                    className="latestArtImg2 hov"
                  />
                </div>
                <div>
                  <h2 className="TheH2" onClick={() => handleImage(d)}>
                    {d.title}
                  </h2>
                  <p className="LatestArtDetail">{d.Overview}</p>
                  <p className="LatestArtDate">
                    <span className="genericDateTravel">{d.cat}</span>
                    <DateExt dateExt={`  / ${d.date} `} />
                  </p>
                </div>
              </div>
              {index !== 6 && (
                <div className="spacer">
                  <hr className="commonHr" />
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

export default FitArticleList;
