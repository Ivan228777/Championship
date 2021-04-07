const competencies = [{"Name": "Бег", "ID": 1}, {"Name": "HTML", "ID": 2}, {"Name": "Стихи", "ID": 20}]

const participants = [{
    "FName": "Василий",
    "LName": "Петров",
    "ID": 1,
    "CompID": 1,
    "Result": 52
}, {
    "FName": "Василий",
    "LName": "Петров",
    "ID": 1,
    "CompID": 2,
    "Result": 12
}, {
    "FName": "Степан",
    "LName": "Петров",
    "ID": 2,
    "CompID": 1,
    "Result": 120
}, {
    "FName": "Степан",
    "LName": "Петров",
    "ID": 2,
    "CompID": 2,
    "Result": 2
}, {
    "FName": "Петр",
    "LName": "Петров",
    "ID": 3,
    "CompID": 1,
    "Result": 52
}]

const result = []

for(let i = 0; i < competencies.length; i++) {
    const temp = {}

    temp.competenceName = competencies[i].Name
    temp.participants = []

    for (let j = 0; j < participants.length; j++) {
        if (participants[j].CompID === competencies[i].ID) {
            const participant = `${participants[j].FName} ${participants[j].LName}, ${participants[j].Result}`
            temp.participants.push(participant)
        }
    }

    result.push(temp)
}

function renderParticipants(result) {
    for (let i = 0; i < result.length; i++) {
        const element = document.createElement('div')

        const competenceNameElement = document.createElement('p')
        competenceNameElement.innerHTML = `<b>${result[i].competenceName}</b>`

        const participantsListElement = document.createElement('ol')
        for (let j = 0; j < result[i].participants.length; j++) {
            const participantsListItemElement = document.createElement('li')
            participantsListItemElement.innerText = result[i].participants[j]

            participantsListElement.appendChild(participantsListItemElement)
        }

        element.appendChild(competenceNameElement)
        element.appendChild(participantsListElement)

        document.body.appendChild(element)
    }
}

renderParticipants(result)