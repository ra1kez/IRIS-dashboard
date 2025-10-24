import { Clock, Calendar, TrendingUp, Users } from "lucide-react";

interface TodaySnapshotCardProps {
  darkMode?: boolean;
}

export function TodaySnapshotCard({ darkMode = false }: TodaySnapshotCardProps) {
  const cardBg = darkMode ? '#0B1C3C' : '#12254A';
  const accentColor = darkMode ? '#0B1C3C' : '#C9A13F';
  const snapshots = [
    {
      icon: Clock,
      label: "Next Class",
      value: "Digital Comm",
      detail: "2 PM Room E302"
    },
    {
      icon: Calendar,
      label: "Next Deadline",
      value: "Signals Assignment",
      detail: "11:59 PM"
    },
    {
      icon: TrendingUp,
      label: "Attendance",
      value: "84%",
      detail: "Target: 75%"
    },
    {
      icon: Users,
      label: "Upcoming Event",
      value: "TechFest Meeting",
      detail: "7 PM"
    },
  ];

  return (
    <div 
      className="p-6 rounded-2xl"
      style={{ 
        backgroundColor: cardBg,
        width: '100%'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5" style={{ color: accentColor }} />
        <h3 
          style={{ 
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: '600'
          }}
        >
          Good Evening, Rafiq
        </h3>
      </div>
      
      <div 
        className="mb-4"
        style={{ 
          height: '1px',
          backgroundColor: '#1E3263'
        }}
      />
      
      <div className="grid grid-cols-4 gap-4">
        {snapshots.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Icon 
                  className="w-4 h-4"
                  style={{ color: accentColor }}
                />
                <span 
                  style={{ 
                    color: '#B0B6C2',
                    fontSize: '12px'
                  }}
                >
                  {item.label}
                </span>
              </div>
              <div 
                className="mb-1"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '600'
                }}
              >
                {item.value}
              </div>
              <div 
                style={{ 
                  color: '#B0B6C2',
                  fontSize: '12px'
                }}
              >
                {item.detail}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
