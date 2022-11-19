import React from "react";
import '../styles/Announcement.css'

function AnnouncementsLong({ content }) {
  return (
    <div className="announcemtWrapper">
      <h3>Announcements &#x1F4E2; &#x1F4E2;</h3>
      <div className="announcementContent long">
        {content}
      </div>
    </div>
  );    
}

export default AnnouncementsLong;
