const updateDOMElement = (elementId, value) => {
  const element = document.getElementById(elementId);
  element.innerText = value;
};

const totalNumberOfPeople = (people) => {
  updateDOMElement("totalNumberOfPeople", people.length);
  return people.length;
};

const currentNumberOfPeople = (people) => {
  updateDOMElement("currentNumberOfPeople", people.length);
};

const countFirstNames = (people) => {
  let nameCounts = {};

  people.forEach((person) => {
    let firstName = person.name.split(" ")[0];
    if (nameCounts[firstName]) {
      nameCounts[firstName]++;
    } else {
      nameCounts[firstName] = 1;
    }
  });

  return nameCounts;
};

const findMostFrequentFirstName = (nameCounts) => {
  let maxCount = 0;
  let mostFrequentFirstName = "";

  for (let name in nameCounts) {
    if (nameCounts[name] > maxCount) {
      maxCount = nameCounts[name];
      mostFrequentFirstName = name;
    }
  }

  return mostFrequentFirstName;
};

const firstNameThatApersMoreOften = (people) => {
  const nameCounts = countFirstNames(people);
  const mostFrequentFirstName = findMostFrequentFirstName(nameCounts);

  updateDOMElement("firstNameApersMoreOften", mostFrequentFirstName);
};

const getUniqueFirstNames = (people) => {
  let firstNames = new Set();

  people.forEach((person) => {
    firstNames.add(person.name.split(" ")[0]);
  });

  updateDOMElement("uniqueFirstName", firstNames.size);
};

const olderAge = (people) => {
  let oldestAge = -1;

  people.forEach((person) => {
    if (person.age > oldestAge) {
      oldestAge = person.age;
    }
  });

  updateDOMElement("olderAge", oldestAge);
};

const youngerAge = (people) => {
  let youngestAge = 200;

  people.forEach((person) => {
    if (person.age < youngestAge) {
      youngestAge = person.age;
    }
  });

  updateDOMElement("youngerAge", youngestAge);
};

const averageAge = (people) => {
  let age = 0;

  people.forEach((person) => {
    age += parseInt(person.age);
  });

  updateDOMElement("averageAge", (age / totalNumberOfPeople(people)) | 0);
};

const top3HighestIncomePeople = (sortedPeople) => {
  let top3HighestIncomePeople = sortedPeople.slice(0, 3);
  let top3 = top3HighestIncomePeople.map((person) => person.name).join("; ");
  updateDOMElement("top3HighestIncome", top3);
};

const displayIncomeStatistics = (people) => {
  let sortedPeople = [...people].sort((a, b) => b.income - a.income);
  top3HighestIncomePeople(sortedPeople);
  updateDOMElement("highestIncome", "R$ " + sortedPeople[0].income.toFixed(2));
  updateDOMElement(
    "lowestIncome",
    "R$ " + sortedPeople[sortedPeople.length - 1].income.toFixed(2)
  );
};

const calculateAverageIncome = (people) => {
  let totalIncome = people.reduce((sum, person) => sum + person.income, 0);
  return totalIncome / people.length;
};

const updateAverageIncome = (people) => {
  let averageIncome = calculateAverageIncome(people);
  updateDOMElement("averageIncome", "R$ " + averageIncome.toFixed(2));
};

const countPeopleBySex = (people, sex) => {
  let count = 0;

  people.forEach((person) => {
    if (person.sex === sex) {
      count++;
    }
  });

  return count;
};

const updatePeopleCount = (people) => {
  updateDOMElement("femininePersons", countPeopleBySex(people, "feminino"));
  updateDOMElement("masculinePersons", countPeopleBySex(people, "masculino"));
  updateDOMElement("otherPersons", countPeopleBySex(people, "outro"));
};

const separateLanguages = (skill) => {
  return skill.split(":")[0].trim();
};

const findAllLanguages = () => {
  let languages = new Set();

  people.forEach((person) => {
    person.skills.split(";").forEach((skill) => {
      let language = separateLanguages(skill);
      if (language) {
        languages.add(language);
      }
    });
  });

  let sortedLanguages = Array.from(languages).sort();
  updateDOMElement("allLanguages", sortedLanguages.join("; "));
  return languages;
};

const findTopThreeLanguages = () => {
  let languageCount = {};

  people.forEach((person) => {
    person.skills.split(";").forEach((skill) => {
      let language = separateLanguages(skill);
      if (language) {
        languageCount[language] = (languageCount[language] || 0) + 1;
      }
    });
  });

  let sortedLanguages = Object.entries(languageCount).sort(
    (a, b) => b[1] - a[1]
  );
  let topThreeLanguages = sortedLanguages
    .slice(0, 3)
    .map((language) => language[0])
    .join("; ");

  updateDOMElement("top3Languages", topThreeLanguages);
};

const numberOfUniqueLanguages = () => {
  const languages = findAllLanguages();
  updateDOMElement("uniqueLanguages", languages.size);
};

const generalStatistics = (people) => {
  if (people.length === 0) {
    alert(
      "Estatísticas não podem ser contabilizadas se não tiver nenhuma pessoa!"
    );
    return;
  }
  totalNumberOfPeople(people);
  firstNameThatApersMoreOften(people);
  getUniqueFirstNames(people);
  olderAge(people);
  youngerAge(people);
  averageAge(people);
  displayIncomeStatistics(people);
  updateAverageIncome(people);
  updatePeopleCount(people);
  findAllLanguages(people);
  findTopThreeLanguages(people);
  numberOfUniqueLanguages(people);
};
