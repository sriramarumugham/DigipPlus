import React from "react";
import { Outlet } from "react-router-dom";
import { AnnouncementsShort } from "../components/index";

function Job() {
  return (
    <div className="fullPage">
      JOB pages
      <Outlet/>
      <AnnouncementsShort
        content={"loreum ipsum doem fsadjfkkshf fsdhf k sdhf9ewe uehw "}
      />
    </div>
  );
}

export default Job;
