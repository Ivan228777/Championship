participants = [{"FName":"Василий","LName":"Петров","ID":"1","CompID":"1","Result":"52"},{"FName":"Иван","LName":"Иванов","ID":"2","CompID":"2","Result":"12"},{"FName":"Сидор","LName":"Иванов","ID":"3","CompID":"1","Result":"33"},{"FName":"Сидор","LName":"Сидоров","ID":"4","CompID":"1","Result":"12"},{"FName":"Емельян","LName":"Сидоров","ID":"5","CompID":"1","Result":"12"},{"FName":"Григорий","LName":"Светофоров","ID":"6","CompID":"2","Result":"3"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"2","Result":"7"},{"FName":"Клим","LName":"Каторгин","ID":"8","CompID":"2","Result":"22"},{"FName":"Сергей","LName":"Сергеев","ID":"9","CompID":"1","Result":"90"},{"FName":"Степанида","LName":"Сидорова","ID":"10","CompID":"2","Result":"25"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"3","Result":"11"},{"FName":"Петр","LName":"Фантиков","ID":"23","CompID":"4","Result":"17"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"4","Result":"22"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"2","Result":"6"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"5","Result":"42"},{"FName":"Елена","LName":"Троянова","ID":"17","CompID":"6","Result":"2"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"4","Result":"44"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"5","Result":"14"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"6","Result":"16"},{"FName":"Виктор","LName":"Клавиатуров","ID":"11","CompID":"1","Result":"1"},{"FName":"Василий","LName":"Петров","ID":"1","CompID":"2","Result":"11"},{"FName":"Сидор","LName":"Сидоров","ID":"3","CompID":"4","Result":"32"},{"FName":"Сидор","LName":"Сидоров","ID":"3","CompID":"5","Result":"66"},{"FName":"Сидор","LName":"Сидоров","ID":"3","CompID":"6","Result":"12"},{"FName":"Григорий","LName":"Светофоров","ID":"6","CompID":"6","Result":"21"},{"FName":"Григорий","LName":"Светофоров","ID":"6","CompID":"4","Result":"32"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"2","Result":"21"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"6","Result":"20"},{"FName":"Степан","LName":"Степанов","ID":"7","CompID":"5","Result":"71"},{"FName":"Василий","LName":"Петров","ID":"1","CompID":"4","Result":"33"},{"FName":"Василий","LName":"Петров","ID":"1","CompID":"6","Result":"31"},{"FName":"Сергей","LName":"Сергеев","ID":"9","CompID":"2","Result":"21"},{"FName":"Сергей","LName":"Сергеев","ID":"49","CompID":"1","Result":"90"},{"FName":"Сергей","LName":"Сергеев","ID":"49","CompID":"6","Result":"7"},{"FName":"Сергей","LName":"Сергеев","ID":"9","CompID":"6","Result":"12"}]
competencies = [{"Name":"Разглядываение тяжестей","ID":"1"},{"Name":"HTML","ID":"2"},{"Name":"Песни","ID":"3"},{"Name":"JavaScript","ID":"5"},{"Name":".Net","ID":"4"},{"Name":"Java","ID":"6"}]
const result = []

for(let i = 0; i < participants.length; i++) {
    const temp = {}

    temp.participantName = `${participants[i].FName} ${participants[i].LName}`
    temp.competencies = []
    for (let j = 0; j < competencies.length; j++) {
        if (competencies[j].ID === participants[i].CompID) {
            const competence = `${competencies[j].Name}: ${participants[i].Result}`
            temp.competencies.push(competence)
        }
    }

    result.push(temp)
}

console.log(result)


function unique(arr) {
    let result = [];
  
    for (i = 0 ; i < participants.length ; i++) {
      if (!result.includes(i)) {
        result.push(i);
      }
    }
  
    return result;
  }
  console.log( unique(participants) ); 


function renderCompetencies(result) {
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

renderCompetencies(result)