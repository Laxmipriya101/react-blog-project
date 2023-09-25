import React, { useContext } from "react";
import { Footer, Logo } from "../../Components";
import "./CommonPage.style.css";
import { DateExt, GetStarted } from "../../Components";
import { Link, useLocation, useParams } from "react-router-dom";
// import Latest from "../Home/Latest";
import { AppData } from "../../Utility";

const CommonPage = () => {
  const location = useLocation();
  const id = useParams().id;
  const [data] = useContext(AppData);
  const dRouteData = data[id].cat;
  // console.log(dRouteData);
  return (
    <div className="commonParent">
      <div className="editLogo">
        <div className="uniqueLogo">
          <Link className="linkStyle" to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="getStarted ">
          <GetStarted />
        </div>
      </div>
      <div className="flexProperty">
        <hr className="commonPageHr" />
      </div>
      <div className="mainContainer">
        <div className="commonContainer">
          <div>
            <h1 className="theComHeading">{location.state.title}</h1>
          </div>
          <div className="commonProfile">
            <div className="commonPic1">
              <img
                className="profileImg"
                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR2z1jaUw5sRS4wfasqV74Q125cdS7q7GulMFTYaS2snZZNSq1F"
                alt=""
              />
              <div className="profileName">
                <div>Dmitry Nozhenko</div>
                <DateExt dateExt={"Jan 28, 2019 · 10 min read"} />
              </div>
            </div>
            <div className="commonPic2">
              <img
                className="icons"
                alt=""
                src="https://freepngimg.com/thumb/social_media/74031-instagram-icons-media-youtube-computer-facebook-social-thumb.png"
              />
            </div>
          </div>
          <div className="imgCon">
            <img className="MainImage" alt="" src={location.state.img} />
          </div>

          <div className="descrip">
            <p className="paraStyle"> {location.state.description} </p>
          </div>

          <div></div>
        </div>
      </div>
      <br />
      {/* <button className="backbtn">Back</button> */}
      <div className="clap">
        &nbsp; &nbsp; &nbsp;
        <img
          src="https://t3.ftcdn.net/jpg/02/73/86/04/360_F_273860462_sNTdIEMoyhRmH9she0o8KGH4HOYUNZs5.jpg"
          alt=""
          width="100px"
        />
        &nbsp; &nbsp; &nbsp;<p className="rate">9.3k</p>
      </div>
      <br />

      <div className="share">
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <img
          src="https://banner2.cleanpng.com/20180524/hh/kisspng-social-media-share-icon-computer-icons-social-netw-5b069a9f190764.1478220715271594551025.jpg"
          width="50px"
          alt=""
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <p>share this article</p>
      </div>
      {/* {data
        .filter(
          (item) => item.cat === dRouteData && item.id % 4 === 0
          // (item.id % 5 === 1 || item.id % 3 === 2 || item.id % 3 === 0)
        )
        .map((d, index) => (
          <>
            <img src={d.img} alt="" />
          </>
        ))} */}

      <div className="mainContainer">
        <div className="subContainer">
          {/* <Header headerText={"The Latest"} /> */}
          <div className="theLatest">
            {data
              .filter((item) => item.cat === dRouteData && item.id % 4 === 0)
              .map((d, index) => (
                <div key={d.id} className="theLatestbox">
                  <img
                    alt="No Network"
                    src={d.img}
                    className="TheLatestImg hov"
                  />
                  <div className="flexProperty cHeight">
                    <div className="bannerContent">
                      <h2 className="TheH2">{d.title}</h2>
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

      {/* <Latest /> */}
      <Footer />
    </div>
  );
};

export default CommonPage;
