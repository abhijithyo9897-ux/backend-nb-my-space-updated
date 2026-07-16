import React from 'react';
import { LayoutDashboard, Timer, Briefcase, CalendarClock, Clock } from 'lucide-react';
import './Sidebar.css';

export type TabType = 'dashboard' | 'timer' | 'jobs' | 'meets' | 'attendance';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const navItems: { id: TabType; label: string; icon: React.ReactNode }[] = [
    { id: 'dashboard', label: 'CEO Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'timer', label: 'Timer Hub', icon: <Timer size={20} /> },
    { id: 'attendance', label: 'Attendance Clock', icon: <Clock size={20} /> },
    { id: 'jobs', label: 'Job Stencil', icon: <Briefcase size={20} /> },
    { id: 'meets', label: 'Next Big Meets', icon: <CalendarClock size={20} /> },
  ];

  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-logo">
        <div className="logo-icon animate-pulse-glow">
          BNB
        </div>
        <h2>My Space Diary</h2>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      
      <div className="sidebar-footer">
        <div className="trust-score">
          <span>Trust Score</span>
          <div className="score-bar">
            <div className="score-fill" style={{ width: '92%' }}></div>
          </div>
          <span className="score-value">92%</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
