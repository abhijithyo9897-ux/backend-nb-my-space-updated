const fs = require('fs');
const xlsx = require('xlsx');

const workbook = xlsx.readFile("D:\\work\\NBT\\A\\Bharat Next Big CEO\\New folder (3)\\Business Management System.xlsx");
let output = '';

workbook.SheetNames.forEach(sheetName => {
    output += `\n\n=== SHEET: ${sheetName} ===\n\n`;
    const sheet = workbook.Sheets[sheetName];
    output += xlsx.utils.sheet_to_csv(sheet);
});

fs.writeFileSync("D:\\work\\NBT\\A\\Bharat Next Big CEO\\bnb-ceo-app\\bms_utf8.txt", output, 'utf8');
