import { Bell, X, Clock, Users, FileText, AlertCircle } from "lucide-react";
import { useState } from "react";

interface NotificationsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export function NotificationsPanel({ isOpen, onClose, darkMode = false }: NotificationsPanelProps) {
  const notifications = [
    {
      id: 1,
      type: "assignment",
      icon: FileText,
      title: "Signals Assignment Due Soon",
      message: "Submit your Signals & Systems assignment by Nov 5, 11:59 PM",
      time: "2 hours ago",
      unread: true,
      color: "#E06F6F"
    },
    {
      id: 2,
      type: "club",
      icon: Users,
      title: "IEEE Workshop Tomorrow",
      message: "IoT Workshop starts at 6 PM in Lab 301. Don't forget to bring your laptop!",
      time: "5 hours ago",
      unread: true,
      color: "#5EB1FF"
    },
    {
      id: 3,
      type: "assignment",
      icon: FileText,
      title: "EM Theory Lab Report",
      message: "Lab report submission deadline: Nov 12, 5:00 PM",
      time: "1 day ago",
      unread: true,
      color: "#E06F6F"
    },
    {
      id: 4,
      type: "club",
      icon: Users,
      title: "Coding Club Hackathon",
      message: "Hackathon 2025 registrations closing soon. Register now!",
      time: "1 day ago",
      unread: false,
      color: "#5EB1FF"
    },
    {
      id: 5,
      type: "deadline",
      icon: AlertCircle,
      title: "Project Proposal Due",
      message: "Submit your final year project proposal by Oct 30",
      time: "2 days ago",
      unread: false,
      color: "#C9A13F"
    },
    {
      id: 6,
      type: "club",
      icon: Users,
      title: "Robotics Club Meeting",
      message: "Robot Wars planning meeting at Workshop Hall, 4 PM",
      time: "3 days ago",
      unread: false,
      color: "#5EB1FF"
    },
  ];

  const cardBg = darkMode ? '#0B1C3C' : '#12254A';
  const accentColor = darkMode ? '#0B1C3C' : '#C9A13F';
  const textPrimary = '#FFFFFF';
  const textSecondary = '#B0B6C2';

  const [notifList, setNotifList] = useState(notifications);

  const markAllAsRead = () => {
    setNotifList(notifList.map(n => ({ ...n, unread: false })));
  };

  const clearNotification = (id: number) => {
    setNotifList(notifList.filter(n => n.id !== id));
  };

  const unreadCount = notifList.filter(n => n.unread).length;

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        onClick={onClose}
        style={{ top: '80px' }}
      />

      {/* Panel */}
      <div 
        className="fixed right-0 top-20 bottom-0 z-50 w-[400px] overflow-hidden flex flex-col"
        style={{ 
          backgroundColor: cardBg,
          boxShadow: '-4px 0 12px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div 
          className="p-5 flex items-center justify-between"
          style={{ 
            borderBottom: '1px solid #1E3263'
          }}
        >
          <div className="flex items-center gap-2">
            <Bell className="w-5 h-5" style={{ color: accentColor }} />
            <h3 
              style={{ 
                color: textPrimary,
                fontSize: '18px',
                fontWeight: '600'
              }}
            >
              Notifications
            </h3>
            {unreadCount > 0 && (
              <span 
                className="px-2 py-0.5 rounded-full"
                style={{ 
                  backgroundColor: '#E06F6F',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '600'
                }}
              >
                {unreadCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1 hover:opacity-70 transition-opacity"
          >
            <X className="w-5 h-5" style={{ color: textSecondary }} />
          </button>
        </div>

        {/* Actions */}
        <div 
          className="px-5 py-3 flex items-center justify-between"
          style={{ 
            borderBottom: '1px solid #1E3263'
          }}
        >
          <button
            onClick={markAllAsRead}
            className="hover:opacity-80 transition-opacity"
            style={{ 
              color: accentColor,
              fontSize: '13px',
              fontWeight: '600'
            }}
          >
            Mark all as read
          </button>
          <button
            onClick={() => setNotifList([])}
            className="hover:opacity-80 transition-opacity"
            style={{ 
              color: textSecondary,
              fontSize: '13px'
            }}
          >
            Clear all
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifList.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8">
              <Bell className="w-12 h-12 mb-3" style={{ color: textSecondary, opacity: 0.5 }} />
              <p style={{ color: textSecondary, fontSize: '14px' }}>
                No notifications
              </p>
            </div>
          ) : (
            <div className="p-3 space-y-2">
              {notifList.map((notification) => {
                const Icon = notification.icon;
                return (
                  <div 
                    key={notification.id}
                    className="p-3 rounded-lg hover:bg-opacity-70 transition-colors relative group"
                    style={{ 
                      backgroundColor: notification.unread ? 'rgba(30, 50, 99, 0.5)' : 'rgba(30, 50, 99, 0.2)',
                      borderLeft: `3px solid ${notification.color}`
                    }}
                  >
                    <button
                      onClick={() => clearNotification(notification.id)}
                      className="absolute top-2 right-2 p-1 opacity-0 group-hover:opacity-100 transition-opacity rounded hover:bg-black hover:bg-opacity-20"
                    >
                      <X className="w-3 h-3" style={{ color: textSecondary }} />
                    </button>

                    <div className="flex items-start gap-3 pr-6">
                      <div 
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ 
                          backgroundColor: `${notification.color}20`
                        }}
                      >
                        <Icon 
                          className="w-4 h-4"
                          style={{ color: notification.color }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <span 
                            className="font-semibold"
                            style={{ 
                              color: textPrimary,
                              fontSize: '14px'
                            }}
                          >
                            {notification.title}
                          </span>
                        </div>
                        <p 
                          className="mb-2"
                          style={{ 
                            color: textSecondary,
                            fontSize: '13px',
                            lineHeight: '1.4'
                          }}
                        >
                          {notification.message}
                        </p>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" style={{ color: textSecondary }} />
                          <span 
                            style={{ 
                              color: textSecondary,
                              fontSize: '12px'
                            }}
                          >
                            {notification.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
