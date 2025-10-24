import { Calendar as CalendarIcon, AlertCircle, FileText, Gift } from "lucide-react";

interface AcademicCalendarCardProps {
  darkMode?: boolean;
}

export function AcademicCalendarCard({ darkMode = false }: AcademicCalendarCardProps) {
  const events = [
    {
      date: "Oct 28",
      type: "quiz",
      title: "Digital Communication Quiz 2",
      time: "10:00 AM",
      icon: FileText,
      color: "#E06F6F"
    },
    {
      date: "Nov 1-3",
      type: "holiday",
      title: "Diwali Break",
      time: "All Day",
      icon: Gift,
      color: "#C9A13F"
    },
    {
      date: "Nov 5",
      type: "deadline",
      title: "Signals Assignment Due",
      time: "11:59 PM",
      icon: AlertCircle,
      color: "#E06F6F"
    },
    {
      date: "Nov 8",
      type: "quiz",
      title: "Control Systems Mid-term",
      time: "2:00 PM",
      icon: FileText,
      color: "#5EB1FF"
    },
    {
      date: "Nov 12",
      type: "deadline",
      title: "EM Theory Lab Report",
      time: "5:00 PM",
      icon: AlertCircle,
      color: "#E06F6F"
    },
    {
      date: "Nov 15-22",
      type: "exam",
      title: "Mid-Semester Examinations",
      time: "As per schedule",
      icon: FileText,
      color: "#E06F6F"
    },
  ];

  const cardBg = darkMode ? '#0B1C3C' : '#12254A';
  const accentColor = darkMode ? '#0B1C3C' : '#C9A13F';
  const textPrimary = '#FFFFFF';
  const textSecondary = '#B0B6C2';

  return (
    <div 
      className="p-5 rounded-2xl"
      style={{ 
        backgroundColor: cardBg,
        width: '100%'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <CalendarIcon className="w-5 h-5" style={{ color: accentColor }} />
        <h3 
          style={{ 
            color: accentColor,
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Academic Calendar
        </h3>
      </div>
      
      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: `${accentColor} transparent`
      }}>
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <div 
              key={index}
              className="p-3 rounded-lg hover:bg-opacity-70 transition-colors cursor-pointer"
              style={{ 
                backgroundColor: 'rgba(30, 50, 99, 0.3)',
                borderLeft: `3px solid ${event.color}`
              }}
            >
              <div className="flex items-start gap-3">
                <div 
                  className="p-2 rounded-lg flex-shrink-0"
                  style={{ 
                    backgroundColor: `${event.color}20`
                  }}
                >
                  <Icon 
                    className="w-4 h-4"
                    style={{ color: event.color }}
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
                      {event.title}
                    </span>
                    <span 
                      className="px-2 py-0.5 rounded text-xs flex-shrink-0 ml-2"
                      style={{ 
                        backgroundColor: event.color,
                        color: '#FFFFFF',
                        fontSize: '10px',
                        fontWeight: '600'
                      }}
                    >
                      {event.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span 
                      style={{ 
                        color: textSecondary,
                        fontSize: '12px'
                      }}
                    >
                      📅 {event.date}
                    </span>
                    <span 
                      style={{ 
                        color: textSecondary,
                        fontSize: '12px'
                      }}
                    >
                      🕐 {event.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
