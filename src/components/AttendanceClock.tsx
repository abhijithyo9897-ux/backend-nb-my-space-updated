import React, { useState, useEffect } from 'react';
import { Globe, Fingerprint, LogIn, LogOut, Verified } from 'lucide-react';
import './AttendanceClock.css';

const AttendanceClock: React.FC = () => {
  const [time, setTime] = useState(new Date());
  const [attendanceState, setAttendanceState] = useState<'idle' | 'scanning' | 'clocked-in' | 'clocked-out'>('idle');

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScan = (type: 'in' | 'out') => {
    setAttendanceState('scanning');
    setTimeout(() => {
      setAttendanceState(type === 'in' ? 'clocked-in' : 'clocked-out');
    }, 2000);
  };

  const getWorldTime = (timeZone: string) => {
    return time.toLocaleTimeString('en-US', { timeZone, hour: '2-digit', minute: '2-digit', hour12: false });
  };

  return (
    <div className="attendance-container">
      <div className="world-clocks glass-panel">
        <div className="clock-header">
          <Globe size={20} className="text-primary" />
          <h3>Global Workforce Sync</h3>
        </div>
        <div className="timezone-grid">
          <div className="tz-item">
            <span className="tz-label">New York (EST)</span>
            <span className="tz-time">{getWorldTime('America/New_York')}</span>
          </div>
          <div className="tz-item">
            <span className="tz-label">London (GMT)</span>
            <span className="tz-time">{getWorldTime('Europe/London')}</span>
          </div>
          <div className="tz-item active">
            <span className="tz-label">India (IST)</span>
            <span className="tz-time text-gradient">{getWorldTime('Asia/Kolkata')}</span>
          </div>
          <div className="tz-item">
            <span className="tz-label">Tokyo (JST)</span>
            <span className="tz-time">{getWorldTime('Asia/Tokyo')}</span>
          </div>
        </div>
      </div>

      <div className="attendance-action-area">
        <div className="biometric-panel glass-panel">
          <h3>Tier 3/4 Biometric Gateway</h3>
          <div className={`scanner-visual ${attendanceState}`}>
            {attendanceState === 'idle' && <Fingerprint size={80} className="text-muted" />}
            {attendanceState === 'scanning' && <Fingerprint size={80} className="text-primary animate-pulse-glow" />}
            {(attendanceState === 'clocked-in' || attendanceState === 'clocked-out') && <Verified size={80} className="text-success" />}
            <div className="scan-line"></div>
          </div>
          <p className="scanner-status">
            {attendanceState === 'idle' && 'Awaiting Biometric Affirmation'}
            {attendanceState === 'scanning' && 'Verifying Quantum Key...'}
            {attendanceState === 'clocked-in' && 'Time IN Logged Successfully'}
            {attendanceState === 'clocked-out' && 'Time OUT Logged Successfully'}
          </p>

          <div className="action-buttons">
            <button 
              className="btn-primary" 
              onClick={() => handleScan('in')}
              disabled={attendanceState === 'scanning'}
            >
              <LogIn size={18} /> Time IN
            </button>
            <button 
              className="btn-glass" 
              onClick={() => handleScan('out')}
              disabled={attendanceState === 'scanning'}
            >
              <LogOut size={18} /> Time OUT
            </button>
          </div>
        </div>

        <div className="shift-info glass-panel">
          <h3>Current Shift Details</h3>
          <ul className="shift-details-list">
            <li>
              <span>Assigned Tier</span>
              <strong>Tier 3 (Factory Hourly)</strong>
            </li>
            <li>
              <span>Shift Window</span>
              <strong>09:00 - 17:00 IST</strong>
            </li>
            <li>
              <span>Logged Hours Today</span>
              <strong>0.0 hrs</strong>
            </li>
            <li>
              <span>Tolerance</span>
              <strong>±5 Minutes</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AttendanceClock;
