// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "  med-nhi-1024  ";
const rawPatientName = "  nguyễn văn an  ";

const requiredPrefix = "MED-";
const departmentStart = 4;
const departmentEnd = 7;

const normalizedCode = rawAppointmentCode.trim().toUpperCase();
const isCodeValid = normalizedCode.startsWith(requiredPrefix);
const departmentCode = normalizedCode.slice(departmentStart, departmentEnd);
const appointmentNumber = normalizedCode.slice(numberStart);

const formattedPatientName = rawPatientName.trim().toUpperCase();

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode);
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);