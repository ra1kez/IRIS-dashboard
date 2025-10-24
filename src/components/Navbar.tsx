import { Bell, Moon, Sun, User, ChevronDown, Settings, LogOut } from "lucide-react";
import { useState } from "react";
import irisLogo from "figma:asset/49ba29c6629ecad74fc79e5e5def55864f80e9ee.png";

interface NavbarProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
  notificationCount?: number;
  onNotificationsClick: () => void;
  onSearch?: (query: string) => void;
}

export function Navbar({ darkMode, onToggleDarkMode, notificationCount = 3, onNotificationsClick, onSearch }: NavbarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const dropdowns = [
    {
      name: "Institute",
      items: ["About NITK", "Administration", "Campus Map", "Contact Us"]
    },
    {
      name: "Academics",
      items: ["Departments", "Courses", "Research", "Faculty", "Academic Calendar"]
    },
    {
      name: "Campus",
      items: ["Facilities", "Hostels", "Sports", "Library", "Canteens"]
    },
    {
      name: "Alumni",
      items: ["Alumni Portal", "Events", "Achievements", "Connect"]
    }
  ];

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center justify-between px-10"
      style={{ 
        backgroundColor: '#0B1C3C',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.125)'
      }}
    >
      {/* Left Section - Logo & Dropdowns */}
      <div className="flex items-center gap-6">
        <img 
          src={irisLogo}
          alt="IRIS Logo"
          className="h-10"
          style={{ objectFit: 'contain' }}
        />
        
        {/* Dropdown Menus */}
        <div className="flex items-center gap-4">
          {dropdowns.map((dropdown) => (
            <div 
              key={dropdown.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(dropdown.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                className="flex items-center gap-1 px-3 py-2 rounded transition-colors hover:bg-opacity-20"
                style={{
                  color: '#FFFFFF',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                {dropdown.name}
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              {activeDropdown === dropdown.name && (
                <div 
                  className="absolute top-full left-0 mt-1 rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: '#12254A',
                    minWidth: '200px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {dropdown.items.map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full text-left px-4 py-2.5 transition-colors hover:bg-opacity-50"
                      style={{
                        color: '#B0B6C2',
                        fontSize: '13px',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(201, 161, 63, 0.2)';
                        e.currentTarget.style.color = '#FFFFFF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#B0B6C2';
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Right Section - Icons & Profile */}
      <div className="flex items-center gap-5">
        {/* Dark Mode Toggle */}
        <button
          onClick={onToggleDarkMode}
          className="relative w-12 h-6 rounded-full transition-colors"
          style={{ 
            backgroundColor: darkMode ? '#C9A13F' : '#12254A'
          }}
        >
          <div 
            className="absolute top-1 transition-all"
            style={{
              left: darkMode ? 'calc(100% - 22px)' : '4px',
            }}
          >
            {darkMode ? (
              <Moon className="w-4 h-4" style={{ color: '#0B1C3C' }} />
            ) : (
              <Sun className="w-4 h-4" style={{ color: '#C9A13F' }} />
            )}
          </div>
        </button>

        {/* Notification Bell */}
        <button className="relative" onClick={onNotificationsClick}>
          <Bell 
            className="w-6 h-6"
            style={{ color: '#FFFFFF' }}
          />
          {notificationCount > 0 && (
            <span 
              className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ 
                backgroundColor: '#E06F6F',
                color: '#FFFFFF',
                fontSize: '11px',
                fontWeight: '600'
              }}
            >
              {notificationCount}
            </span>
          )}
        </button>

        {/* Profile Dropdown */}
        <div 
          className="relative"
          onMouseEnter={() => setProfileDropdownOpen(true)}
          onMouseLeave={() => setProfileDropdownOpen(false)}
        >
          <button 
            className="flex items-center gap-3"
          >
            {/* Avatar Circle */}
            <div 
              className="rounded-full flex items-center justify-center"
              style={{ 
                width: '40px',
                height: '40px',
                backgroundColor: '#C9A77D',
                color: '#FFFFFF',
                fontSize: '14px',
                fontWeight: '600'
              }}
            >
              AJ
            </div>
            
            {/* Name and ID */}
            <div className="flex flex-col items-start">
              <span style={{ color: '#FFFFFF', fontSize: '14px', fontWeight: '500' }}>
                Alex Johnson
              </span>
              <span style={{ color: '#B0B6C2', fontSize: '12px' }}>
                CS2021001
              </span>
            </div>
            
            {/* Chevron */}
            <ChevronDown 
              className="w-4 h-4"
              style={{ color: '#FFFFFF' }}
            />
          </button>
          
          {/* Profile Dropdown Menu */}
          {profileDropdownOpen && (
            <div 
              className="absolute top-full right-0 mt-2 rounded-lg overflow-hidden"
              style={{
                backgroundColor: '#FFF9E6',
                minWidth: '200px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(201, 161, 63, 0.2)'
              }}
            >
              <button
                className="w-full text-left px-4 py-3 transition-colors flex items-center gap-3"
                style={{
                  color: '#0B1C3C',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid rgba(201, 161, 63, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 161, 63, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <User className="w-4 h-4" />
                View Profile
              </button>
              
              <button
                className="w-full text-left px-4 py-3 transition-colors flex items-center gap-3"
                style={{
                  color: '#0B1C3C',
                  fontSize: '14px',
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid rgba(201, 161, 63, 0.15)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 161, 63, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
              
              <button
                className="w-full text-left px-4 py-3 transition-colors flex items-center gap-3"
                style={{
                  color: '#C9413F',
                  fontSize: '14px',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(201, 161, 63, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
