import React, { useState } from 'react';
import { BookOpen, AlertTriangle, Layers, FileCheck, CheckCircle2, Factory } from 'lucide-react';
import './SOPEngine.css';

type SOPView = 'lifecycle' | 'components' | 'quality' | 'formatting' | 'manufacturing';

const lifecycleStages = [
  { stage: 1, name: 'Identification', roles: 'Process Owner + Quality Manager' },
  { stage: 2, name: 'Planning', roles: 'Quality Manager' },
  { stage: 3, name: 'Research & Analysis', roles: 'SME + Process Owner' },
  { stage: 4, name: 'Drafting', roles: 'Technical Writer + SME' },
  { stage: 5, name: 'Internal Review', roles: 'Department Team + QA' },
  { stage: 6, name: 'Revision', roles: 'Technical Writer' },
  { stage: 7, name: 'Pilot Testing', roles: 'End Users + Process Owner' },
  { stage: 8, name: 'Final Review & Approval', roles: 'Department Head + Quality Manager' },
  { stage: 9, name: 'Publication', roles: 'Document Controller' },
  { stage: 10, name: 'Training', roles: 'Training Manager + Process Owner' },
  { stage: 11, name: 'Implementation', roles: 'Process Owner + Team Leads' },
  { stage: 12, name: 'Monitoring & Measurement', roles: 'Process Owner + Quality Manager' },
  { stage: 13, name: 'Periodic Review', roles: 'Process Owner + QA' },
  { stage: 14, name: 'Update & Revision', roles: 'Same as drafting phase' },
  { stage: 15, name: 'Archival', roles: 'Document Controller' }
];

const masterComponents = [
  { name: 'Document Header', req: 'Mandatory', freq: 'With each revision' },
  { name: 'Title Page', req: 'Mandatory', freq: 'Annual' },
  { name: 'Table of Contents', req: 'Optional', freq: 'With major updates' },
  { name: 'Purpose & Objective', req: 'Mandatory', freq: 'Annual' },
  { name: 'Scope', req: 'Mandatory', freq: 'Annual' },
  { name: 'Definitions & Acronyms', req: 'Mandatory', freq: 'Semi-annual' },
  { name: 'Roles & Responsibilities', req: 'Mandatory', freq: 'Annual' },
  { name: 'References', req: 'Mandatory', freq: 'Annual' },
  { name: 'Equipment & Materials', req: 'Mandatory', freq: 'Quarterly' },
  { name: 'Safety & Compliance', req: 'Mandatory', freq: 'Quarterly' },
  { name: 'Prerequisites', req: 'Mandatory', freq: 'Annual' },
  { name: 'Step-by-Step Procedures', req: 'Mandatory', freq: 'Annual' },
  { name: 'Process Flow Diagram', req: 'Optional', freq: 'Annual' },
  { name: 'Quality Control Checkpoints', req: 'Mandatory', freq: 'Annual' },
  { name: 'Key Performance Indicators', req: 'Mandatory', freq: 'Quarterly' },
  { name: 'Troubleshooting Guide', req: 'Optional', freq: 'Semi-annual' },
  { name: 'Escalation Matrix', req: 'Mandatory', freq: 'Annual' },
  { name: 'Documentation & Records', req: 'Mandatory', freq: 'Annual' },
  { name: 'Approval Signatures', req: 'Mandatory', freq: 'With each revision' },
  { name: 'Revision History', req: 'Mandatory', freq: 'With each revision' },
  { name: 'Training Requirements', req: 'Mandatory', freq: 'Annual' },
  { name: 'Appendices', req: 'Optional', freq: 'As needed' },
  { name: 'Distribution List', req: 'Mandatory', freq: 'Annual' },
  { name: 'Review & Audit Schedule', req: 'Mandatory', freq: 'Annual' }
];

const mistakeCategories = [
  'Scope Issues', 'Language Problems', 'Vague Instructions', 'Missing Prerequisites', 'Outdated Content',
  'No Visual Aids', 'Poor Organization', 'Missing Decision Points', 'Over-Complication', 'No Metrics',
  'Single Format Only', 'No Ownership', 'Missing References', 'No Training Plan', 'Rigid Structure',
  'Poor Version Control', 'No Feedback Loop', 'Legal Gaps', 'Safety Oversights', 'No Change Management'
];

const SOPEngine: React.FC = () => {
  const [activeView, setActiveView] = useState<SOPView>('lifecycle');

  return (
    <div className="sop-container">
      <div className="sop-header glass-panel">
        <div className="header-left">
          <h2><BookOpen size={24} className="text-secondary" /> CEO-SOP Integration Engine</h2>
          <p>Centralized matrix for standardization, compliance, and procedural lifecycle tracking.</p>
        </div>
        <div className="sop-nav">
          <button className={`btn-glass ${activeView === 'lifecycle' ? 'active' : ''}`} onClick={() => setActiveView('lifecycle')}>
            <Layers size={16} /> Lifecycle
          </button>
          <button className={`btn-glass ${activeView === 'components' ? 'active' : ''}`} onClick={() => setActiveView('components')}>
            <FileCheck size={16} /> Components
          </button>
          <button className={`btn-glass ${activeView === 'quality' ? 'active' : ''}`} onClick={() => setActiveView('quality')}>
            <CheckCircle2 size={16} /> Quality
          </button>
          <button className={`btn-glass ${activeView === 'formatting' ? 'active' : ''}`} onClick={() => setActiveView('formatting')}>
            <AlertTriangle size={16} /> Mistakes & Formats
          </button>
          <button className={`btn-glass ${activeView === 'manufacturing' ? 'active' : ''}`} onClick={() => setActiveView('manufacturing')}>
            <Factory size={16} /> Manufacturing
          </button>
        </div>
      </div>

      <div className="sop-content-area">
        {activeView === 'lifecycle' && (
          <div className="lifecycle-view glass-panel">
            <h3>SOP Lifecycle Pipeline (15 Stages)</h3>
            <div className="pipeline-grid">
              {lifecycleStages.map(stage => (
                <div key={stage.stage} className="pipeline-node">
                  <div className="stage-number">{stage.stage}</div>
                  <div className="stage-details">
                    <h4>{stage.name}</h4>
                    <span>{stage.roles}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'components' && (
          <div className="components-view glass-panel">
            <h3>Master SOP Components Architecture</h3>
            <table className="sop-table">
              <thead>
                <tr>
                  <th>Component Name</th>
                  <th>Requirement</th>
                  <th>Review Frequency</th>
                </tr>
              </thead>
              <tbody>
                {masterComponents.map((comp, idx) => (
                  <tr key={idx}>
                    <td><strong>{comp.name}</strong></td>
                    <td>
                      <span className={`badge ${comp.req === 'Mandatory' ? 'danger' : 'neutral'}`}>
                        {comp.req}
                      </span>
                    </td>
                    <td>{comp.freq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeView === 'quality' && (
          <div className="quality-view glass-panel">
            <div className="split-view">
              <div className="split-col">
                <h3>Guideline Categories (14)</h3>
                <ul className="check-list">
                  <li>Language & Tone (Active voice)</li>
                  <li>Clarity (Simple language)</li>
                  <li>Consistency (Uniform formatting)</li>
                  <li>Specificity (Exact details)</li>
                  <li>Action Orientation (Action verbs)</li>
                  <li>Numbering (Hierarchical)</li>
                  <li>Visual Aids (Screenshots/diagrams)</li>
                  <li>Page Layout (Headers/Footers)</li>
                  <li>Conditional Steps (IF-THEN)</li>
                  <li>Time References (Exact frames)</li>
                  <li>Measurements (Standard units)</li>
                  <li>Safety Emphasis (Warnings)</li>
                  <li>Cross-References (Links)</li>
                  <li>Version Control (Highlights)</li>
                </ul>
              </div>
              <div className="split-col">
                <h3>Quality Criteria Audit</h3>
                <ul className="check-list">
                  <li>Clarity (New employee test)</li>
                  <li>Completeness (All steps)</li>
                  <li>Accuracy (Technical validity)</li>
                  <li>Safety (Highlighted warnings)</li>
                  <li>Compliance (Regulatory alignment)</li>
                  <li>Testability (Audit verification)</li>
                  <li>Measurability (Quantifiable metrics)</li>
                  <li>Traceability (Action tracking)</li>
                  <li>Scalability (Volume support)</li>
                  <li>Approval (Sign-off chain)</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeView === 'formatting' && (
          <div className="mistakes-view glass-panel">
            <div className="split-view">
              <div className="split-col">
                <h3>Mistake Categories (20)</h3>
                <div className="tags-grid">
                  {mistakeCategories.map(mistake => (
                    <span key={mistake} className="tag warning-tag">{mistake}</span>
                  ))}
                </div>
              </div>
              <div className="split-col">
                <h3>Format Types Engine</h3>
                <ul className="format-list">
                  <li><strong>Simple Steps</strong> - Linear processes</li>
                  <li><strong>Hierarchical Steps</strong> - Nested complexity</li>
                  <li><strong>Flowchart</strong> - Complex branches</li>
                  <li><strong>Checklist</strong> - Verification procedures</li>
                  <li><strong>Matrix</strong> - Multi-variable mapping</li>
                  <li><strong>Process Map</strong> - High-level swimlanes</li>
                  <li><strong>Annotated Screenshots</strong> - System processes</li>
                  <li><strong>Video/Multimedia</strong> - Physical demonstrations</li>
                  <li><strong>Hybrid Format</strong> - Combination approach</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeView === 'manufacturing' && (
          <div className="manufacturing-view glass-panel">
            <h3>Manufacturing Production SOPs</h3>
            <div className="card-grid">
              {['Machine Setup & Startup', 'Production Line Operation', 'Material Handling & Loading', 'Batch Processing', 'In-Process Quality Checks', 'Line Changeover', 'Packaging Operations', 'Equipment Shutdown', 'Production Documentation', 'Yield Optimization'].map(proc => (
                <div key={proc} className="factory-card">
                  <h4>{proc}</h4>
                  <div className="factory-meta">
                    <span className="badge compliance">OSHA / ISO 9001 / GMP</span>
                    <p>Requires strict adherence to lockout/tagout & QA tolerance protocols.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SOPEngine;
