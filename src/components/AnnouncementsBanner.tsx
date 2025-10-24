import { Bell } from "lucide-react";
import { useState, useEffect } from "react";

interface AnnouncementsBannerProps {
  darkMode?: boolean;
}

export function AnnouncementsBanner({ darkMode = false }: AnnouncementsBannerProps) {
  const cardBg = darkMode ? '#12254A' : '#FFFFFF';
  const accentColor = '#C9A13F';
  const textColor = darkMode ? '#FFFFFF' : '#0B1C3C';
  const dotBg = darkMode ? '#1E3263' : 'rgba(201, 161, 63, 0.2)';
  const announcements = [
    {
      tag: "Exam",
      tagColor: "#E06F6F",
      message: "Mid-semester examinations scheduled from Nov 15-22"
    },
    {
      tag: "Event",
      tagColor: "#5EB1FF",
      message: "Annual TechFest registration opens next week"
    },
    {
      tag: "Admin",
      tagColor: "#C9A13F",
      message: "Fee payment deadline extended to Nov 30"
    },
    {
      tag: "Exam",
      tagColor: "#E06F6F",
      message: "Hall tickets for semester exams now available"
    },
    {
      tag: "Event",
      tagColor: "#5EB1FF",
      message: "Guest lecture on AI/ML scheduled for Oct 28"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('out');
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length);
        setFadeState('in');
      }, 500); // Wait for fade out to complete
    }, 5000); // Change announcement every 5 seconds

    return () => clearInterval(interval);
  }, [announcements.length]);

  const currentAnnouncement = announcements[currentIndex];

  return (
    <div 
      className="p-4 rounded-2xl flex items-center gap-4"
      style={{ 
        backgroundColor: cardBg,
        width: '100%',
        minHeight: '70px'
      }}
    >
      <Bell className="w-5 h-5 flex-shrink-0" style={{ color: accentColor }} />
      
      <div 
        className="flex items-center gap-3 flex-1 transition-opacity duration-500"
        style={{ 
          opacity: fadeState === 'in' ? 1 : 0
        }}
      >
        <span 
          className="px-3 py-1 rounded flex-shrink-0"
          style={{ 
            backgroundColor: currentAnnouncement.tagColor,
            color: '#FFFFFF',
            fontSize: '12px',
            fontWeight: '600'
          }}
        >
          {currentAnnouncement.tag}
        </span>
        <p 
          style={{ 
            color: textColor,
            fontSize: '14px',
            flex: 1
          }}
        >
          {currentAnnouncement.message}
        </p>
      </div>

      {/* Progress indicators */}
      <div className="flex gap-1.5">
        {announcements.map((_, index) => (
          <div
            key={index}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ 
              backgroundColor: index === currentIndex ? accentColor : dotBg
            }}
          />
        ))}
      </div>
    </div>
  );
}
