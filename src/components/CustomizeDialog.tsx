import { Settings, Eye, EyeOff } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Switch } from "./ui/switch";

interface Widget {
  id: string;
  name: string;
  visible: boolean;
}

interface CustomizeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  widgets: Widget[];
  onToggleWidget: (id: string) => void;
}

export function CustomizeDialog({ open, onOpenChange, widgets, onToggleWidget }: CustomizeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-[500px]"
        style={{ 
          backgroundColor: '#12254A',
          border: '1px solid #1E3263'
        }}
      >
        <DialogHeader>
          <DialogTitle 
            className="flex items-center gap-2"
            style={{ color: '#C9A13F' }}
          >
            <Settings className="w-5 h-5" />
            Customize Dashboard
          </DialogTitle>
          <DialogDescription style={{ color: '#B0B6C2' }}>
            Toggle widgets to personalize your dashboard view
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          {widgets.map((widget) => (
            <div 
              key={widget.id}
              className="flex items-center justify-between p-4 rounded-lg"
              style={{ 
                backgroundColor: 'rgba(30, 50, 99, 0.3)'
              }}
            >
              <div className="flex items-center gap-3">
                {widget.visible ? (
                  <Eye className="w-5 h-5" style={{ color: '#C9A13F' }} />
                ) : (
                  <EyeOff className="w-5 h-5" style={{ color: '#B0B6C2' }} />
                )}
                <span style={{ color: '#FFFFFF', fontSize: '14px' }}>
                  {widget.name}
                </span>
              </div>
              <Switch
                checked={widget.visible}
                onCheckedChange={() => onToggleWidget(widget.id)}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex gap-3">
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 py-2 rounded-lg hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: '#1E3263',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '600'
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => onOpenChange(false)}
            className="flex-1 py-2 rounded-lg hover:opacity-90 transition-opacity"
            style={{ 
              backgroundColor: '#C9A13F',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: '700'
            }}
          >
            Save Changes
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
