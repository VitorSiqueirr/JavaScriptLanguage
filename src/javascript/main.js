const autoIncrement = createAutoIncrement();

let people = [
  {
    id: autoIncrement(),
    name: "Eduarda Mesquita",
    age: "30",
    sex: "feminino",
    income: 5500,
    skills: "Javascript; C# ;PHP;",
  },
  {
    id: autoIncrement(),
    name: "Ezequiel Nascimento",
    age: "25",
    sex: "masculino",
    income: 2250,
    skills: "Kotlin; Python; Ruby",
  },
  {
    id: autoIncrement(),
    name: "Emiliana Pio",
    age: "42",
    sex: "outro",
    income: 20000,
    skills: "Kotlin;Javascript;C#",
  },
  {
    id: autoIncrement(),
    name: "Angelina Florinda",
    age: "30",
    sex: "feminino",
    income: 15000,
    skills: "Ruby; Go; PHP; Python;",
  },
  {
    id: autoIncrement(),
    name: "Eduarda Angelo",
    age: "23",
    sex: "feminino",
    income: 8000,
    skills: "PHP; Java; C#",
  },
  {
    id: autoIncrement(),
    name: "Kleber Santana",
    age: "46",
    sex: "outro",
    income: 3000,
    skills: "Javascript",
  },
  {
    id: autoIncrement(),
    name: "Marina Alves",
    age: "25",
    sex: "feminino",
    income: 5000,
    skills: "Javascript; PHP; Kotlin;",
  },
  {
    id: autoIncrement(),
    name: "Emiliana Nascimento",
    age: "42",
    sex: "feminino",
    income: 5500,
    skills: "Kotlin; Python;",
  },
  {
    id: autoIncrement(),
    name: "Kleber Santana",
    age: "40",
    sex: "masculino",
    income: 7750,
    skills: "Python;Javascript; Ruby",
  },
  {
    id: autoIncrement(),
    name: "Ezequiel Micaela",
    age: "25",
    sex: "outro",
    income: 1000,
    skills: "Java;PHP;C#;",
  },
  {
    id: autoIncrement(),
    name: "Eduarda Gonçalo",
    age: "30",
    sex: "feminino",
    income: 500,
    skills: "Java; Javascript ; Ruby",
  },
  {
    id: autoIncrement(),
    name: "Kleber Silva",
    age: "23",
    sex: "masculino",
    income: 1500,
    skills: "Kotlin; Ruby; Python",
  },
  {
    id: autoIncrement(),
    name: "Ezequiel Machado",
    age: "27",
    sex: "masculino",
    income: 2200,
    skills: "Javascript; C#; Ruby; Go",
  },
  {
    id: autoIncrement(),
    name: "Angelina Silva",
    age: "35",
    sex: "outro",
    income: 4200,
    skills: "Ruby; Java; C#",
  },
  {
    id: autoIncrement(),
    name: "Ezequiel Nunes",
    age: "30",
    sex: "masculino",
    income: 3500,
    skills: "Javascript; Ruby",
  },
];

const handleFormSubmit = (table) => (event) => {
  const { target: form } = event;
  event.preventDefault();

  const formData = new FormData(form);
  let newPerson = Object.fromEntries(formData);

  newPerson = {
    ...newPerson,
    income: parseInt(newPerson.income),
  };

  people.push({
    id: autoIncrement(),
    ...newPerson,
  });
  form.reset();
  refreshPeopleListInUI(table, people);
  generalStatistics(people);
};

const includeSearchedValue = (textToSearchOn, searchValue) =>
  textToSearchOn.toLowerCase().includes(searchValue.toLowerCase());

const handleInputSearch = (table) => (event) => {
  const searchValue = event.target.value.toLowerCase();

  const filteredPeople = people.filter((person) =>
    [person.name, person.age, person.sex, person.skills].some((text) =>
      includeSearchedValue(text, searchValue)
    )
  );

  refreshPeopleListInUI(table, filteredPeople);
};

const deletePerson = (table, person) => {
  people = people.filter((element) => element.id !== person.id);
  refreshPeopleListInUI(table, people);
  generalStatistics(people);
};

const main = () => {
  const form = document.querySelector("form");
  const searchInput = document.querySelector('input[name="search"]');
  const table = document.querySelector("table");

  form.addEventListener("submit", handleFormSubmit(table));
  searchInput.addEventListener("input", handleInputSearch(table));

  refreshPeopleListInUI(table, people);
  generalStatistics(people);
};

main();
