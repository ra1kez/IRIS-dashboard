import { Calendar, CreditCard, Download, FileText, Mail } from "lucide-react";

interface QuickActionsCardProps {
  darkMode?: boolean;
}

export function QuickActionsCard({ darkMode = false }: QuickActionsCardProps) {
  const actions = [
    { label: "View Timetable", icon: Calendar },
    { label: "Pay Fees", icon: CreditCard },
    { label: "Download Transcript", icon: Download },
    { label: "Contact Advisor", icon: Mail },
    { label: "Apply for Leave", icon: FileText },
  ];

  const cardBg = darkMode ? '#0B1C3C' : '#12254A';
  const accentColor = darkMode ? '#0B1C3C' : '#C9A13F';

  return (
    <div 
      className="p-5 rounded-2xl"
      style={{ 
        backgroundColor: cardBg,
        width: '280px'
      }}
    >
      <h3 
        className="mb-4"
        style={{ 
          color: accentColor,
          fontSize: '16px',
          fontWeight: '600'
        }}
      >
        Quick Actions
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {actions.slice(0, 4).map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="h-10 rounded-lg flex items-center justify-center gap-2 transition-colors hover:opacity-90"
              style={{ 
                backgroundColor: accentColor,
                color: '#FFFFFF',
                fontSize: '12px',
                fontWeight: '700'
              }}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden xl:inline">{action.label.split(' ')[0]}</span>
            </button>
          );
        })}
      </div>
      
      <button
        className="w-full h-10 rounded-lg mt-3 flex items-center justify-center gap-2 transition-colors hover:opacity-90"
        style={{ 
          backgroundColor: accentColor,
          color: '#FFFFFF',
          fontSize: '12px',
          fontWeight: '700'
        }}
      >
        <FileText className="w-4 h-4" />
        Apply Leave
      </button>
    </div>
  );
}
