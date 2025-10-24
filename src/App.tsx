import { useState } from "react";
import { Settings } from "lucide-react";
import { Navbar } from "./components/Navbar";
import { QuickActionsCard } from "./components/QuickActionsCard";
import { TodaySnapshotCard } from "./components/TodaySnapshotCard";
import { CoursesAttendanceCard } from "./components/CoursesAttendanceCard";
import { CalendarCard } from "./components/CalendarCard";
import { CustomizeDialog } from "./components/CustomizeDialog";
import { ModuleDrawer } from "./components/ModuleDrawer";
import { AnnouncementsBanner } from "./components/AnnouncementsBanner";
import { AcademicOverviewCard } from "./components/AcademicOverviewCard";
import { NotificationsPanel } from "./components/NotificationsPanel";
import { SearchBar } from "./components/SearchBar";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [customizeDialogOpen, setCustomizeDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [widgets, setWidgets] = useState([
    { id: "announcements", name: "Announcements Banner", visible: true },
    { id: "academic-stats", name: "Academic Overview", visible: true },
    { id: "calendar", name: "Academic Calendar", visible: true },
    { id: "courses-attendance", name: "Current Courses & Attendance", visible: true },
  ]);

  const toggleWidget = (id: string) => {
    setWidgets(widgets.map(w => 
      w.id === id ? { ...w, visible: !w.visible } : w
    ));
  };

  const isWidgetVisible = (id: string) => {
    return widgets.find(w => w.id === id)?.visible ?? true;
  };

  const bgColor = darkMode ? '#0B1C3C' : '#FFF9E6';

  return (
    <div 
      className="min-h-screen"
      style={{ backgroundColor: bgColor }}
    >
      <Navbar 
        darkMode={darkMode} 
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        notificationCount={3}
        onNotificationsClick={() => setNotificationsOpen(!notificationsOpen)}
        onSearch={setSearchQuery}
      />

      <NotificationsPanel
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        darkMode={darkMode}
      />
      
      {/* Module Drawer */}
      <ModuleDrawer isOpen={drawerOpen} onToggle={() => setDrawerOpen(!drawerOpen)} />
      
      {/* Main Container - Adjusts based on drawer state */}
      <div 
        className="pt-20 px-10 pb-10 transition-all duration-300 ease-in-out"
        style={{ 
          marginLeft: drawerOpen ? '280px' : '0'
        }}
      >
        <div 
          className="max-w-[1400px] mx-auto mt-6"
        >
          {/* Search Bar - Full width */}
          <div className="mb-6">
            <SearchBar darkMode={darkMode} onSearch={setSearchQuery} />
          </div>

          {/* Announcements Banner - Full width */}
          {isWidgetVisible("announcements") && (
            <div className="mb-6">
              <AnnouncementsBanner darkMode={darkMode} />
            </div>
          )}
          
          {/* Three Column Layout - Top Row */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Academic Overview */}
            {isWidgetVisible("academic-stats") && (
              <div>
                <AcademicOverviewCard darkMode={darkMode} />
              </div>
            )}

            {/* Academic Calendar */}
            {isWidgetVisible("calendar") && (
              <div>
                <CalendarCard darkMode={darkMode} />
              </div>
            )}

            {/* Current Courses & Attendance */}
            {isWidgetVisible("courses-attendance") && (
              <div>
                <CoursesAttendanceCard darkMode={darkMode} />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Customize Button - Fixed Bottom Right */}
      <button
        onClick={() => setCustomizeDialogOpen(true)}
        className="fixed bottom-6 right-6 px-5 py-3 rounded-lg flex items-center gap-2 transition-all hover:scale-105"
        style={{ 
          backgroundColor: darkMode ? 'transparent' : '#FFFFFF',
          border: '2px solid #C9A13F',
          color: '#C9A13F',
          fontSize: '14px',
          fontWeight: '700',
          boxShadow: darkMode ? '0 4px 12px rgba(201, 161, 63, 0.3)' : '0 4px 12px rgba(201, 161, 63, 0.4)'
        }}
      >
        <Settings className="w-4 h-4" />
        Customize Dashboard
      </button>

      {/* Customize Dialog */}
      <CustomizeDialog
        open={customizeDialogOpen}
        onOpenChange={setCustomizeDialogOpen}
        widgets={widgets}
        onToggleWidget={toggleWidget}
      />
    </div>
  );
}
