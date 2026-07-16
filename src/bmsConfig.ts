export interface BMSPage {
  id: string;
  title: string;
  columns: string[];
}

export interface BMSGroup {
  id: string;
  title: string;
  pages: BMSPage[];
}

export const bmsGroups: BMSGroup[] = [
  {
    id: 'group-1',
    title: 'Group-1: Core Operations',
    pages: [
      {
        id: 'new-employee',
        title: 'New Employee Registration',
        columns: ['Employee ID', 'Full Name', 'Gender', 'Date of Birth', 'Contact Number', 'Email', 'Current Address', 'Department', 'Designation', 'Status']
      },
      {
        id: 'attendance-marking',
        title: 'Attendance Marking',
        columns: ['Employee ID', 'Employee Name', 'Designation', 'Department', 'Month', 'Date', 'Day', 'Check-In Time', 'Check-Out Time', 'Total Hours', 'Status', 'Overtime Hours', 'Late Arrival', 'Early Departure', 'Break Time (mins)', 'Shift', 'Location', 'Work Type', 'Leave Type', 'Leave Balance', 'Remarks']
      },
      {
        id: 'deductions',
        title: 'Deduction Page',
        columns: ['Employee ID', 'Employee Name', 'PF Deduction (₹)', 'ESI Deduction (₹)', 'TDS (₹)', 'Other Deductions (₹)', 'Total Deductions (₹)', 'Month', 'Year', 'Remarks']
      },
      {
        id: 'salary',
        title: 'Salary Page',
        columns: ['Employee ID', 'Employee Name', 'Designation', 'Department', 'Month', 'Year', 'Basic Salary (₹)', 'HRA (₹)', 'Conveyance Allowance (₹)', 'Medical Allowance (₹)', 'Other Allowances (₹)', 'Gross Salary (₹)', 'Total Working Days', 'Present Days', 'Absent Days', 'Paid Leaves', 'Unpaid Leaves', 'Overtime Hours', 'Overtime Pay (₹)', 'Bonus/Incentive (₹)', 'PF Deduction (₹)', 'ESI Deduction (₹)', 'TDS (₹)', 'Other Deductions (₹)', 'Total Deductions (₹)', 'Net Salary (₹)', 'Payment Date', 'Payment Mode', 'Bank Account', 'Payment Status', 'Remarks']
      }
    ]
  },
  {
    id: 'group-2',
    title: 'Group-2: People & Clients',
    pages: [
      {
        id: 'attendance-status',
        title: 'Attendance status',
        columns: ['Employee ID', 'Employee Name', 'Status', 'Late Arrival', 'Early Departure', 'Remarks']
      },
      {
        id: 'customer-db',
        title: 'Customer Database',
        columns: ['Customer ID', 'Customer Name', 'Phone Number', 'Alternate Phone', 'Email Address', 'Delivery Address', 'Landmark', 'Pincode', 'City', 'State', 'First Order Date', 'Last Order Date', 'Total Orders', 'Total Amount Spent (₹)', 'Average Order Value (₹)', 'Favorite Items', 'Preferred Platform', 'Customer Type', 'Birthday', 'Anniversary', 'Special Preferences', 'Feedback/Rating', 'Status', 'Remarks']
      },
      {
        id: 'employee-db',
        title: 'Employee HR Database',
        columns: ['Employee ID', 'Full Name', 'Gender', 'Date of Birth', 'Age', 'Contact Number', 'Email', 'Current Address', 'Permanent Address', 'Emergency Contact', 'Date of Joining', 'Department', 'Designation', 'Employment Type', 'Probation Period', 'Confirmation Date', 'Reporting Manager', 'Qualification', 'Experience (Years)', 'Previous Company', 'Aadhar Number', 'PAN Number', 'Bank Account No', 'IFSC Code', 'PF Number', 'ESI Number', 'Blood Group', 'Marital Status', 'Photo', 'Resume', 'Status', 'Exit Date', 'Exit Reason', 'Remarks']
      },
      {
        id: 'work-orders',
        title: 'Work Orders/Jobs',
        columns: ['Work Order ID', 'Date', 'Customer Name', 'Project/Job Name', 'Product/Service', 'Quantity', 'Priority', 'Due Date', 'Assigned To', 'Department', 'Start Date', 'Completion Date', 'Status', 'Materials Required', 'Labor Hours', 'Machine Hours', 'Production Cost (₹)', 'Labor Cost (₹)', 'Material Cost (₹)', 'Total Cost (₹)', 'Billing Amount (₹)', 'Completion %', 'Quality Status', 'Customer PO Number', 'Special Instructions', 'Remarks']
      }
    ]
  },
  {
    id: 'group-3',
    title: 'Group-3: Financial Tracking',
    pages: [
      {
        id: 'purchase',
        title: 'Purchase Page',
        columns: ['Purchase ID', 'Date', 'Supplier/Vendor Name', 'Supplier Contact', 'Item/Ingredient Name', 'Category', 'Quantity', 'Unit', 'Rate per Unit (₹)', 'Total Amount (₹)', 'GST %', 'GST Amount (₹)', 'Final Amount (₹)', 'Payment Mode', 'Payment Status', 'Invoice Number', 'Delivery Date', 'Received By', 'Quality Check', 'Remarks']
      },
      {
        id: 'sales-revenue',
        title: 'Sales & Revenue',
        columns: ['Sale ID', 'Date', 'Day', 'Month', 'Year', 'Order ID', 'Platform', 'Customer Name', 'Item Name', 'Category', 'Quantity', 'Price per Unit (₹)', 'Gross Sale (₹)', 'Discounts (₹)', 'Taxes/GST (₹)', 'Packaging Cost (₹)', 'Delivery Charges (₹)', 'Platform Commission (₹)', 'Net Revenue (₹)', 'Payment Method', 'Payment Status', 'Profit Margin (₹)', 'Profit %', 'Remarks']
      },
      {
        id: 'expense',
        title: 'Expense Tracking',
        columns: ['Expense ID', 'Date', 'Month', 'Year', 'Expense Category', 'Expense Type', 'Description', 'Vendor/Supplier Name', 'Amount (₹)', 'Payment Method', 'Payment Status', 'Invoice/Bill Number', 'GST Amount (₹)', 'Total Amount (₹)', 'Approved By', 'Department', 'Recurring', 'Frequency', 'Priority', 'Remarks']
      },
      {
        id: 'pnl',
        title: 'Profit & Loss (P&L)',
        columns: ['Month', 'Year', 'Total Sales Revenue (₹)', 'Total Orders', 'Average Order Value (₹)', 'Gross Revenue (₹)', 'Discounts Given (₹)', 'Returns/Refunds (₹)', 'Net Revenue (₹)', 'Cost of Goods Sold (COGS) (₹)', 'Raw Materials Cost (₹)', 'Packaging Cost (₹)', 'Production Cost (₹)', 'Gross Profit (₹)', 'Gross Profit Margin %', 'Salaries & Wages (₹)', 'Rent (₹)', 'Utilities (₹)', 'Marketing & Advertising (₹)', 'Platform Commissions (₹)', 'Delivery Charges (₹)', 'Maintenance & Repairs (₹)', 'Insurance (₹)', 'Other Expenses (₹)', 'Total Operating Expenses (₹)', 'EBITDA (₹)', 'Depreciation & Amortization (₹)', 'EBIT (₹)', 'Interest Expense (₹)', 'Profit Before Tax (PBT) (₹)', 'Tax (₹)', 'Net Profit (PAT) (₹)', 'Net Profit Margin %', 'Remarks']
      },
      {
        id: 'invoices',
        title: 'Invoices & Billing',
        columns: ['Invoice ID', 'Invoice Date', 'Due Date', 'Customer Name', 'Company Name', 'Billing Address', 'GSTIN/Tax ID', 'PO Number', 'Product/Service Description', 'HSN/SAC Code', 'Quantity', 'Unit Price (₹)', 'Amount (₹)', 'Discount (₹)', 'Taxable Amount (₹)', 'CGST %', 'CGST (₹)', 'SGST %', 'SGST (₹)', 'IGST %', 'IGST (₹)', 'Other Charges (₹)', 'Total Invoice Amount (₹)', 'Payment Status', 'Payment Date', 'Payment Method', 'Balance Due (₹)', 'Remarks']
      },
      {
        id: 'cash-flow',
        title: 'Cash Flow Statement',
        columns: ['Month', 'Year', 'Cash from Sales', 'Cash from Accounts Receivable', 'Other Operating Cash Inflows', 'Payment to Suppliers', 'Salary & Wages Paid', 'Rent Paid', 'Utilities Paid', 'Marketing Expenses Paid', 'Other Operating Expenses', 'Net Cash from Operating Activities', 'Sale of Equipment/Assets', 'Interest Received', 'Purchase of Equipment', 'Purchase of Assets', 'Net Cash from Investing Activities', 'Loans Received', 'Capital Invested', 'Loan Repayments', 'Interest Paid', 'Dividends Paid', 'Net Cash from Financing Activities', 'Net Increase/Decrease in Cash', 'Opening Cash Balance', 'Closing Cash Balance']
      },
      {
        id: 'balance-sheet',
        title: 'Balance sheet',
        columns: ['Date', 'Cash & Cash Equivalents', 'Accounts Receivable', 'Inventory', 'Prepaid Expenses', 'Other Current Assets', 'Total Current Assets', 'Property', 'Equipment', 'Furniture & Fixtures', 'Vehicles', 'Accumulated Depreciation', 'Net Fixed Assets', 'Intangible Assets', 'Long-term Investments', 'Other Non-Current Assets', 'Total Non-Current Assets', 'TOTAL ASSETS', 'Accounts Payable', 'Short-term Loans', 'Salaries Payable', 'Taxes Payable', 'Other Current Liabilities', 'Total Current Liabilities', 'Long-term Loans', 'Deferred Tax Liabilities', 'Other Long-term Liabilities', 'Total Non-Current Liabilities', 'TOTAL LIABILITIES', "Owner's Capital", 'Retained Earnings', 'Current Year Profit/Loss', 'TOTAL EQUITY', 'TOTAL LIABILITIES & EQUITY', 'Debt to Equity Ratio', 'Current Ratio', 'Balance Check (Assets - Liabilities - Equity)']
      }
    ]
  },
  {
    id: 'group-4',
    title: 'Group-4: Logs & Systems',
    pages: [
      {
        id: 'it-systems',
        title: 'IT & Systems Log',
        columns: ['S.No', 'Asset ID', 'Asset Type', 'Asset Category', 'Asset Name/Description', 'Brand/Manufacturer', 'Model Number', 'Serial Number', 'Purchase Date', 'Purchase Cost', 'Supplier/Vendor', 'Warranty Period (Months)', 'Warranty Expiry Date', 'Current Status', 'Asset Location', 'Assigned To', 'Assignment Date', 'IP Address', 'MAC Address', 'Operating System', 'Software Licenses', 'License Key', 'License Type', 'License Expiry Date', 'Last Maintenance Date', 'Next Maintenance Due', 'Maintenance Cost', 'Service Provider', 'Repair History', 'Downtime (Hours)', 'Depreciation Rate (%)', 'Current Book Value', 'Disposal Date', 'Remarks']
      },
      {
        id: 'visitor-log',
        title: 'Visitor/Guest Log',
        columns: ['S.No', 'Visit Date', 'Entry Time', 'Exit Time', 'Visitor Name', 'Company/Organization', 'Designation', 'Contact Number', 'Email Address', 'ID Proof Type', 'ID Proof Number', 'Purpose of Visit', 'Person to Meet', 'Department to Visit', 'Visitor Type', 'Number of Persons', 'Vehicle Number', 'Material Brought In', 'Material Taken Out', 'Access Level', 'Security Clearance', 'Remarks']
      }
    ]
  },
  {
    id: 'group-5',
    title: 'Group-5: Maintenance & Sustainability',
    pages: [
      {
        id: 'maintenance',
        title: 'Maintenance Records',
        columns: ['Maintenance ID', 'Date', 'Asset/Equipment Name', 'Asset ID', 'Maintenance Type', 'Scheduled/Unscheduled', 'Problem Description', 'Service Provider', 'Technician Name', 'Start Time', 'End Time', 'Downtime (Hours)', 'Parts Replaced', 'Parts Cost (₹)', 'Labor Cost (₹)', 'Total Cost (₹)', 'Next Service Due', 'Priority', 'Status', 'Approved By', 'Remarks']
      },
      {
        id: 'sustainability',
        title: 'Sustainability/ESG Reporting',
        columns: ['S.No', 'Reporting Period', 'ESG Category', 'Sub-Category', 'Metric Name', 'Unit of Measurement', 'Target Value', 'Actual Value', 'Variance', 'Performance Status', 'Data Source', 'Data Collection Method', 'Frequency', 'Responsible Department', 'Responsible Person', 'Baseline Value', 'Baseline Year', 'Improvement (%)', 'Energy Consumption (kWh)', 'Renewable Energy (%)', 'Water Consumption (L)', 'Water Recycled (%)', 'Waste Generated (Kg)', 'Waste Recycled (%)', 'GHG Emissions (tCO2e)', 'Scope', 'Carbon Offset', 'Employee Safety Incidents', 'Training Hours', 'Diversity Ratio (%)', 'Community Investment (₹)', 'Supplier ESG Score', 'Compliance Status', 'Audit Date', 'Certifications Held', 'Improvement Actions', 'Reporting Standard', 'Remarks']
      }
    ]
  },
  {
    id: 'group-6',
    title: 'Group-6: Production & Operations',
    pages: [
      {
        id: 'inventory',
        title: 'Inventory Page',
        columns: ['Item ID', 'Item/Ingredient Name', 'Category', 'Subcategory', 'Unit', 'Opening Stock', 'Stock In (Purchased)', 'Stock Out (Used)', 'Current Stock', 'Reorder Level', 'Maximum Stock Level', 'Unit Cost (₹)', 'Total Value (₹)', 'Supplier Name', 'Last Purchase Date', 'Last Purchase Quantity', 'Expiry Date', 'Batch Number', 'Storage Location', 'Status', 'Remarks']
      },
      {
        id: 'dispatch',
        title: 'Dispatch Page',
        columns: ['Dispatch ID', 'Order ID', 'Order Date', 'Order Time', 'Customer Name', 'Customer Phone', 'Delivery Address', 'Pincode', 'Platform', 'Item Name', 'Quantity', 'Price per Item (₹)', 'Total Order Value (₹)', 'Packaging Cost (₹)', 'Delivery Charges (₹)', 'Platform Commission (₹)', 'Net Amount (₹)', 'Order Status', 'Dispatch Time', 'Delivery Partner', 'Tracking ID', 'Estimated Delivery Time', 'Actual Delivery Time', 'Delivery Status', 'Customer Feedback', 'Rating', 'Remarks']
      },
      {
        id: 'production-prep',
        title: 'Production/Prep',
        columns: ['Production ID', 'Date', 'Shift', 'Item Name', 'Order IDs', 'Quantity to Prepare', 'Batch Number', 'Start Time', 'End Time', 'Total Time Taken (mins)', 'Prepared By', 'Ingredients Used', 'Wastage/Scrap (₹)', 'Production Cost (₹)', 'Quality Check Status', 'Quality Checked By', 'Shelf Life', 'Expiry Date/Time', 'Storage Location', 'Packaged Quantity', 'Rejected Quantity', 'Reason for Rejection', 'Remarks']
      },
      {
        id: 'quality-control',
        title: 'Quality Control',
        columns: ['QC ID', 'Inspection Date', 'Inspection Time', 'Product/Item Name', 'Batch/Lot Number', 'Production Date', 'Quantity Inspected', 'Inspection Type', 'Inspector Name', 'Inspection Criteria', 'Visual Inspection', 'Dimensional Check', 'Weight/Quantity Check', 'Functional Test', 'Packaging Check', 'Labeling Check', 'Passed Quantity', 'Failed Quantity', 'Defect Type', 'Defect Description', 'Severity Level', 'Root Cause', 'Corrective Action', 'Preventive Action', 'Status', 'Approved By', 'Remarks']
      },
      {
        id: 'menu-catalog',
        title: 'Menu/Product Catalog',
        columns: ['Item ID', 'Item Name', 'Category', 'Subcategory', 'Description', 'Ingredients', 'Serving Size', 'Preparation Time (mins)', 'Price (₹)', 'Cost of Ingredients (₹)', 'Profit per Item (₹)', 'Profit %', 'Available on Platforms', 'Popularity Score', 'Total Orders (Monthly)', 'Customer Rating', 'Cuisine Type', 'Spice Level', 'Veg/Non-Veg', 'Contains Allergens', 'Nutritional Info (Calories)', 'Image URL', 'Status', 'Remarks']
      }
    ]
  },
  {
    id: 'group-7',
    title: 'Group-7: Innovation & Skills',
    pages: [
      {
        id: 'rnd',
        title: 'R&D Activities',
        columns: ['S.No', 'Project ID', 'Project Name', 'Project Type', 'Start Date', 'Expected End Date', 'Actual End Date', 'Project Status', 'Project Leader', 'Team Members', 'Department', 'Research Objective', 'Budget Allocated', 'Actual Expenditure', 'Funding Source', 'Grant Reference', 'Technology Area', 'Milestone Name', 'Milestone Due Date', 'Milestone Status', 'Deliverables', 'IP Generated', 'IP Application Number', 'Publications', 'Collaboration Partners', 'Testing Phase', 'Commercial Viability', 'Remarks']
      },
      {
        id: 'training',
        title: 'Training & Skills Matrix',
        columns: ['S.No', 'Employee ID', 'Employee Name', 'Department', 'Designation', 'Date of Joining', 'Skill Category', 'Skill Name', 'Required Proficiency Level', 'Current Proficiency Level', 'Skill Gap', 'Certification Required', 'Certification Name', 'Certification Number', 'Issuing Authority', 'Certification Date', 'Certification Expiry Date', 'Certification Status', 'Training Required', 'Training Name', 'Training Type', 'Training Provider', 'Training Start Date', 'Training End Date', 'Training Status', 'Training Hours', 'Training Cost', 'Assessment Score (%)', 'Assessment Date', 'Trainer Name', 'Can Train Others', 'Next Review Date', 'Compliance Requirement', 'Training Documents', 'Last Updated Date', 'Remarks']
      }
    ]
  },
  {
    id: 'group-8',
    title: 'Group-8: Legal, Compliance & Assets',
    pages: [
      {
        id: 'assets',
        title: 'Assets & Equipment',
        columns: ['Asset ID', 'Asset Name', 'Asset Type', 'Category', 'Manufacturer', 'Model Number', 'Serial Number', 'Purchase Date', 'Purchase Price (₹)', 'Supplier/Vendor', 'Warranty Period', 'Warranty Expiry', 'Depreciation Method', 'Useful Life (Years)', 'Depreciation Rate %', 'Accumulated Depreciation (₹)', 'Current Book Value (₹)', 'Location/Department', 'Assigned To', 'Condition Status', 'Last Service Date', 'Next Service Due', 'Insurance Policy No', 'Insurance Expiry', 'Disposal Date', 'Disposal Value (₹)', 'Remarks']
      },
      {
        id: 'tax-register',
        title: 'Tax Register & Compliance',
        columns: ['S.No', 'Compliance ID', 'Compliance Type', 'Form/Return Name', 'Filing Frequency', 'Applicable Period', 'Due Date', 'Actual Filing Date', 'Status', 'Penalty/Late Fee', 'Turnover Category', 'GSTIN/PAN/TAN', 'State/UT', 'Category Classification', 'Tax Amount Payable', 'Tax Amount Paid', 'Payment Mode', 'Payment Reference', 'Portal Used', 'Username/Login ID', 'Acknowledgment Number', 'Return Filing Officer', 'CA/Tax Consultant', 'Reminder Alert Days', 'Email Alert Sent', 'Previous Year Status', 'Amendments Filed', 'Assessment Status', 'Notice Received', 'Notice Response Date', 'Supporting Documents', 'Audit Requirement', 'Compliance Notes', 'Last Updated Date', 'Last Updated By']
      },
      {
        id: 'loan-finance',
        title: 'Loan & Finance Management',
        columns: ['S.No', 'Loan ID', 'Loan Type', 'Lender Name', 'Loan Account Number', 'Loan Sanction Date', 'Loan Disbursement Date', 'Principal Amount', 'Interest Rate (%)', 'Interest Type', 'Loan Tenure (Months)', 'EMI Amount', 'EMI Start Date', 'EMI Due Date', 'Payment Mode', 'Total EMIs Paid', 'EMIs Remaining', 'Principal Paid', 'Interest Paid', 'Outstanding Principal', 'Prepayment Done', 'Prepayment Amount', 'Prepayment Charges', 'Last EMI Paid Date', 'Next EMI Due Date', 'Loan Closure Date', 'Total Interest Payable', 'Total Amount Payable', 'Collateral/Security', 'Guarantor Name', 'Status', 'Loan Documents', 'Remarks']
      },
      {
        id: 'insurance',
        title: 'Insurance Register',
        columns: ['S.No', 'Policy ID', 'Insurance Type', 'Insurance Company', 'Policy Holder Name', 'Insured Asset/Person', 'Policy Start Date', 'Policy End Date', 'Policy Tenure', 'Sum Insured', 'Premium Amount', 'Premium Payment Mode', 'Premium Due Date', 'Premium Paid Date', 'Payment Status', 'Agent Name', 'Agent Contact', 'Nominee Name', 'Nominee Relationship', 'Deductible Amount', 'Co-payment (%)', 'Claim History', 'Last Claim Date', 'Last Claim Amount', 'Renewal Reminder Days', 'Auto-renewal', 'Coverage Details', 'Exclusions', 'Policy Documents', 'Remarks']
      },
      {
        id: 'legal-license',
        title: 'Legal/License Register',
        columns: ['S.No', 'License/Registration ID', 'Document Type', 'Document Name', 'Issuing Authority', 'Registration Number', 'Jurisdiction', 'Application Date', 'Approval Date', 'Issue Date', 'Validity Start Date', 'Validity End Date', 'Validity Period', 'Renewal Required', 'Renewal Due Date', 'Renewal Fee', 'Renewal Reminder Days', 'Renewal Status', 'Application Fee', 'Current Status', 'Purpose/Scope', 'Key Requirements', 'Responsible Person', 'Contact at Authority', 'Authority Phone/Email', 'Associated Fees/Penalties', 'Document Storage Location', 'Supporting Documents', 'Amendments/Modifications', 'Inspection/Audit Required', 'Last Inspection Date', 'Remarks']
      }
    ]
  },
  {
    id: 'group-9',
    title: 'Group-9: CRM & Partnerships',
    pages: [
      {
        id: 'supplier',
        title: 'Supplier/Vendor',
        columns: ['Vendor ID', 'Vendor/Supplier Name', 'Contact Person', 'Phone Number', 'Alternate Phone', 'Email Address', 'Address', 'City', 'State', 'Pincode', 'GST Number', 'PAN Number', 'Product/Service Category', 'Items Supplied', 'Payment Terms', 'Credit Period (Days)', 'Bank Name', 'Account Number', 'IFSC Code', 'First Transaction Date', 'Last Transaction Date', 'Total Purchase Amount (₹)', 'Outstanding Amount (₹)', 'Rating', 'Status', 'Remarks']
      },
      {
        id: 'quotations',
        title: 'Quotations',
        columns: ['Quotation ID', 'Date', 'Valid Until', 'Customer/Lead Name', 'Company Name', 'Contact Person', 'Phone', 'Email', 'Product/Service Description', 'Quantity', 'Unit Price (₹)', 'Subtotal (₹)', 'Discount %', 'Discount Amount (₹)', 'Taxable Amount (₹)', 'GST/Tax %', 'Tax Amount (₹)', 'Shipping Charges (₹)', 'Total Amount (₹)', 'Payment Terms', 'Delivery Terms', 'Prepared By', 'Approved By', 'Status', 'Follow-up Date', 'Converted to Order', 'Remarks']
      },
      {
        id: 'payment-tracking',
        title: 'Payment Tracking',
        columns: ['Payment ID', 'Date', 'Invoice ID', 'Customer Name', 'Invoice Amount (₹)', 'Payment Amount (₹)', 'Payment Mode', 'Transaction ID/Cheque No', 'Bank Name', 'Payment Status', 'Received Date', 'Reconciliation Status', 'Late Payment Days', 'Late Fee (₹)', 'Advance Payment (₹)', 'Balance Amount (₹)', 'Received By', 'Deposited To', 'Receipt Number', 'Remarks']
      },
      {
        id: 'projects',
        title: 'Projects & Contracts',
        columns: ['Project ID', 'Project Name', 'Client Name', 'Contract Number', 'Contract Date', 'Start Date', 'Expected Completion', 'Actual Completion', 'Project Manager', 'Project Type', 'Project Value (₹)', 'Advance Received (₹)', 'Milestones', 'Milestone Payment (₹)', 'Total Paid (₹)', 'Balance (₹)', 'Completion %', 'Status', 'Team Members', 'Deliverables', 'Risks', 'Remarks']
      },
      {
        id: 'leads',
        title: 'Leads & Sales Pipeline',
        columns: ['Lead ID', 'Date Generated', 'Lead Source', 'Lead Owner', 'Company Name', 'Contact Person', 'Designation', 'Phone', 'Email', 'Address', 'Product/Service Interest', 'Estimated Value (₹)', 'Probability %', 'Lead Stage', 'Last Contact Date', 'Next Follow-up Date', 'Competitors', 'Decision Timeline', 'Key Requirements', 'Proposal Sent', 'Demo Given', 'Negotiation Status', 'Lost Reason', 'Status', 'Remarks']
      }
    ]
  }
];
