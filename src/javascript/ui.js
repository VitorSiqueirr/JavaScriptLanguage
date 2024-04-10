const createElementWith = (elementTag, properties = {}) => {
  const element = document.createElement(elementTag)

  Object.entries(properties).forEach(([key, value]) => {
    element[key] = value
  })

  return element
}

const appendElement = (tr, tdButton, person) =>{
  tr.append(createElementWith('td', { innerText: person.id }))
  tr.append(createElementWith('td', { innerText: person.name }))
  tr.append(createElementWith('td', { innerText: person.age }))
  tr.append(createElementWith('td', { innerText: formatters.toSexGenre(person.sex) }))
  tr.append(createElementWith('td', { innerText: formatters.toCurrency(person.income) }))
  tr.append(createElementWith('td', { innerText: person.skills }))
  tr.append(tdButton)
}

const refreshPeopleListInUI = (table, people) => {
  currentNumberOfPeople(people)
  const tBody = table.querySelector('tbody')
  const trsToRemove = tBody.querySelectorAll('tr')

  trsToRemove.forEach((tr) => {
    tr.remove()
  })

  people.forEach((person) => {
    const tr = createElementWith('tr')
    const tdButton = createElementWith('td')
    const deleteButton = createElementWith('button', { innerText: 'Deletar' })
    tdButton.append(deleteButton)

    deleteButton.addEventListener('click', () => deletePerson(table, person));

    appendElement(tr, tdButton, person)

    tBody.append(tr)
  })
}
