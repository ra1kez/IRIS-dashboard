import { Briefcase, Building2, ChevronRight } from "lucide-react";

export function PlacementUpdatesCard() {
  const placements = [
    {
      company: "Google",
      role: "SDE Intern",
      date: "Nov 5",
      status: "Open"
    },
    {
      company: "Microsoft",
      role: "Software Engineer",
      date: "Nov 12",
      status: "Open"
    },
    {
      company: "Amazon",
      role: "SDE-1",
      date: "Nov 18",
      status: "Upcoming"
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
        <Briefcase className="w-5 h-5" style={{ color: '#C9A13F' }} />
        <h3 
          style={{ 
            color: '#C9A13F',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Placement Updates
        </h3>
      </div>
      
      <div className="space-y-3">
        {placements.map((placement, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg hover:bg-opacity-50 transition-colors cursor-pointer"
            style={{ 
              backgroundColor: 'rgba(30, 50, 99, 0.3)'
            }}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2">
                <Building2 
                  className="w-4 h-4"
                  style={{ color: '#C9A13F' }}
                />
                <span 
                  style={{ 
                    color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  {placement.company}
                </span>
              </div>
              <span 
                className="px-2 py-0.5 rounded"
                style={{ 
                  backgroundColor: placement.status === 'Open' ? '#5EB1FF' : '#C9A13F',
                  color: '#FFFFFF',
                  fontSize: '11px',
                  fontWeight: '600'
                }}
              >
                {placement.status}
              </span>
            </div>
            <p 
              className="mb-1"
              style={{ 
                color: '#B0B6C2',
                fontSize: '13px'
              }}
            >
              {placement.role}
            </p>
            <p 
              style={{ 
                color: '#B0B6C2',
                fontSize: '12px'
              }}
            >
              Drive date: {placement.date}
            </p>
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
        View All Opportunities
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
