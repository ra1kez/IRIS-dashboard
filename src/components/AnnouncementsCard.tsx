import { Bell, ChevronRight } from "lucide-react";
import { Badge } from "./ui/badge";

export function AnnouncementsCard() {
  const announcements = [
    {
      tag: "Exam",
      tagColor: "#E06F6F",
      message: "Mid-semester examinations scheduled from Nov 15-22",
      date: "2 days ago"
    },
    {
      tag: "Event",
      tagColor: "#5EB1FF",
      message: "Annual TechFest registration opens next week",
      date: "3 days ago"
    },
    {
      tag: "Admin",
      tagColor: "#C9A13F",
      message: "Fee payment deadline extended to Nov 30",
      date: "5 days ago"
    },
    {
      tag: "Exam",
      tagColor: "#E06F6F",
      message: "Hall tickets for semester exams now available",
      date: "1 week ago"
    },
    {
      tag: "Event",
      tagColor: "#5EB1FF",
      message: "Guest lecture on AI/ML scheduled for Oct 28",
      date: "1 week ago"
    },
  ];

  return (
    <div 
      className="p-5 rounded-2xl"
      style={{ 
        backgroundColor: '#12254A',
        width: '100%'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5" style={{ color: '#C9A13F' }} />
        <h3 
          style={{ 
            color: '#C9A13F',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Announcements & Updates
        </h3>
      </div>
      
      <div className="space-y-3">
        {announcements.map((announcement, index) => (
          <div 
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg hover:bg-opacity-50 transition-colors"
            style={{ 
              backgroundColor: 'rgba(30, 50, 99, 0.3)'
            }}
          >
            <span 
              className="px-2 py-1 rounded text-white flex-shrink-0"
              style={{ 
                backgroundColor: announcement.tagColor,
                fontSize: '11px',
                fontWeight: '600'
              }}
            >
              {announcement.tag}
            </span>
            <div className="flex-1 min-w-0">
              <p 
                className="mb-1"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '14px'
                }}
              >
                {announcement.message}
              </p>
              <span 
                style={{ 
                  color: '#B0B6C2',
                  fontSize: '12px'
                }}
              >
                {announcement.date}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="mt-4 flex items-center gap-1 ml-auto hover:opacity-80 transition-opacity"
        style={{ 
          color: '#C9A13F',
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        View All
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
