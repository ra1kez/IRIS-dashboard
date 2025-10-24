import { BookOpen, TrendingUp } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useState } from "react";
import { AttendanceDetailsModal } from "./AttendanceDetailsModal";

interface CoursesAttendanceCardProps {
  darkMode?: boolean;
}

export function CoursesAttendanceCard({ darkMode = false }: CoursesAttendanceCardProps) {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cgpaData = [
    { name: "Achieved", value: 7.9 },
    { name: "Remaining", value: 2.1 }
  ];

  const courses = [
    { 
      code: "EC301", 
      name: "Digital Communication", 
      grade: "A", 
      credits: 4,
      attendance: 88,
      classes: { attended: 22, total: 25 }
    },
    { 
      code: "EC302", 
      name: "Signals & Systems", 
      grade: "A-", 
      credits: 4,
      attendance: 84,
      classes: { attended: 21, total: 25 }
    },
    { 
      code: "EC303", 
      name: "Control Systems", 
      grade: "B+", 
      credits: 3,
      attendance: 76,
      classes: { attended: 19, total: 25 }
    },
    { 
      code: "EC304", 
      name: "Electromagnetic Theory", 
      grade: "A", 
      credits: 4,
      attendance: 92,
      classes: { attended: 23, total: 25 }
    },
    { 
      code: "EC305", 
      name: "Analog Circuits", 
      grade: "A-", 
      credits: 3,
      attendance: 80,
      classes: { attended: 20, total: 25 }
    },
  ];

  const getAttendanceColor = (attendance: number) => {
    if (attendance >= 85) return '#5EB1FF'; // Blue - Good
    if (attendance >= 75) return '#C9A13F'; // Gold - Warning
    return '#E06F6F'; // Red - Critical
  };

  const cardBg = darkMode ? '#12254A' : '#FFFFFF';
  const accentColor = '#C9A13F';
  const textPrimary = darkMode ? '#FFFFFF' : '#0B1C3C';
  const textSecondary = darkMode ? '#B0B6C2' : '#5A6C8F';

  const handleAttendanceClick = (course: any) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  return (
    <>
      <div 
        className="p-5 rounded-2xl"
        style={{ 
          backgroundColor: cardBg,
          width: '100%'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" style={{ color: accentColor }} />
            <h3 
              style={{ 
                color: accentColor,
                fontSize: '16px',
                fontWeight: '600'
              }}
            >
              Current Courses
            </h3>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p style={{ color: textSecondary, fontSize: '11px' }}>Avg Attendance</p>
              <p style={{ color: textPrimary, fontSize: '16px', fontWeight: '700' }}>84%</p>
            </div>
          </div>
        </div>

        {/* Course List Header */}
        <div 
          className="grid grid-cols-12 gap-2 pb-2 mb-3"
          style={{ 
            borderBottom: darkMode ? '1px solid rgba(30, 50, 99, 0.5)' : '1px solid rgba(201, 161, 63, 0.2)'
          }}
        >
          <span 
            className="col-span-2"
            style={{ 
              color: textSecondary,
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            CODE
          </span>
          <span 
            className="col-span-4"
            style={{ 
              color: textSecondary,
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            COURSE NAME
          </span>
          <span 
            className="col-span-4 text-center"
            style={{ 
              color: textSecondary,
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            ATTENDANCE
          </span>
          <span 
            className="col-span-2 text-center"
            style={{ 
              color: textSecondary,
              fontSize: '11px',
              fontWeight: '600'
            }}
          >
            GRADE
          </span>
        </div>
        
        {/* Course List */}
        <div className="space-y-2 max-h-[350px] overflow-y-auto pr-1" style={{
          scrollbarWidth: 'thin',
          scrollbarColor: `${accentColor} transparent`
        }}>
          {courses.map((course, index) => (
            <div 
              key={index}
              className="grid grid-cols-12 gap-2 p-2.5 rounded-lg hover:bg-opacity-70 transition-all items-center"
              style={{ 
                backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.25)' : 'rgba(201, 161, 63, 0.1)'
              }}
            >
              <span 
                className="col-span-2"
                style={{ 
                  color: accentColor,
                  fontSize: '12px',
                  fontWeight: '700'
                }}
              >
                {course.code}
              </span>
              <span 
                className="col-span-4"
                style={{ 
                  color: textPrimary,
                  fontSize: '12px'
                }}
              >
                {course.name}
              </span>
              <button 
                onClick={() => handleAttendanceClick(course)}
                className="col-span-4 flex items-center justify-center gap-2 hover:opacity-80 transition-opacity cursor-pointer py-1"
              >
                <div 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ 
                    backgroundColor: getAttendanceColor(course.attendance)
                  }}
                />
                <span 
                  style={{ 
                    color: textPrimary,
                    fontSize: '13px',
                    fontWeight: '600'
                  }}
                >
                  {course.attendance}%
                </span>
                <span 
                  style={{ 
                    color: textSecondary,
                    fontSize: '10px'
                  }}
                >
                  ({course.classes.attended}/{course.classes.total})
                </span>
              </button>
              <div className="col-span-2 flex justify-center">
                <span 
                  className="px-3 py-1 rounded"
                  style={{ 
                    backgroundColor: accentColor,
                    color: '#FFFFFF',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}
                >
                  {course.grade}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    <AttendanceDetailsModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      course={selectedCourse}
      darkMode={darkMode}
    />
  </>
  );
}
