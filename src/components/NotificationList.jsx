import React, { useState } from "react";
import "./NotificationList.css";
import { data } from "../data.js";
import Notification from "./Notification";
/* nl stands for notification list */

const NotificationList = () => {
  const [notifications, setNotifications] = useState(data);

  const unreadCount = notifications.filter(
    (notification) => notification.read === false
  ).length;

  const readAllNotifications = () => {
    setNotifications((prev) => {
      return prev.map((item) => ({ ...item, read: true }));
    });
  };

  return (
    <div className="nl-container">
      <div className="nl-header-section">
        <div className="nl-header">
          <h1>Notifications</h1>
          <span className="unread-count">{unreadCount}</span>
        </div>
        <button className="btn-link" onClick={readAllNotifications}>
          Mark all as read
        </button>
      </div>
      {notifications.map((item, index) => {
        return <Notification key={index} item={item} />;
      })}
    </div>
  );
};

export default NotificationList;
