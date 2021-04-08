participants = [{"FName":"Василий","LName":"Петров","ID":"1","CompID":"1","Result":"52"},{"FName":"Иван","LName":"Иванов","ID":"2","CompID":"2","Result":"12"},{"FName":"Сидор","LName":"Иванов","ID":"3","CompID":"1","Result":"33"},{"FName":"Сидор","LName":"Сидоров","ID":"4","CompID":"1","Result":"12"},{"FName":"Емельян","LName":"Сидоров","ID":"5","CompID":"1","Result":"12"},{"FName":"Григорий","LName":"Светофоров","ID":"6","CompID":"2","Result":"3"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"2","Result":"7"},{"FName":"Клим","LName":"Каторгин","ID":"8","CompID":"2","Result":"22"},{"FName":"Сергей","LName":"Сергеев","ID":"9","CompID":"1","Result":"90"},{"FName":"Степанида","LName":"Сидорова","ID":"10","CompID":"2","Result":"25"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"3","Result":"11"},{"FName":"Петр","LName":"Фантиков","ID":"23","CompID":"4","Result":"17"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"4","Result":"22"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"2","Result":"6"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"5","Result":"42"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"6","Result":"2"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"4","Result":"44"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"5","Result":"14"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"6","Result":"16"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"1","Result":"1"},{"FName":"Василий","LName":"Петров","ID":"1","CompID":"2","Result":"11"},{"FName":"Сидор","LName":"Сидоров","ID":"3","CompID":"4","Result":"32"},{"FName":"Сидор","LName":"Сидоров","ID":"3","CompID":"5","Result":"66"},{"FName":"Сидор","LName":"Сидоров","ID":"3","CompID":"6","Result":"12"},{"FName":"Григорий","LName":"Светофоров","ID":"6","CompID":"6","Result":"21"},{"FName":"Григорий","LName":"Светофоров","ID":"6","CompID":"4","Result":"32"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"2","Result":"21"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"6","Result":"20"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"5","Result":"71"},{"FName":"Василий","LName":"Петров","ID":"1","CompID":"4","Result":"33"},{"FName":"Василий","LName":"Петров","ID":"1","CompID":"6","Result":"31"},{"FName":"Сергей","LName":"Сергеев","ID":"9","CompID":"2","Result":"21"},{"FName":"Сергей","LName":"Сергеев","ID":"49","CompID":"1","Result":"90"},{"FName":"Сергей","LName":"Сергеев","ID":"49","CompID":"6","Result":"7"},{"FName":"Сергей","LName":"Сергеев","ID":"9","CompID":"6","Result":"12"}]
competencies = [{"Name":"Разглядываение тяжестей","ID":"1"},{"Name":"HTML","ID":"2"},{"Name":"Песни","ID":"3"},{"Name":"JavaScript","ID":"5"},{"Name":".Net","ID":"4"},{"Name":"Java","ID":"6"}]

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