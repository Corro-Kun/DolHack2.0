import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export const downloadExcen = (data, fileName) => {

    const workbook = XLSX.utils.book_new();
  
    const worksheet = XLSX.utils.json_to_sheet(data);
  
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
    const excelBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
    saveAs(excelBlob, fileName+'.xlsx');
};