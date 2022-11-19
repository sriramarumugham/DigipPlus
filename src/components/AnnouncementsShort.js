import React, { useState } from "react";


// anouncements components with short note and close button 

function AnnouncementsShort({ content }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="announcemtWrapper">
      <span>
        <button onClick={() => setToggle(!toggle)}> X </button>
        <strong>Announcements</strong> &#x1F4E2;
      </span>
      {toggle && <div className="announcementContent short">{content}</div>}
    </div>
  );
}

export default AnnouncementsShort;
