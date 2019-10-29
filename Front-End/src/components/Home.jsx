//=======================================================================//
import React from "react";
import video from "../j.mp4";
import "./yaser.css";
import man from "../mann.png";
import woman from "../woman.png";
import { Link } from "react-router-dom";
//==========================Landing Component============================//
const Home = () => (
  <div>
    {/* ====================START : BACKGROUND VIDEO======================= */}
    <header className="v-header container">
      <div className="fullscreen-video-wrap">
        <video src={video} autoPlay loop muted></video>
      </div>
      <div className="header-overlay"></div>
      <div className="header-content text-md-center">
        <h1>Welcome to Jordan</h1>
        <p>
        Jordan is a home, Jordan is a home for all who believe in love, peace and friendship regardless of their race, gender or religion. Jordan is the land of legends, history, hospitality, and offers its visitors a rich legacy of natural beauty, and historical lore. All are welcome in Jordan.
        </p>
      </div>
    </header>
    {/* ======================END : BACKGROUND VIDEO======================= */}
    <br />
    <br />
    <br />
    {/* ========================START : THREE ICONS========================= */}

    <div className="container three text-center m-auto">
      <div className="row">
        <div className="col-4 col-sm-4 ml-5">
          <Link to="/showcase">
            <div style={{ width: "18rem", height: "15rem" }}>
              <img
                alt="attactions"
                img="attactions"
                src="https://image.flaticon.com/icons/svg/1354/1354454.svg"
                className="card-img-top"
              />
              <div className="card-body">
                <p className="card-text">Showcase OR Attractions go here!</p>
              </div>
            </div>
          </Link>
        </div>
        <Link to="/share">
        <div className="col-4 col-sm-4">
          <div className="" style={{ width: "18rem", height: "15rem" }}>
            <img
              alt="story"
              src="https://image.flaticon.com/icons/png/512/284/284435.png"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">Share your story goes here!</p>
            </div>
          </div>
        </div>
        </Link>
        <Link to="/new">
        <div className="col-4 col-sm-4">
          <div className="" style={{ width: "18rem", height: "15rem" }}>
            <img
              alt="new"
              src="https://images.vexels.com/media/users/3/152864/isolated/preview/2e095de08301a57890aad6898ad8ba4c-yellow-circle-question-mark-icon-by-vexels.png"
              className="card-img-top"
            />
            <div className="card-body">
              <p className="card-text">Something new goes here!</p>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </div>
    {/* ==========================END : THREE ICONS========================== */}
    <br />
    <br />
    <br />
    {/* =========================START : MAN & WOMAN========================= */}
    <section>
      <div>
        <img alt="man with coffee" className="man " src={man} />
        <h4 className="descMan">Welcome to Jordan, from the depth of our heart. Jordan has a tradition of welcoming visitors: camel caravans plied the legendary King’s Highway transporting frankincense in exchange for spices while Nabataean tradesmen, Roman legionnaires, Muslim armies and zealous Crusaders all passed through the land, leaving behind impressive monuments. These monuments, including Roman amphitheatres, Crusader castles and Christian mosaics, have fascinated subsequent travellers in search of antiquity and the origins of faith. The tradition of hospitality to visitors remains to this day.
          </h4>
      </div>
      <div className="clear">
      </div>
    </section>
    <section>
      <div>
        <div>
          <img alt="woman in dead sea mud" className="camel" src={woman} />      
          <h4 className="descCamel">Welcome to Jordan, from the depth of our heart. Your experience of Jordanian people is likely to be that they are, almost without exception, decent, honest, respectful and courteous.The warm welcome extended to our many friends from around the world is as ancient as the human travel itself. Today the people of Jordan cordially invite you to explore the many unique and wondrous gifts of the Kingdom of Jordan, invaluable gifts of historical knowledge, cultural discovery, and spiritual enrichment. All eagerly waiting your arrival to Jordan.
          </h4>
        </div>
      </div>
    </section>
    <div className="clear"></div>
    {/* ==========================END : MAN & WOMAN========================== */}
    <br />
    <br />
    {/* <h1>Something to be added here!</h1> */}
  </div>
);

export default Home;
