import barcode from "./assets/barcode.png";

const branches = [
  { id: 1, name: "information technology", value: "it" },
  { name: "computer science", value: "cs" },
  { name: "chemical engineering", value: "ch" },
  { name: "mechanical engineering", value: "me" },
  { name: "civil engineering", value: "ce" },
  { name: "electronic and communication engineering", value: "ece" },
];
const departments = [
  { name: "faculty of technology", value: "fot" },
  { name: "faculty of pharmacy", value: "fop" },
  { name: "faculty of dental", value: "fod" },
];
const userTypes = [
  { name: "student", value: "student" },
  { name: "admin", value: "admin" },
  { name: "teacher", value: "teacher" },
];
const degrees = [
  { name: "bachelor of technology", value: "b.tech" },
  { name: "mbbs", value: "doctor (dr.)" },
];
const issueDates = [
  {
    date: "12-10-2023",
    userid: "123",
  },
  {
    date: "13-10-2023",
    userid: "123",
  },
  {
    date: "13-10-2023",
    userid: "121",
  },
];
const users = [
  {
    id: "1",
    name: "patel vrajkumar kamleshkumar",
    studentId: "20ITUOSAS",
    email: "20ITUOSAS",
    password: "",
    department: departments[0],
    branch: branches[0],
    userType: userTypes[0],
    degree: degrees[0],
    barCode: barcode,
    image:
      "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
  },
  {
    id: "2",
    name: "patel parthiv paragbhai",
    department: departments[1],
    branch: branches[1],
    userType: userTypes[1],
    degree: degrees[0],
    issueDates: ["23-1-2023", "11-11-2023"],
    barCode: barcode,
    image:
      "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
  },
  {
    id: "3",
    name: "patel suraj satishbhai",
    department: departments[2],
    branch: branches[2],
    userType: userTypes[2],
    degree: degrees[2],
    issueDates: ["24-10-2023", "19-11-2023"],
    barCode: barcode,
    image:
      "https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/",
  },
];

export { branches, departments, userTypes, users };
