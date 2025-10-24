import { DollarSign, CheckCircle, AlertCircle } from "lucide-react";

interface FeeStatusCardProps {
  hasPendingDues?: boolean;
  pendingAmount?: number;
}

export function FeeStatusCard({ hasPendingDues = false, pendingAmount = 2300 }: FeeStatusCardProps) {
  return (
    <div 
      className="p-5 rounded-2xl"
      style={{ 
        backgroundColor: '#12254A',
        width: '100%'
      }}
    >
      <div className="flex items-center gap-2 mb-4">
        <DollarSign className="w-5 h-5" style={{ color: '#C9A13F' }} />
        <h3 
          style={{ 
            color: '#C9A13F',
            fontSize: '16px',
            fontWeight: '600'
          }}
        >
          Fee Status
        </h3>
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          {hasPendingDues ? (
            <>
              <p 
                className="mb-2"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '24px',
                  fontWeight: '700'
                }}
              >
                ₹{pendingAmount.toLocaleString()}
              </p>
              <p 
                style={{ 
                  color: '#E06F6F',
                  fontSize: '14px'
                }}
              >
                Pending dues
              </p>
              <p 
                className="mt-1"
                style={{ 
                  color: '#B0B6C2',
                  fontSize: '12px'
                }}
              >
                Due date: Nov 30, 2025
              </p>
            </>
          ) : (
            <>
              <p 
                className="mb-2"
                style={{ 
                  color: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '600'
                }}
              >
                No pending dues
              </p>
              <p 
                style={{ 
                  color: '#B0B6C2',
                  fontSize: '14px'
                }}
              >
                All fees cleared
              </p>
            </>
          )}
        </div>
        
        {hasPendingDues ? (
          <AlertCircle 
            className="w-12 h-12"
            style={{ color: '#E06F6F' }}
          />
        ) : (
          <CheckCircle 
            className="w-12 h-12"
            style={{ color: '#C9A13F' }}
          />
        )}
      </div>
      
      {hasPendingDues && (
        <button
          className="w-full mt-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
          style={{ 
            backgroundColor: '#C9A13F',
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: '700'
          }}
        >
          Pay Now
        </button>
      )}
    </div>
  );
}
