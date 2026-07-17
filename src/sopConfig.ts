export interface SOPPage {
  id: string;
  title: string;
  columns: string[];
}

export interface SOPGroup {
  id: string;
  title: string;
  pages: SOPPage[];
}

export const sopGroups: SOPGroup[] = [
  {
    id: 'group-1',
    title: 'Group 1: Master Guidelines & Lifecycle',
    pages: [
      {
        id: 'sop-components',
        title: 'SOP Master Components',
        columns: ['SOP Component', 'Description', 'Purpose', 'Mandatory/Optional', 'Owner/Responsible', 'Review Frequency']
      },
      {
        id: 'sop-guidelines',
        title: 'SOP Writing Guidelines',
        columns: ['Guideline Category', 'Best Practice', 'Example/Description']
      },
      {
        id: 'sop-lifecycle',
        title: 'SOP Lifecycle Phases',
        columns: ['Phase', 'Activities', 'Responsible Party']
      },
      {
        id: 'quality-criteria',
        title: 'Quality Criteria Checkpoints',
        columns: ['Quality Criterion', 'Question to Ask', 'Pass/Fail/NA', 'Comments/Evidence', 'Severity if Missing']
      },
      {
        id: 'format-types',
        title: 'Format Types & Templates',
        columns: ['Format Type', 'Best For', 'Structure']
      },
      {
        id: 'common-mistakes',
        title: 'Common SOP Mistakes',
        columns: ['Mistake Category', 'Specific Error', 'Impact', 'How to Avoid', 'Example']
      }
    ]
  },
  {
    id: 'group-2',
    title: 'Group 2: Departmental Frameworks',
    pages: [
      {
        id: 'department-components',
        title: 'Department Critical Components',
        columns: ['Department', 'Common SOP Types', 'Critical Components']
      },
      {
        id: 'performance-metrics',
        title: 'Key Performance Metrics',
        columns: ['Metric Category', 'Specific KPI', 'How to Measure', 'Target Range', 'Frequency', 'Action if Out of Range']
      },
      {
        id: 'documentation-records',
        title: 'Documentation & Records SOPs',
        columns: ['Document Type', 'Purpose', 'Retention Period', 'Storage Location', 'Access Control', 'Disposal Method']
      }
    ]
  },
  {
    id: 'group-3',
    title: 'Group 3: Manufacturing & Operations SOPs',
    pages: [
      {
        id: 'production-sops',
        title: 'Production SOPs',
        columns: ['SOP Name', 'Purpose', 'Key Components', 'Compliance Standards', 'Critical Safety Points', 'Review Frequency']
      },
      {
        id: 'quality-control-sops',
        title: 'Quality Control SOPs',
        columns: ['SOP Name', 'Purpose', 'Key Components', 'Testing Methods', 'Documentation Requirements', 'Review Frequency']
      },
      {
        id: 'safety-compliance-sops',
        title: 'Safety & Compliance SOPs',
        columns: ['SOP Name', 'Purpose', 'Key Safety Elements', 'PPE Requirements', 'Emergency Procedures', 'Regulatory Standard']
      },
      {
        id: 'maintenance-sops',
        title: 'Maintenance SOPs',
        columns: ['SOP Name', 'Purpose', 'Maintenance Type', 'Frequency', 'Critical Actions', 'Documentation']
      },
      {
        id: 'material-management-sops',
        title: 'Material Management SOPs',
        columns: ['SOP Name', 'Purpose', 'Key Activities', 'Control Methods', 'System Tools', 'Performance Metric']
      },
      {
        id: 'process-control-sops',
        title: 'Process Control SOPs',
        columns: ['SOP Name', 'Critical Process Parameters', 'Monitoring Method', 'Control Limits', 'Corrective Action', 'Documentation']
      }
    ]
  },
  {
    id: 'group-4',
    title: 'Group 4: Training Systems',
    pages: [
      {
        id: 'training-competency-sops',
        title: 'Training & Competency SOPs',
        columns: ['SOP Name', 'Target Audience', 'Training Method', 'Competency Assessment', 'Frequency', 'Records Maintained']
      }
    ]
  },
  {
    id: 'group-5',
    title: 'Group 5: Task Matrix',
    pages: [
      {
        id: 'employee-task-matrix',
        title: 'Employee Task Matrix',
        columns: ['TASK', 'RESPOSIBILITY HEAD', 'Sub task', 'SOP Component', 'PREDEFINED STAGES', 'Guideline Category', 'Metric Category', 'Mistake Category']
      },
      {
        id: 'department-assignment',
        title: 'Department Assignment List',
        columns: ['Department', 'Sop', 'Employee', 'Details', 'Date', 'Time assigned work', 'day Work Assigned', 'Assigned jobs', 'All jobs month', 'Today', 'Time framed', 'update sheets', 'Description', 'Pending', 'completed tasks', 'Reminder sets for job.checks', 'with', 'date of given', 'date wise update', 'date expiry', 'Timeline of specific job', 'new job', 'assigned person', 'attachment space/notes']
      }
    ]
  }
];
