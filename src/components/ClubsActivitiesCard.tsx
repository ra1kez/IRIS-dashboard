import { Users, ChevronRight } from "lucide-react";

export function ClubsActivitiesCard() {
  const activities = [
    {
      club: "IEEE Student Chapter",
      event: "Workshop on IoT",
      date: "Oct 28, 6 PM",
      location: "Lab 301"
    },
    {
      club: "Coding Club",
      event: "Hackathon 2025",
      date: "Nov 2-3",
      location: "Main Auditorium"
    },
    {
      club: "Robotics Club",
      event: "Robot Wars",
      date: "Nov 10, 4 PM",
      location: "Workshop Hall"
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
        <Users className="w-5 h-5" style={{ color: '#C9A13F' }} />
        <h3 
          style={{ 
            color: '#C9A13F',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Clubs & Activities
        </h3>
      </div>
      
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg hover:bg-opacity-50 transition-colors"
            style={{ 
              backgroundColor: 'rgba(30, 50, 99, 0.3)'
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p 
                  className="mb-1"
                  style={{ 
                    color: '#C9A13F',
                    fontSize: '12px',
                    fontWeight: '600'
                  }}
                >
                  {activity.club}
                </p>
                <p 
                  className="mb-1"
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  {activity.event}
                </p>
                <p 
                  style={{ 
                    color: '#B0B6C2',
                    fontSize: '12px'
                  }}
                >
                  {activity.date} • {activity.location}
                </p>
              </div>
              <button
                className="px-3 py-1 rounded hover:opacity-90 transition-opacity flex-shrink-0"
                style={{ 
                  backgroundColor: '#C9A13F',
                  color: '#FFFFFF',
                  fontSize: '12px',
                  fontWeight: '700'
                }}
              >
                Join
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="mt-4 w-full flex items-center justify-center gap-1 hover:opacity-80 transition-opacity"
        style={{ 
          color: '#C9A13F',
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        Explore More
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
