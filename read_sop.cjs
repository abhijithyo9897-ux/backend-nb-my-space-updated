const fs = require('fs');
const xlsx = require('xlsx');

const dir = "D:\\work\\NBT\\Bharat Next Big Thing Project\\next big IT solutions\\Project-S\\work\\New folder\\sop";
const files = [
  "1 SOP.xlsx",
  "SOPBook1.xlsx",
  "sop manufacturing spreadsheet.xlsx",
  "sop.xlsx"
];

let output = '';

files.forEach(file => {
  output += `\n\n=================================\n`;
  output += `FILE: ${file}\n`;
  output += `=================================\n\n`;
  
  try {
    const workbook = xlsx.readFile(`${dir}\\${file}`);
    workbook.SheetNames.forEach(sheetName => {
        output += `\n\n=== SHEET: ${sheetName} ===\n\n`;
        const sheet = workbook.Sheets[sheetName];
        output += xlsx.utils.sheet_to_csv(sheet);
    });
  } catch (err) {
    output += `Error reading file: ${err.message}\n`;
  }
});

fs.writeFileSync("D:\\work\\NBT\\A\\Bharat Next Big CEO\\bnb-ceo-app\\sop_all_utf8.txt", output, 'utf8');
