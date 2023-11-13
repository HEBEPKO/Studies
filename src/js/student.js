let studentsList = [
  {
    name: "Алексей",
    surname: "Неверко",
    lastname: "Анатольевич",
    birthday: "1986.11.24",
    faculty: "Фронтенд",
    studystart: "2021"
  },
  {
    name: "Ольга",
    surname: "Неверко",
    lastname: "Константиновна",
    birthday: "1986.9.7",
    faculty: "Режисура",
    studystart: "2019"
  },
  {
    name: "Александр",
    surname: "Уласевич",
    lastname: "Александрович",
    birthday: "1987.10.27",
    faculty: "Охрана",
    studystart: "2022"
  },
];

function newListStudent(arr) {
  let arrCopy = [...arr]
  let newListStudent = []
  for (const student of arrCopy) {
    let index = arrCopy.indexOf(student)
    let newStudent = {
      name: `${student.name}`,
      lastname: `${student.lastname}`,
      surname: `${student.surname}`,
      birthday: new Date(student.birthday),
      faculty: `${student.faculty}`,
      studystart: `${student.studystart}`,
      fullname: `${student.surname} ${student.name} ${student.lastname}`,
      id: index + 1
    }
    newListStudent.push(newStudent)
  }
  return newListStudent
}

function filtrArray(arr, prop, value) {
  let result = []
  let copyArr = [...arr]
  for (const item of copyArr) {
    if(String(item[prop]).includes(value) === true) result.push(item)
  }
  return result
}

newListStudent(studentsList)
console.log(filtrArray(studentsList, "birthday", 987));