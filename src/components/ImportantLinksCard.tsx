import { ExternalLink, Home, Building2, HelpCircle, Briefcase } from "lucide-react";

export function ImportantLinksCard() {
  const links = [
    { label: "Course Registration Portal", icon: Home },
    { label: "Hostel Portal", icon: Building2 },
    { label: "IRIS Helpdesk", icon: HelpCircle },
    { label: "Placement Cell", icon: Briefcase },
  ];

  return (
    <div 
      className="p-5 rounded-2xl"
      style={{ 
        backgroundColor: '#12254A',
        width: '280px'
      }}
    >
      <h3 
        className="mb-4"
        style={{ 
          color: '#C9A13F',
          fontSize: '16px',
          fontWeight: '600'
        }}
      >
        Important Links
      </h3>
      
      <div className="space-y-3">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <button
              key={index}
              className="w-full flex items-center gap-3 transition-colors hover:opacity-80"
            >
              <Icon 
                className="w-4 h-4 flex-shrink-0"
                style={{ color: '#C9A13F' }}
              />
              <span 
                className="flex-1 text-left"
                style={{ 
                  color: '#B0B6C2',
                  fontSize: '14px'
                }}
              >
                {link.label}
              </span>
              <ExternalLink 
                className="w-3 h-3 flex-shrink-0"
                style={{ color: '#B0B6C2' }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
