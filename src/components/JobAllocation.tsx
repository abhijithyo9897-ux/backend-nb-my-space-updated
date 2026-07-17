import React from 'react';
import { Network, Search, Target, ShieldCheck, Database, FileCode } from 'lucide-react';
import { apiClient } from '../services/api';
import './JobAllocation.css';

const activeGigs = [
  {
    id: 'GIG-001',
    title: 'Audit Decentralized Node Parity',
    domain: 'Security',
    icon: <ShieldCheck size={20} />,
    tokens: 450,
    matchRate: '98%',
    status: 'Open'
  },
  {
    id: 'GIG-002',
    title: 'Vyakarana Core Integration',
    domain: 'Engineering',
    icon: <FileCode size={20} />,
    tokens: 1200,
    matchRate: '92%',
    status: 'Open'
  },
  {
    id: 'GIG-003',
    title: 'Spatial Database Mapping',
    domain: 'Data',
    icon: <Database size={20} />,
    tokens: 850,
    matchRate: '74%',
    status: 'Locked - Requires Stake'
  }
];

const JobAllocation: React.FC = () => {
  const handleAlignStencil = async (gig: any) => {
    if (gig.status.includes('Locked')) {
      alert('Must stake tokens first.');
      return;
    }
    // Create an objective in CEO ERP
    await apiClient.createObjective('ceo-admin', gig.title, gig.tokens);
    // Dispatch it via smart gate
    await apiClient.dispatch(gig.id, 'ZONE-A-RACK-1');
    alert(`Stencil Aligned and Objective dispatched for ${gig.title}!`);
  };

  return (
    <div className="job-allocation-container">
      <div className="stencil-header glass-panel">
        <div className="header-left">
          <h2><Network size={24} className="text-primary" /> Geometric Job Stencil</h2>
          <p>Aligning talent via Turing-Nephroid algorithms.</p>
        </div>
        <div className="header-right">
          <div className="glass-input-wrapper">
            <Search size={18} className="text-muted" />
            <input type="text" className="glass-input-sm" placeholder="Scan ecosystem for gigs..." />
          </div>
        </div>
      </div>

      <div className="stencil-grid">
        <div className="saptabhagini-matrix glass-panel">
          <h3>Saptabhagini Matrix (7 Domains)</h3>
          <ul className="domain-list">
            <li className="domain-item active">
              <span className="domain-dot eng"></span> Engineering
              <span className="domain-count">14 Active</span>
            </li>
            <li className="domain-item">
              <span className="domain-dot sec"></span> Security
              <span className="domain-count">5 Active</span>
            </li>
            <li className="domain-item">
              <span className="domain-dot data"></span> Data
              <span className="domain-count">8 Active</span>
            </li>
            <li className="domain-item">
              <span className="domain-dot ux"></span> UX/UI
              <span className="domain-count">2 Active</span>
            </li>
            <li className="domain-item">
              <span className="domain-dot legal"></span> Legal / DAO
              <span className="domain-count">11 Active</span>
            </li>
          </ul>
        </div>

        <div className="gig-layer">
          <div className="gig-list">
            {activeGigs.map(gig => (
              <div key={gig.id} className="gig-card glass-panel">
                <div className="gig-icon-wrapper">{gig.icon}</div>
                <div className="gig-details">
                  <h4>{gig.title}</h4>
                  <div className="gig-meta">
                    <span className="gig-domain">{gig.domain}</span>
                    <span className="gig-id">{gig.id}</span>
                  </div>
                </div>
                
                <div className="gig-match">
                  <div className="match-bar">
                    <div className="match-fill" style={{ width: gig.matchRate }}></div>
                  </div>
                  <span className="match-text">{gig.matchRate} Alignment</span>
                </div>

                <div className="gig-action">
                  <div className="gig-tokens">{gig.tokens} <span>TKN</span></div>
                  <button 
                    className={`btn-primary ${gig.status.includes('Locked') ? 'locked' : ''}`}
                    onClick={() => handleAlignStencil(gig)}
                  >
                    <Target size={16} />
                    {gig.status.includes('Locked') ? 'Stake to Unlock' : 'Align Stencil'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAllocation;
