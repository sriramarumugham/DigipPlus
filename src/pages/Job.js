import React from "react";
import { Outlet } from "react-router-dom";
import { AnnouncementsShort, Tabs } from "../components/index";

import "../styles/Jobs.css";

function Job() {
  return (
    <div className="fullPage jobsPage">
      <div className="tabsSession">
        {/* group of tabs */}
        {/* tab one */}
        <>
          <h3 className="heading">JOBS</h3>

          <Tabs data={"Solution Writing"} path={"/job/solution-writing"} />
        </>
        {/* tab two*/}
        <>
          <h3 className="heading">FOR JOB APPLICATION</h3>
          <Tabs data={"Screening Tasks"} path={"/job/screening-tasks"} />
        </>
        {/* tab three*/}
        <>
          <h3 className="heading">APPLICATION STATUS</h3>
          <Tabs
            data={"Job Application Status"}
            path={"/job/job-application-status"}
          />
        </>
      </div>
      <div className="display">
        <Outlet />
      </div>

      <AnnouncementsShort
        content={"loreum ipsum doem fsadjfkkshf fsdhf k sdhf9ewe uehw "}
      />
    </div>
  );
}

export default Job;
