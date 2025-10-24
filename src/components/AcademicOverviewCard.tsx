import { GraduationCap } from "lucide-react";

interface AcademicOverviewCardProps {
  darkMode?: boolean;
}

export function AcademicOverviewCard({ darkMode = false }: AcademicOverviewCardProps) {
  const cgpa = 8.7;
  const credits = 142;
  const totalCredits = 160;
  const currentSemesterCredits = 18;
  const progressPercentage = 89;

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
      <div className="flex items-center gap-2 mb-6">
        <GraduationCap className="w-5 h-5" style={{ color: accentColor }} />
        <h3 
          style={{ 
            color: accentColor,
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Academic Overview
        </h3>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* CGPA */}
        <div>
          <p 
            className="mb-1"
            style={{ 
              color: textSecondary,
              fontSize: '14px'
            }}
          >
            CGPA
          </p>
          <p 
            style={{ 
              color: textPrimary,
              fontSize: '36px',
              fontWeight: '700'
            }}
          >
            {cgpa}
          </p>
        </div>

        {/* Credits */}
        <div>
          <p 
            className="mb-1"
            style={{ 
              color: textSecondary,
              fontSize: '14px'
            }}
          >
            Credits
          </p>
          <p 
            style={{ 
              color: textPrimary,
              fontSize: '36px',
              fontWeight: '700'
            }}
          >
            {credits}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between mb-2">
          <p 
            style={{ 
              color: textSecondary,
              fontSize: '14px'
            }}
          >
            Progress
          </p>
          <p 
            style={{ 
              color: accentColor,
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            {progressPercentage}%
          </p>
        </div>
        <div 
          className="w-full h-2 rounded-full overflow-hidden"
          style={{ backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.5)' : 'rgba(201, 161, 63, 0.2)' }}
        >
          <div 
            className="h-full rounded-full transition-all"
            style={{ 
              backgroundColor: accentColor,
              width: `${progressPercentage}%`
            }}
          />
        </div>
      </div>

      {/* Additional Info */}
      <p 
        style={{ 
          color: textSecondary,
          fontSize: '12px'
        }}
      >
        {totalCredits - credits} / {totalCredits} credits completed
      </p>
      <p 
        className="mt-1"
        style={{ 
          color: textPrimary,
          fontSize: '12px'
        }}
      >
        Current Semester: {currentSemesterCredits} credits
      </p>
    </div>
  );
}
