import { useState } from 'react';
import './App.css';
import Sidebar, { type TabType } from './components/Sidebar';
import TimerHub from './components/TimerHub';
import Dashboard from './components/Dashboard';
import JobAllocation from './components/JobAllocation';
import NextBigMeets from './components/NextBigMeets';
import AttendanceClock from './components/AttendanceClock';
import SOPEngine from './components/SOPEngine';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <header className="top-header glass-panel">
          <div className="header-info">
            <h1 className="text-gradient">Bharat Next Big CEO</h1>
            <span className="status-badge">System Online <div className="pulse-dot"></div></span>
          </div>
          <div className="user-profile">
            <div className="avatar">A</div>
            <span>Admin Node</span>
          </div>
        </header>
        
        <div className="content-area">
          {activeTab === 'dashboard' && <Dashboard />}
          {activeTab === 'timer' && <TimerHub />}
          {activeTab === 'jobs' && <JobAllocation />}
          {activeTab === 'meets' && <NextBigMeets />}
          {activeTab === 'attendance' && <AttendanceClock />}
          {activeTab === 'sop' && <SOPEngine />}
        </div>
      </main>
    </div>
  );
}

export default App;
