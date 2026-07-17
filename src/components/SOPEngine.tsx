import React, { useState } from 'react';
import { BookOpen, Search, Download, ChevronRight, FileText } from 'lucide-react';
import { sopGroups, type SOPGroup, type SOPPage } from '../sopConfig';
import { apiClient } from '../services/api';
import './SOPEngine.css';

const SOPEngine: React.FC = () => {
  const [activeGroup, setActiveGroup] = useState<SOPGroup>(sopGroups[0]);
  const [activePage, setActivePage] = useState<SOPPage>(sopGroups[0].pages[0]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGroupSelect = (group: SOPGroup) => {
    setActiveGroup(group);
    setActivePage(group.pages[0]);
  };

  const handleExport = () => {
    apiClient.inscribe('ceo-admin', 'SOP_EXPORT', `Exported ${activePage.title}`);
    alert(`Exporting ${activePage.title}...`);
  };

  // Generate some dummy empty rows just to show the grid structure
  const dummyRows = Array.from({ length: 15 });

  return (
    <div className="sop-hub-container">
      <div className="sop-sidebar glass-panel">
        <div className="sop-brand">
          <BookOpen size={24} className="text-secondary" />
          <h3>SOP Hub Matrix</h3>
        </div>
        
        <div className="sop-nav-groups">
          {sopGroups.map(group => (
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
                      <FileText size={14} />
                      {page.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="sop-main glass-panel">
        <div className="sop-toolbar">
          <div className="toolbar-left">
            <h2>{activePage.title}</h2>
            <span className="col-count">{activePage.columns.length} Columns Mapped</span>
          </div>
          <div className="toolbar-right">
            <div className="search-box">
              <Search size={16} />
              <input 
                type="text" 
                placeholder="Search SOP matrix..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-glass export-btn" onClick={handleExport}>
              <Download size={16} /> Export
            </button>
          </div>
        </div>

        <div className="sop-table-wrapper">
          <table className="sop-table">
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

export default SOPEngine;
