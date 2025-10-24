import { X, TrendingUp, AlertCircle } from "lucide-react";

interface AttendanceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  course: {
    code: string;
    name: string;
    attendance: number;
    classes: { attended: number; total: number };
  } | null;
  darkMode?: boolean;
}

export function AttendanceDetailsModal({ isOpen, onClose, course, darkMode = false }: AttendanceDetailsModalProps) {
  if (!isOpen || !course) return null;

  const cardBg = darkMode ? '#12254A' : '#FFFFFF';
  const accentColor = '#C9A13F';
  const textPrimary = darkMode ? '#FFFFFF' : '#0B1C3C';
  const textSecondary = darkMode ? '#B0B6C2' : '#5A6C8F';

  // Calculate leaves remaining for 75% attendance
  const targetAttendance = 75;
  const totalClasses = course.classes.total;
  const attendedClasses = course.classes.attended;
  const currentAttendance = course.attendance;

  // Formula: (attended / (total + future_classes)) >= 0.75
  // To find max leaves: (attended / (total + leaves)) = 0.75
  // attended = 0.75 * (total + leaves)
  // attended = 0.75*total + 0.75*leaves
  // leaves = (attended - 0.75*total) / 0.75

  const maxLeaves = Math.floor((attendedClasses - (targetAttendance / 100) * totalClasses) / (targetAttendance / 100));
  const leavesRemaining = maxLeaves > 0 ? maxLeaves : 0;

  // Calculate classes needed to reach 75% if below
  let classesNeeded = 0;
  if (currentAttendance < targetAttendance) {
    // Formula: (attended + classes_needed) / (total + classes_needed) >= 0.75
    // attended + classes_needed >= 0.75 * (total + classes_needed)
    // attended + classes_needed >= 0.75*total + 0.75*classes_needed
    // 0.25*classes_needed >= 0.75*total - attended
    // classes_needed = (0.75*total - attended) / 0.25
    classesNeeded = Math.ceil(((targetAttendance / 100) * totalClasses - attendedClasses) / (1 - targetAttendance / 100));
  }

  const getStatusColor = () => {
    if (currentAttendance >= 85) return '#5EB1FF';
    if (currentAttendance >= 75) return '#C9A13F';
    return '#E06F6F';
  };

  const getStatusMessage = () => {
    if (currentAttendance >= 85) return 'Excellent attendance! Keep it up.';
    if (currentAttendance >= 75) return 'Good attendance. Stay consistent.';
    return 'Warning: Below 75% threshold!';
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Modal */}
        <div 
          className="w-[500px] rounded-2xl p-6 relative"
          style={{ 
            backgroundColor: cardBg,
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:opacity-70 transition-opacity rounded-full"
            style={{ 
              backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.5)' : 'rgba(201, 161, 63, 0.15)'
            }}
          >
            <X className="w-5 h-5" style={{ color: textPrimary }} />
          </button>

          {/* Header */}
          <div className="mb-6">
            <h2 
              className="mb-1"
              style={{ 
                color: textPrimary,
                fontSize: '20px',
                fontWeight: '600'
              }}
            >
              {course.code} - Attendance Details
            </h2>
            <p 
              style={{ 
                color: textSecondary,
                fontSize: '14px'
              }}
            >
              {course.name}
            </p>
          </div>

          {/* Current Status */}
          <div 
            className="p-4 rounded-lg mb-6"
            style={{ 
              backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.3)' : 'rgba(201, 161, 63, 0.1)',
              borderLeft: `4px solid ${getStatusColor()}`
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span 
                style={{ 
                  color: textSecondary,
                  fontSize: '13px'
                }}
              >
                Current Attendance
              </span>
              <div 
                className="w-3 h-3 rounded-full"
                style={{ 
                  backgroundColor: getStatusColor()
                }}
              />
            </div>
            <div 
              className="mb-2"
              style={{ 
                color: textPrimary,
                fontSize: '32px',
                fontWeight: '700'
              }}
            >
              {currentAttendance}%
            </div>
            <p 
              style={{ 
                color: textSecondary,
                fontSize: '13px'
              }}
            >
              {course.classes.attended} out of {course.classes.total} classes attended
            </p>
            <p 
              className="mt-2"
              style={{ 
                color: getStatusColor(),
                fontSize: '13px',
                fontWeight: '600'
              }}
            >
              {getStatusMessage()}
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div 
              className="p-4 rounded-lg"
              style={{ 
                backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.3)' : 'rgba(201, 161, 63, 0.1)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4" style={{ color: accentColor }} />
                <span 
                  style={{ 
                    color: textSecondary,
                    fontSize: '12px'
                  }}
                >
                  Classes Attended
                </span>
              </div>
              <div 
                style={{ 
                  color: textPrimary,
                  fontSize: '24px',
                  fontWeight: '700'
                }}
              >
                {course.classes.attended}
              </div>
            </div>

            <div 
              className="p-4 rounded-lg"
              style={{ 
                backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.3)' : 'rgba(201, 161, 63, 0.1)'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4" style={{ color: '#E06F6F' }} />
                <span 
                  style={{ 
                    color: textSecondary,
                    fontSize: '12px'
                  }}
                >
                  Classes Missed
                </span>
              </div>
              <div 
                style={{ 
                  color: textPrimary,
                  fontSize: '24px',
                  fontWeight: '700'
                }}
              >
                {course.classes.total - course.classes.attended}
              </div>
            </div>
          </div>

          {/* Leaves Analysis */}
          <div 
            className="p-4 rounded-lg"
            style={{ 
              backgroundColor: currentAttendance >= 75 ? 'rgba(94, 177, 255, 0.1)' : 'rgba(224, 111, 111, 0.1)',
              border: `1px solid ${currentAttendance >= 75 ? '#5EB1FF' : '#E06F6F'}`
            }}
          >
            {currentAttendance >= targetAttendance ? (
              <>
                <h3 
                  className="mb-2"
                  style={{ 
                    color: textPrimary,
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  📊 Leaves Available
                </h3>
                <p 
                  className="mb-3"
                  style={{ 
                    color: textSecondary,
                    fontSize: '13px',
                    lineHeight: '1.5'
                  }}
                >
                  You can miss up to <span style={{ color: '#5EB1FF', fontWeight: '600' }}>{leavesRemaining} more {leavesRemaining === 1 ? 'class' : 'classes'}</span> and still maintain 75% attendance.
                </p>
                <div 
                  className="p-3 rounded"
                  style={{ 
                    backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.3)' : 'rgba(201, 161, 63, 0.1)'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span 
                      style={{ 
                        color: textSecondary,
                        fontSize: '12px'
                      }}
                    >
                      Safe zone buffer
                    </span>
                    <span 
                      style={{ 
                        color: '#5EB1FF',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      {leavesRemaining} {leavesRemaining === 1 ? 'class' : 'classes'}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 
                  className="mb-2"
                  style={{ 
                    color: textPrimary,
                    fontSize: '15px',
                    fontWeight: '600'
                  }}
                >
                  ⚠️ Attendance Alert
                </h3>
                <p 
                  className="mb-3"
                  style={{ 
                    color: textSecondary,
                    fontSize: '13px',
                    lineHeight: '1.5'
                  }}
                >
                  You need to attend <span style={{ color: '#E06F6F', fontWeight: '600' }}>{classesNeeded} more consecutive {classesNeeded === 1 ? 'class' : 'classes'}</span> to reach 75% attendance.
                </p>
                <div 
                  className="p-3 rounded"
                  style={{ 
                    backgroundColor: darkMode ? 'rgba(30, 50, 99, 0.3)' : 'rgba(201, 161, 63, 0.1)'
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span 
                      style={{ 
                        color: textSecondary,
                        fontSize: '12px'
                      }}
                    >
                      Classes required
                    </span>
                    <span 
                      style={{ 
                        color: '#E06F6F',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      {classesNeeded} {classesNeeded === 1 ? 'class' : 'classes'}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Target Info */}
          <div 
            className="mt-4 p-3 rounded text-center"
            style={{ 
              backgroundColor: 'rgba(201, 161, 63, 0.1)'
            }}
          >
            <span 
              style={{ 
                color: textSecondary,
                fontSize: '12px'
              }}
            >
              Minimum required attendance: <span style={{ color: accentColor, fontWeight: '600' }}>75%</span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
