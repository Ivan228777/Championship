async function getdata(){
    const participantsResponse = await fetch("https://60704aa285c3f0001746fcaa.mockapi.io/participants")
    const competenciesResponse = await fetch("https://60704aa285c3f0001746fcaa.mockapi.io/competencies")

    const participantsResponseRead = await participantsResponse.json()
    const competenciesResponseRead = await competenciesResponse.json() 
    return{participants: participantsResponseRead, competencies:competenciesResponseRead}
}

function renderCompetencies(data) {
const result = []

for(let i = 0; i < data.participants.length; i++) {
    const temp = {}

    temp.participantName = `${data.participants[i].FName} ${data.participants[i].LName}`
    temp.competencies = []
    for (let j = 0; j < data.competencies.length; j++) {
        if (data.competencies[j].ID?.toString() === data.participants[i].CompID?.toString()) {
            const competence = `${data.competencies[j].Name}: ${data.participants[i].Result}`
            temp.competencies.push(competence)
        }
    }

    result.push(temp)
}


    for (let i = 0; i < result.length; i++) {
        const element = document.createElement('div')

        const participanteNameElement = document.createElement('p')
        participanteNameElement.innerHTML = `<b>${result[i].participantName}</b>`

        const competenciesListElement = document.createElement('ol')
        for (let j = 0; j < result[i].competencies.length; j++) {
            const competenciesListItemElement = document.createElement('li')
            competenciesListItemElement.innerText = result[i].competencies[j]

            competenciesListElement.appendChild(competenciesListItemElement)
        }

        element.appendChild(participanteNameElement)
        element.appendChild(competenciesListElement)

        document.body.appendChild(element)
    }
}

getdata().then(data => renderCompetencies(data))