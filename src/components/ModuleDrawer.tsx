import { ExternalLink, Info, FileText, Globe, FileCheck, LogIn, ChevronLeft, ChevronRight } from "lucide-react";

interface ModuleDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function ModuleDrawer({ isOpen, onToggle }: ModuleDrawerProps) {
  const links = [
    { label: "About IRIS", icon: Info },
    { label: "IRIS Blog", icon: FileText },
    { label: "NITK Website", icon: Globe },
    { label: "Terms of Service", icon: FileCheck },
    { label: "Login to Moodle", icon: LogIn },
  ];

  return (
    <>
      {/* Drawer */}
      <div 
        className="fixed left-0 top-20 bottom-0 z-40 transition-transform duration-300 ease-in-out overflow-y-auto"
        style={{ 
          backgroundColor: '#12254A',
          width: '280px',
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          boxShadow: isOpen ? '4px 0 12px rgba(0, 0, 0, 0.2)' : 'none'
        }}
      >
        <div className="p-5">
          <h3 
            className="mb-6"
            style={{ 
              color: '#C9A13F',
              fontSize: '16px',
              fontWeight: '600'
            }}
          >
            Quick Links
          </h3>
          
          <div className="space-y-3">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <button
                  key={index}
                  className="w-full flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-opacity-50"
                  style={{ 
                    backgroundColor: 'rgba(30, 50, 99, 0.3)'
                  }}
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
      </div>

      {/* Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed top-24 z-50 px-3 py-2 rounded-r-lg transition-all duration-300 ease-in-out flex items-center gap-2 hover:opacity-90"
        style={{ 
          left: isOpen ? '280px' : '0',
          backgroundColor: '#12254A',
          color: '#C9A13F',
          fontSize: '12px',
          fontWeight: '600',
          boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.2)'
        }}
      >
        {isOpen ? (
          <>
            <ChevronLeft className="w-4 h-4" />
            Close Module Menu
          </>
        ) : (
          <>
            <ChevronRight className="w-4 h-4" />
            Show Module Menu
          </>
        )}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={onToggle}
          style={{ top: '80px' }}
        />
      )}
    </>
  );
}
