import React from "react";
import "./Notification.css";

const Notification = ({ item }) => {
  return (
    <div
      className={`notification-container ${!item.read ? `unread` : undefined}`}
    >
      <div
        className={`notification ${item.picture ? "with-picture" : undefined}`}
      >
        <div className="n-left">
          <img src={item.avatar} alt={item.username} className="avatar" />
          <div className="content">
            <p className="body">
              <div
                dangerouslySetInnerHTML={{
                  __html: `${item.body}
              ${!item.read ? `<div class="unread-indicator" />` : ""}`,
                }}
              />
            </p>
            <p className="timestamp">{item.timestamp}</p>
            {item.message && <div className="message">{item.message}</div>}
          </div>
        </div>
        {item.picture && (
          <img src={item.picture} alt={item.picture} className="n-image" />
        )}
      </div>
    </div>
  );
};

export default Notification;
