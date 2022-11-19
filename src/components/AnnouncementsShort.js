import React from 'react'

function AnnouncementsShort({content}) {
  return (
    <div className="announcemtWrapper">
    <h3>Announcements &#x1F4E2; &#x1F4E2;</h3>
    <div className="announcementContent short">
      {content}
    </div>
  </div>
  )
}

export default AnnouncementsShort