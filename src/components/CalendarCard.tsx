import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface CalendarCardProps {
  darkMode?: boolean;
}

export function CalendarCard({ darkMode = false }: CalendarCardProps) {
  const [currentDate] = useState(new Date(2025, 9, 24)); // October 24, 2025
  
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Random highlighted dates
  const highlightedDates: { [key: number]: string } = {
    5: 'red',
    9: 'yellow',
    12: 'orange',
    15: 'red',
    18: 'yellow',
    21: 'orange',
    27: 'red',
    30: 'yellow',
  };
  
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  const today = currentDate.getDate();

  const getHighlightColor = (color: string) => {
    switch(color) {
      case 'red':
        return '#E06F6F';
      case 'orange':
        return '#FF9500';
      case 'yellow':
        return '#FFD700';
      default:
        return '#C9A13F';
    }
  };
  
  const isSaturday = (dayIndex: number) => dayIndex % 7 === 6; // Last column
  const isSunday = (dayIndex: number) => dayIndex % 7 === 0; // First column

  const cardBg = darkMode ? '#12254A' : '#FFFFFF';
  const accentColor = '#C9A13F';
  const textPrimary = darkMode ? '#FFFFFF' : '#0B1C3C';
  const textSecondary = darkMode ? '#B0B6C2' : '#5A6C8F';

  return (
    <div 
      className="p-5 rounded-2xl"
      style={{ 
        backgroundColor: cardBg,
        width: '100%'
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
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
        <div className="flex items-center gap-2">
          <button className="p-1 hover:opacity-70">
            <ChevronLeft className="w-4 h-4" style={{ color: textSecondary }} />
          </button>
          <button className="p-1 hover:opacity-70">
            <ChevronRight className="w-4 h-4" style={{ color: textSecondary }} />
          </button>
        </div>
      </div>
      
      <div 
        className="mb-3"
        style={{ 
          color: textPrimary,
          fontSize: '14px',
          fontWeight: '600'
        }}
      >
        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
      </div>
      
      {/* Week days */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div 
            key={index}
            className="text-center"
            style={{ 
              color: textSecondary,
              fontSize: '12px',
              fontWeight: '600'
            }}
          >
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) => {
          const isWeekend = day && (isSaturday(index) || isSunday(index));
          const hasHighlight = day && highlightedDates[day];
          const isCurrentDay = day === 24; // Highlight Oct 24
          
          let backgroundColor = 'transparent';
          let textColor = 'transparent';
          
          if (day) {
            if (isCurrentDay) {
              backgroundColor = '#8B8B8B'; // Grey for current date
              textColor = '#FFFFFF';
            } else if (isWeekend) {
              backgroundColor = '#4CAF50'; // Green for Saturdays and Sundays
              textColor = '#FFFFFF';
            } else if (hasHighlight) {
              backgroundColor = getHighlightColor(hasHighlight);
              textColor = '#FFFFFF';
            } else {
              backgroundColor = darkMode ? 'rgba(30, 50, 99, 0.3)' : 'rgba(201, 161, 63, 0.15)';
              textColor = darkMode ? '#FFFFFF' : '#0B1C3C';
            }
          }
          
          return (
            <div 
              key={index}
              className={`aspect-square flex items-center justify-center rounded-lg text-center transition-colors ${
                day ? 'hover:opacity-80 cursor-pointer' : ''
              }`}
              style={{ 
                backgroundColor,
                color: textColor,
                fontSize: '12px',
                fontWeight: (isCurrentDay || isWeekend || hasHighlight) ? '700' : '400'
              }}
            >
              {day}
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-4 pt-4 space-y-2" style={{ borderTop: darkMode ? '1px solid rgba(30, 50, 99, 0.5)' : '1px solid rgba(201, 161, 63, 0.2)' }}>
        <p style={{ color: textSecondary, fontSize: '12px', fontWeight: '600', marginBottom: '8px' }}>Legend:</p>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: '#8B8B8B' }}
            />
            <span 
              style={{ 
                color: textSecondary,
                fontSize: '11px'
              }}
            >
              Today
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: '#4CAF50' }}
            />
            <span 
              style={{ 
                color: textSecondary,
                fontSize: '11px'
              }}
            >
              Holidays
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: '#E06F6F' }}
            />
            <span 
              style={{ 
                color: textSecondary,
                fontSize: '11px'
              }}
            >
              Important
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded"
              style={{ backgroundColor: '#FFD700' }}
            />
            <span 
              style={{ 
                color: textSecondary,
                fontSize: '11px'
              }}
            >
              Events
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
