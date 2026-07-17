import React, { useState } from 'react';
import { Database, Search, Download, ChevronRight, FileSpreadsheet } from 'lucide-react';
import { bmsGroups, type BMSGroup, type BMSPage } from '../bmsConfig';
import { apiClient } from '../services/api';
import './BMSHub.css';

const BMSHub: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<BMSGroup>(bmsGroups[0]);
  const [activePage, setActivePage] = useState<BMSPage>(bmsGroups[0].pages[0]);
  const [searchQuery, setSearchQuery] = useState('');

  React.useEffect(() => {
    // Non-destructive integration with the new backend
    apiClient.getStatus('ceo').then(data => {
      if (data) {
        console.log('Connected to CEO ERP Backend:', data);
      }
    });
  }, []);

  const handleGroupSelect = (group: BMSGroup) => {
    setActiveGroup(group);
    setActivePage(group.pages[0]);
  };

  // Generate some dummy empty rows just to show the grid structure
  const dummyRows = Array.from({ length: 15 });

  return (
    <div className="bms-container">
      <div className="bms-sidebar glass-panel">
        <div className="bms-brand">
          <Database size={24} className="text-secondary" />
          <h3>BMS Engine</h3>
        </div>
        
        <div className="bms-nav-groups">
          {bmsGroups.map(group => (
            <div key={group.id} className="nav-group-section">
              <button 
                className={`group-btn ${activeGroup.id === group.id ? 'active' : ''}`}
                onClick={() => handleGroupSelect(group)}
              >
                {group.title}
                <ChevronRight size={16} className={`chevron ${activeGroup.id === group.id ? 'open' : ''}`} />
              </button>
              
              {activeGroup.id === group.id && (
                <div className="nav-subpages">
                  {group.pages.map(page => (
                    <button
                      key={page.id}
                      className={`page-btn ${activePage.id === page.id ? 'active' : ''}`}
                      onClick={() => setActivePage(page)}
                    >
                      <FileSpreadsheet size={14} />
                      {page.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bms-main glass-panel">
        <div className="bms-toolbar">
          <div className="toolbar-left">
            <h2>{activePage.title}</h2>
            <span className="col-count">{activePage.columns.length} Columns Mapped</span>
          </div>
          <div className="toolbar-right">
            <div className="search-box">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search matrix..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-glass export-btn">
              <Download size={16} /> Export
            </button>
          </div>
        </div>

        <div className="bms-table-wrapper">
          <table className="bms-table">
            <thead>
              <tr>
                {activePage.columns.map((col, index) => (
                  <th key={index}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dummyRows.map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {activePage.columns.map((_, colIndex) => (
                    <td key={colIndex}>
                      <div className="skeleton-cell"></div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BMSHub;
