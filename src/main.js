let studentsList = [
  {
    name: "Алексей",
    surname: "Неверко",
    lastname: "Анатольевич",
    birthday: "1986.11.24",
    faculty: "Фронтенд",
    studystart: "2021",
  },
  {
    name: "Ольга",
    surname: "Неверко",
    lastname: "Константиновна",
    birthday: "1986.9.7",
    faculty: "Режисура",
    studystart: "2019",
  },
  {
    name: "Александр",
    surname: "Уласевич",
    lastname: "Александрович",
    birthday: "1987.10.27",
    faculty: "Охрана",
    studystart: "2022",
  },
];

const main = document.getElementById("main");
const $section = document.createElement("section");
const $table = document.createElement("table");
const $caption = document.createElement("caption");
const $thead = document.createElement("thead");
const $tr = document.createElement("tr");
const $thSerialNum = document.createElement("th");
const $thFullName = document.createElement("th");
const $thBirthDay = document.createElement("th");
const $thFaculty = document.createElement("th");
const $thYear = document.createElement("th");
const $tbody = document.createElement("tbody");

let column = "id";
let columnDir = false;

$section.classList.add("section", "container");
$table.classList.add("table", "table-bordered", "border-primary");
$caption.classList.add("caption");
$thSerialNum.classList.add("th");
$thSerialNum.classList.add("th");
$thSerialNum.setAttribute("scope", "col");
$thSerialNum.setAttribute("data-column", "id");
$thSerialNum.style.cursor = "pointer";
$thSerialNum.textContent = "№ п/п";

$thFullName.classList.add("th");
$thFullName.setAttribute("scope", "col");
$thFullName.setAttribute("data-column", "fullname");
$thFullName.style.cursor = "pointer";
$thFullName.textContent = "Ф. И. О. студента";

$thBirthDay.classList.add("th");
$thBirthDay.setAttribute("scope", "col");
$thBirthDay.setAttribute("data-column", "birthday");
$thBirthDay.style.cursor = "pointer";
$thBirthDay.textContent = "Дата рождения и возраст";

$thFaculty.classList.add("th");
$thFaculty.setAttribute("scope", "col");
$thFaculty.setAttribute("data-column", "faculty");
$thFaculty.style.cursor = "pointer";
$thFaculty.textContent = "Факультет";

$thYear.classList.add("th");
$thYear.setAttribute("scope", "col");
$thYear.setAttribute("data-column", "studystart");
$thYear.style.cursor = "pointer";
$thYear.textContent = "Годы обучения(курс)";

$caption.textContent = "Список студентов";

$tr.append($thSerialNum, $thFullName, $thFaculty, $thBirthDay, $thYear);
$thead.append($tr);
$table.append($thead, $tbody, $caption);
$section.append(createStudentForm().$form, $table);
main.append($section);

// клик по шапке таблицы
const $studentThall = document.querySelectorAll(".th");
$studentThall.forEach((element) => {
  element.addEventListener("click", function () {
    column = this.dataset.column;
    columnDir = !columnDir;
    render();
  });
});

// функция сортировки
function sortArr(arr, prop, dir) {
  const arrCopy = [...arr];
  return arrCopy.sort(function (a, b) {
    if (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) return -1;
  });
}
// const sortStuden = (arr, prop, dir = false) => arr.sort((a,b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 1)

// создание формы для добавления студента
function createStudentForm() {
  const $form = document.createElement("form");
  const $blockLastName = document.createElement("div");
  const $inpLastName = document.createElement("input");
  const $inpName = document.createElement("input");
  const $blocktName = document.createElement("div");
  const $inpSurName = document.createElement("input");
  const $blockSurName = document.createElement("div");
  const $inpFaculty = document.createElement("input");
  const $blockFaculty = document.createElement("div");
  const $inpBirthDay = document.createElement("input");
  const $lableBirthDay = document.createElement("lable");
  const $blockBirthDay = document.createElement("div");
  const $inpStudyStart = document.createElement("input");
  const $lableStudyStart = document.createElement("lable");
  const $blockStudyStart = document.createElement("div");
  const $buttonWrapper = document.createElement("div");
  const $btn = document.createElement("button");

  $form.classList.add("input-group", "mb-3", "form");
  $form.setAttribute("id", "add-form");
  $form.setAttribute("action", "#");

  $blockSurName.classList.add("mb-4", "block");
  $blockSurName.setAttribute("id", "block-surname");
  $inpSurName.classList.add("form-control", "border-primary", "form__inp");
  $inpSurName.placeholder = "Введите фамилию студента";
  $inpSurName.setAttribute("type", "text");
  $inpSurName.setAttribute("id", "surname-inp");
  $inpSurName.setAttribute("name", "surname");
  $inpSurName.setAttribute("data-required", "true");
  $inpSurName.setAttribute("data-min-length", "2");

  $blocktName.classList.add("mb-4", "block");
  $blocktName.setAttribute("id", "block-name");
  $inpName.classList.add("form-control", "border-primary", "form__inp");
  $inpName.placeholder = "Введите имя студента";
  $inpName.setAttribute("type", "text");
  $inpName.setAttribute("id", "name-inp");
  $inpName.setAttribute("name", "name");
  $inpName.setAttribute("data-required", "true");
  $inpName.setAttribute("data-min-length", "2");

  $blockLastName.classList.add("mb-4", "block");
  $blockLastName.setAttribute("id", "block-lastname");
  $inpLastName.classList.add("form-control", "border-primary", "form__inp");
  $inpLastName.placeholder = "Введите отчество студента";
  $inpLastName.setAttribute("type", "text");
  $inpLastName.setAttribute("id", "lastname-inp");
  $inpLastName.setAttribute("name", "lastname");
  $inpLastName.setAttribute("data-required", "true");
  $inpLastName.setAttribute("data-min-length", "2");

  $blockFaculty.classList.add("mb-4", "block");
  $blockFaculty.setAttribute("id", "block-faculty");
  $inpFaculty.classList.add("form-control", "border-primary", "form__inp");
  $inpFaculty.placeholder = "Введите факультет студента";
  $inpFaculty.setAttribute("type", "text");
  $inpFaculty.setAttribute("id", "faculty-inp");
  $inpFaculty.setAttribute("name", "faculty");
  $inpFaculty.setAttribute("data-required", "true");
  $inpFaculty.setAttribute("data-min-length", "2");

  $lableBirthDay.setAttribute("for", "birthday-inp");
  $lableBirthDay.classList.add("form-label");
  $lableBirthDay.textContent = "Дата рождения";
  $blockBirthDay.classList.add("mb-4", "block");
  $blockBirthDay.setAttribute("id", "block-birthday");
  $inpBirthDay.classList.add("form-control", "border-primary", "form__inp");
  $inpBirthDay.placeholder = "Введите дату рождения студента";
  $inpBirthDay.setAttribute("type", "date");
  $inpBirthDay.setAttribute("id", "birthday-inp");
  $inpBirthDay.setAttribute("name", "birthday");
  $inpBirthDay.setAttribute("min", "1900-01-01");
  $inpBirthDay.setAttribute("data-required", "true");

  $blockStudyStart.classList.add("mb-4", "block");
  $blockStudyStart.setAttribute("id", "block-studystart");
  $lableStudyStart.setAttribute("for", "studystart-inp");
  $lableStudyStart.classList.add("form-label");
  $lableStudyStart.textContent = "Дата поступления";
  $inpStudyStart.classList.add("form-control", "border-primary", "form__inp");
  $inpStudyStart.placeholder = "Введите год поступления студента";
  $inpStudyStart.setAttribute("type", "number");
  $inpStudyStart.setAttribute("id", "studystart-inp");
  $inpStudyStart.setAttribute("name", "studystart");
  $inpStudyStart.setAttribute("data-min-length", "2");
  $inpStudyStart.setAttribute("data-max-length", "4");
  $inpStudyStart.setAttribute("data-required", "true");

  $buttonWrapper.classList.add("input-grup-append");
  $btn.classList.add("btn", "btn-primary");
  $btn.setAttribute("type", "submit");
  $btn.textContent = "Добавить нового студента";

  $btn.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  $blocktName.append($inpName);
  $blockSurName.append($inpSurName);
  $blockLastName.append($inpLastName);
  $blockFaculty.append($inpFaculty);
  $blockBirthDay.append($inpBirthDay, $lableBirthDay);
  $blockStudyStart.append($inpStudyStart, $lableStudyStart);
  $buttonWrapper.append($btn);
  $form.append(
    $blockSurName,
    $blocktName,
    $blockLastName,
    $blockFaculty,
    $blockBirthDay,
    $blockStudyStart,
    $buttonWrapper
  );

  return {
    $form,
  };
}

// перевод даты в гг.мм.дд
function formatDate(date) {
  let dd = date.getDate();
  if (dd < 10) dd = "0" + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = "0" + mm;

  let yy = date.getFullYear();

  return yy + "." + mm + "." + dd;
}

// скланение слов
function declOfNum(number, words) {
  return words[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
  ];
}

// создание массива студентов
function newListStudent(arr) {
  let arrCopy = [...arr];
  let newListStudent = [];
  for (const student of arrCopy) {
    let index = arrCopy.indexOf(student);
    let newStudent = {
      name: `${student.name}`,
      lastname: `${student.lastname}`,
      surname: `${student.surname}`,
      birthday: new Date(student.birthday),
      faculty: `${student.faculty}`,
      studystart: `${student.studystart}`,
      fullname: `${student.surname} ${student.name} ${student.lastname}`,
      id: index + 1,
    };
    newListStudent.push(newStudent);
  }
  return newListStudent;
}

// создание одного студента
function student(studentObj) {
  const data = new Date();

  let $tr = document.createElement("tr"),
    $thNum = document.createElement("th"),
    $tdFullName = document.createElement("td"),
    $tdFaculty = document.createElement("td"),
    $tdBirth = document.createElement("td"),
    $tdYear = document.createElement("td"),
    birthday = new Date(studentObj.birthday),
    age = data - birthday,
    studystart = new Date(studentObj.studystart),
    year = data.getFullYear() - studystart.getFullYear();

  $thNum.setAttribute("scope", "row");
  $thNum.textContent = `${studentObj.id}`;
  $tdFullName.textContent = `${studentObj.fullname}`;
  $tdFaculty.textContent = `${studentObj.faculty}`;
  $tdBirth.textContent = `${formatDate(birthday)}(${
    data.getMonth() >= birthday.getMonth()
      ? `${Math.floor(age / 1000 / 60 / 60 / 24 / 360)} ${declOfNum(
          Math.floor(age / 1000 / 60 / 60 / 24 / 360),
          ["год", "года", "лет"]
        )}`
      : `${Math.floor(age / 1000 / 60 / 60 / 24 / 360) - 1} ${declOfNum(
          Math.floor(age / 1000 / 60 / 60 / 24 / 360) - 1,
          ["год", "года", "лет"]
        )}`
  })`;
  $tdYear.textContent = `${studystart.getFullYear()} - ${data.getFullYear()}
  (${
    year >= 4
      ? data.getMonth() > 8
        ? "Закончил"
        : `${year} ${declOfNum(year, ["год", "года", "лет"])}`
      : `${year} ${declOfNum(year, ["год", "года", "лет"])}`
  })`;

  $tr.append($thNum, $tdFullName, $tdFaculty, $tdBirth, $tdYear);

  return $tr;
}

function render() {
  let copyArr = [...newListStudent(studentsList)];

  copyArr = sortArr(copyArr, column, columnDir);
  

  $tbody.innerHTML = "";
  for (const studentObj of copyArr) {
    const $studentTr = student(studentObj);
    $tbody.append($studentTr);
  }
}

render();

// добовление блока подсказки при валидации
function getError(block, text) {
  let blockInp = block.getAttribute("id"),
    blockId = block.getAttribute("name"),
    blockName = block.parentNode,
    $spanError = document.createElement("span"),
    inp = document.getElementById(`${blockInp}`);

  blockName.classList.add("error");
  $spanError.setAttribute("id", `span-${blockId}`);
  $spanError.classList.add("span-error");
  $spanError.textContent = `${text}`;
  blockName.append($spanError);
}

// удаление блока подсказки при валидации
function delError(name) {
  const currentName = name.current;
  const parent = name.parentNode;
  console.log(currentName);
  if (parent.classList.contains("error")) {
    parent.querySelector(".span-error").remove();
    parent.classList.remove("error");
  }
}

// первая буква в слове всегда заглавная
function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

// очистка полей формы
function clearInp(block) {
  console.log(document.querySelectorAll(`${block}`));
  document.querySelectorAll(`${block}`).forEach((e) => {
    e.value = "";
  });
}

// валидация
function validation(form) {
  let result = true;

  const allInputs = form.querySelectorAll(".form__inp");

  for (const input of allInputs) {
    delError(input);

    console.log(input.getAttribute("type"));

    if (input.dataset.minLength) {
      if (input.value.length < input.dataset.minLength) {
        delError(input);
        getError(input, `Введите не мение ${input.value.length} символа(ов)`);
        result = false;
      } else {
        delError(input);
      }
    }

    if (input.dataset.maxLength) {
      if (input.value.length > input.dataset.maxLength) {
        delError(input);
        getError(
          input,
          `Максимальное кол-во символов: ${input.dataset.maxLength}`
        );
        result = false;
      }
      if (
        input.getAttribute("number") ||
        input.value.length < input.dataset.maxLength
      ) {
        delError(input);
        getError(input, `Введите вего ${input.dataset.maxLength} символов`);
        result = false;
      }
    }

    if (input.dataset.required == "true") {
      if (input.value == "") {
        delError(input);
        getError(input, `${input.placeholder}`);
        result = false;
      }
    }

    input.addEventListener("input", function () {
      let value = input.value.trim();

      if (value.length > 0) {
        delError(input);

        if (input.dataset.minLength) {
          if (value.length < input.dataset.minLength) {
            delError(input);
            getError(
              input,
              `Введите не мение ${input.value.length} символа(ов)`
            );
            if (
              input.getAttribute("type") === "number" ||
              value.length > input.dataset.minLength
            ) {
              delError(input);
              getError(input, `Введите год поступления в формате "гггг"`);
            }

            result = false;
          } else {
            input.parentNode.classList.remove("error");
            input.parentNode.classList.add("valid");
            input.classList.add("_usccess");
            delError(input);
          }

          if (input.dataset.maxLength) {
            if (value.length > input.dataset.maxLength) {
              delError(input);
              getError(
                input,
                `Максимальное кол-во символов: ${input.dataset.maxLength}`
              );
              if (input.getAttribute("type") === "number") {
                delError(input);
                getError(input, `Введите год поступления в формате "гггг"`);
              }
              if (
                input.getAttribute("type") === "number" &&
                value.length === input.dataset.maxLength
              ) {
                delError(input);
                getError(input, `Введите год поступления в формате "гггг"`);
              }
              result = false;
            }
          }
        }
      }
    });
  }
  return result;
}

// филитрация массива
function filtrArray(arr, prop, value) {
  let result = []
  let copyArr = [...arr]
  for (const item of copyArr) {
    if(String(item[prop]).includes(value) === true) result.push(item)
  }
  return result
}

document
  .getElementById("add-form")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    if (validation(this) === true) {
      let newStudentObj = {
        name: ucFirst(document.getElementById("name-inp").value),
        lastname: ucFirst(document.getElementById("lastname-inp").value),
        surname: ucFirst(document.getElementById("surname-inp").value),
        birthday: new Date(document.getElementById("birthday-inp").value),
        faculty: ucFirst(document.getElementById("faculty-inp").value),
        studystart: document.getElementById("studystart-inp").value,
      };

      studentsList.push(newStudentObj);

      this.querySelectorAll(".form__inp").forEach(function (e) {
        e.value = "";
        e.parentNode.classList.remove("valid");
        e.classList.remove("_success");
      });
    }

    render();
  });
