import React from "react";
import { AnnouncementsLong, BoxShadow } from "../components/index";
import "../styles/Home.css";

function Home() {
  return (

    <div className="homePage page">
      {/* logo session */}
      <div className="welcomeContainer">
        <img
          className="welcomeLogo"
          src="https://digipplus.com/static/homepage/imgs/digipplus-logo-70x70.38a25d5cef0d.png"
        />
        <h1>Welcome to Digipplus </h1>
      </div>
      {/* announcement */}
      <AnnouncementsLong
        content={"loreum ipsum doem fsadjfkkshf fsdhf k sdhf9ewe uehw "}
      />
      {/* different sessions */}
      <div className="sessionsWrapper">
        <h3 className="heading"> Wrok Action </h3>

        <div className="sessions">
          <BoxShadow content={"Chat"} />
        </div>
      </div>
      {/* different sessions */}
      <div className="sessionsWrapper">
        <h3 className="heading">Internships</h3>
        <div className="sessions">
          <BoxShadow heading={"Solution writing"} content={"write solution"} />
          <BoxShadow
            heading={"Video solution writing"}
            content={"work on writing video solutions"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
