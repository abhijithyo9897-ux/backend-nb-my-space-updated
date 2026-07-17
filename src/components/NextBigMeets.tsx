import React from 'react';
import { Activity, Clock, MapPin, Zap, Send } from 'lucide-react';
import { apiClient } from '../services/api';
import './NextBigMeets.css';

const NextBigMeets: React.FC = () => {
  const handleSubmitMeeting = () => {
    apiClient.submitCase('ceo-admin', 'Meeting Token #12 Concluded with Consensus');
    alert('Meeting decision logged to Autonomous Judiciary.');
  };

  return (
    <div className="meets-container">
      <div className="meets-header glass-panel">
        <div className="header-left">
          <h2><Zap size={24} className="text-secondary" /> Next Big Meets (Predictive Dispatch)</h2>
          <p>Fluid Radial Windows & Dynamic Forecasting</p>
        </div>
        <div className="status-indicator live">
          <Activity size={16} /> Forecasting Active
        </div>
      </div>

      <div className="meets-body">
        <div className="queue-visualizer glass-panel">
          <h3>Token Convergence Queue</h3>
          
          <div className="token-timeline">
            <div className="token-node past">
              <div className="token-circle">#09</div>
              <span className="token-status">Completed</span>
            </div>
            
            <div className="timeline-connector past"></div>
            
            <div className="token-node past">
              <div className="token-circle">#10</div>
              <span className="token-status">Completed</span>
            </div>
            
            <div className="timeline-connector active"></div>
            
            <div className="token-node current pulse">
              <div className="token-circle">#11</div>
              <span className="token-status">In Session</span>
            </div>
            
            <div className="timeline-connector future"></div>
            
            <div className="token-node next">
              <div className="token-circle">#12</div>
              <span className="token-status highlight">You (Next)</span>
            </div>
            
            <div className="timeline-connector future"></div>
            
            <div className="token-node future-node">
              <div className="token-circle">#13</div>
              <span className="token-status">Queued</span>
            </div>
          </div>
        </div>

        <div className="meets-details-grid">
          <div className="glass-panel detail-card primary-card">
            <div className="card-icon"><Clock size={24} /></div>
            <h4>Radial Window Forecast</h4>
            <div className="forecast-time text-gradient">14:22 - 14:35</div>
            <p>Algorithm compressed wait time by 18 minutes due to high sector throughput.</p>
          </div>
          
          <div className="glass-panel detail-card">
            <div className="card-icon success"><MapPin size={24} /></div>
            <h4>Proximity Affirmation</h4>
            <div className="proximity-status">
              <span className="status-dot success"></span> Radius Confirmed (0.4km)
            </div>
            <p>You are physically within the geo-fenced boundary. Ready for convergence.</p>
            <button className="btn-primary" style={{ marginTop: '1rem' }} onClick={handleSubmitMeeting}>
              <Send size={16} /> Submit Meeting Resolution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextBigMeets;
