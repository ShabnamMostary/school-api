const departments = [{
  name: 'Compute Science & Engineering',
  id: 1,
  abbreviation: 'CSE',
  faculty: ['Joseph Wilson', 'Beverly Sanders'],
  students: ['Patrick Traynor', 'Chen Ting', 'Jaime Ruiz', 'Alexis Cave', 'Jesse Smith']
}, {
  name: 'Electrical Engineering',
  id: 2,
  abbreviation: 'EE',
  faculty: ['Charley	Boulter', 'Lauritz	Pfeffle'],
  students: ['Norina Rylatt', 'Jorey	Griggs', 'Jack Gutcher', 'Jessica Smith', 'Shane Berns']
}
]
const students = [{
  name: 'Patrick Traynor',
  id: 1,
  departmentID: 1,
}, {
  name: 'Chen Ting',
  id: 2,
  departmentID: 1,
}, {
  name: 'Jaime Ruiz',
  id: 3,
  departmentID: 1,
}, {
  name: 'Alexis Cave',
  id: 4,
  departmentID: 1,
}, {
  name: 'Jesse Smith',
  id: 5,
  departmentID: 1,
}, {
  name: 'Norina Rylatt',
  id: 6,
  departmentID: 2,
}, {
  name: 'Jorey	Griggs',
  id: 7,
  departmentID: 2,
}, {
  name: 'Jack Gutcher',
  id: 8,
  departmentID: 2,
}, {
  name: 'Jessica Smith',
  id: 9,
  departmentID: 2,
}, {
  name: 'Shane Berns',
  id: 10,
  departmentID: 2,
}
]
const faculty = [{
  name: 'Joseph Wilson',
  id: 1,
  departmentID: 1
}, {
  name: 'Beverly Sanders',
  id: 2,
  departmentID: 1
}, {
  name: 'Charley	Boulter',
  id: 3,
  departmentID: 2
}, {
  name: 'Lauritz	Pfeffle',
  id: 4,
  departmentID: 2
}]

module.exports = { departments, students, faculty }
