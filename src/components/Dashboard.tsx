import React, { useEffect, useState } from 'react';
import { Users, UserCheck, UserX, CheckCircle, Clock, CalendarDays, AlertTriangle } from 'lucide-react';
import { apiClient } from '../services/api';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [ceoStatus, setCeoStatus] = useState<any>(null);

  useEffect(() => {
    apiClient.getStatus('ceo-admin').then(res => {
      if (res?.data) {
        setCeoStatus(res.data);
      }
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="metrics-grid">
        <div className="metric-card glass-panel">
          <div className="metric-icon primary">
            <Users size={24} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Total Staff</span>
            <span className="metric-value">1,492</span>
          </div>
        </div>
        
        <div className="metric-card glass-panel">
          <div className="metric-icon success">
            <UserCheck size={24} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Present Today</span>
            <span className="metric-value">1,385</span>
          </div>
        </div>

        <div className="metric-card glass-panel">
          <div className="metric-icon warning">
            <UserX size={24} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Absent / Leave</span>
            <span className="metric-value">107</span>
          </div>
        </div>

        <div className="metric-card glass-panel">
          <div className="metric-icon secondary">
            <CheckCircle size={24} />
          </div>
          <div className="metric-info">
            <span className="metric-label">Tasks Completed</span>
            <span className="metric-value">{ceoStatus?.tasks?.length || 0}</span>
          </div>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="glass-panel dashboard-section calendar-section">
          <div className="section-header">
            <h3><CalendarDays size={20} /> Master Calendar (July 2026)</h3>
            <button className="btn-glass">Sync Schedule</button>
          </div>
          
          <div className="calendar-events">
            <div className="event-item">
              <div className="event-date payday">
                <span>07</span>
                <small>JUL</small>
              </div>
              <div className="event-details">
                <h4>Tier 1 & 2 Base Payout</h4>
                <p>Automated salary dispatch for standard employees.</p>
              </div>
              <span className="event-status completed">Completed</span>
            </div>

            <div className="event-item">
              <div className="event-date holiday">
                <span>15</span>
                <small>JUL</small>
              </div>
              <div className="event-details">
                <h4>Mandatory Maun (Silence) Day</h4>
                <p>Fallow Phase - All tokens & alerts paused for restoration.</p>
              </div>
              <span className="event-status pending">Pending</span>
            </div>

            <div className="event-item">
              <div className="event-date payday">
                <span>22</span>
                <small>JUL</small>
              </div>
              <div className="event-details">
                <h4>Tier 2 & 3 Advance / OT Payout</h4>
                <p>Secondary cycle for factory hourly logs.</p>
              </div>
              <span className="event-status pending">Pending</span>
            </div>
          </div>
        </div>

        <div className="glass-panel dashboard-section system-alerts">
          <div className="section-header">
            <h3><AlertTriangle size={20} /> Live System Alerts</h3>
          </div>
          
          <div className="alerts-list">
            <div className="alert-item warning">
              <div className="alert-icon">!</div>
              <div className="alert-content">
                <strong>Loan Block Triggered</strong>
                <p>Worker ID: #8492 exceeded safety threshold.</p>
              </div>
              <span className="alert-time">2m ago</span>
            </div>
            
            <div className="alert-item success">
              <div className="alert-icon">✓</div>
              <div className="alert-content">
                <strong>Production Tolerance Validated</strong>
                <p>Temperature control ±2°C maintained across all shifts.</p>
              </div>
              <span className="alert-time">15m ago</span>
            </div>
            
            <div className="alert-item primary">
              <div className="alert-icon"><Clock size={14}/></div>
              <div className="alert-content">
                <strong>Shift C (Tier 3) Incoming</strong>
                <p>Preparing biometric scanners at Smart-Gate 4.</p>
              </div>
              <span className="alert-time">45m ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
